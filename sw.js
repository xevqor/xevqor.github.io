const CACHE_NAME = 'xevqor-vault-v3-cl';
const CORE_ASSETS = ['/', '/index.html', '/manifest.json', '/favicon.svg', '/icon-192.png', '/icon-512.png', '/keypass', '/hash', '/jwt', '/cipherlink', '/nano', '/nebula', '/encrypt', '/stego', '/dice'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => Promise.all(CORE_ASSETS.map((u) => c.add(new Request(u, { cache: 'reload' }))))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(fetch(e.request).then((res) => {
    if (res && res.status === 200 && res.type === 'basic') { const cl = res.clone(); e.waitUntil(caches.open(CACHE_NAME).then((c) => c.put(e.request, cl))); }
    return res;
  }).catch(() => caches.match(e.request).then((c) => c || caches.match('/index.html'))));
});
