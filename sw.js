const CACHE_NAME = 'xevqor-vault-v1';

// Daftar aset inti, ikon PWA & seluruh 9 modul utilitas XEVQOR
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/keypass',
  '/hash',
  '/jwt',
  '/burn',
  '/nano',
  '/nebula',
  '/encrypt',
  '/stego',
  '/dice'
];

// Hilangkan flag redirected agar kompatibel dengan Safari/WebKit & Cloudflare 308
async function cleanResponse(response) {
  if (!response || !response.redirected) return response;
  const body = await response.blob();
  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });
}

// 1. Install: Simpan seluruh cangkang aplikasi, ikon & 9 modul secara tangguh
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        PRECACHE_URLS.map((url) =>
          fetch(url, { cache: 'reload' }).then(async (response) => {
            if (response && response.ok) {
              const sanitized = await cleanResponse(response);
              return cache.put(url, sanitized);
            }
          })
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate: Bersihkan cache versi lama secara otomatis
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('xevqor-vault-') && name !== CACHE_NAME)
          .map((oldName) => caches.delete(oldName))
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch: Stale-While-Revalidate untuk kecepatan instan & mode 100% offline
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Lewati API QR eksternal agar tidak menyumbat cache saat offline
  if (url.hostname === 'api.qrserver.com') return;

  const isSameOrigin = url.origin === self.location.origin;
  const isGoogleFont =
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com';

  if (!isSameOrigin && !isGoogleFont) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Normalisasi URL dengan/tanpa trailing slash agar cocok di Cloudflare & GitHub Pages
      const cleanPath =
        isSameOrigin && url.pathname.length > 1 && url.pathname.endsWith('/')
          ? url.pathname.slice(0, -1)
          : url.pathname;

      const cachedResponse =
        (await cache.match(request)) ||
        (isSameOrigin ? await cache.match(cleanPath) : null);

      const networkFetch = fetch(request)
        .then(async (networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const sanitized = await cleanResponse(networkResponse.clone());
            await cache.put(request, sanitized);
          }
          return networkResponse;
        })
        .catch(() => null);

      // Sajikan dari cache seketika jika ada, atau tunggu jaringan/fallback offline
      return (
        cachedResponse ||
        (await networkFetch) ||
        (await cache.match('/index.html'))
      );
    })
  );
});

