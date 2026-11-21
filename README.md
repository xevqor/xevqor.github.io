# XEVQOR — Zero-Server Client-Side Cryptographic Suite

[![Mozilla HTTP Observatory](https://img.shields.io/badge/Mozilla_Observatory-135%2F100_Grade_A%2B-00e676?style=flat-square&logo=mozilla&logoColor=white)](https://developer.mozilla.org/en-US/observatory/analyze?host=xevqor.my.id)
[![Security Headers](https://img.shields.io/badge/Security_Headers-Grade_A%2B-00e676?style=flat-square&logo=cloudflare&logoColor=white)](https://securityheaders.com/?q=https%3A%2F%2Fxevqor.my.id&followRedirects=on)
[![VirusTotal](https://img.shields.io/badge/VirusTotal-0%2F94_Clean-00e676?style=flat-square&logo=virustotal&logoColor=white)](https://www.virustotal.com/gui/url/6098d841455f4a536cf14276468bf9e51990f4b6e35c9c5534657d8a750a886f)
[![Qualys SSL Labs](https://img.shields.io/badge/SSL_Labs-Grade_A%2B-00e676?style=flat-square&logo=letsencrypt&logoColor=white)](https://www.ssllabs.com/ssltest/analyze.html?d=xevqor.my.id)
[![License: MIT](https://img.shields.io/badge/License-MIT-e0e0e0?style=flat-square)](LICENSE)

> **Official Production Gateway:** [`https://xevqor.my.id/`](https://xevqor.my.id/)  
> **GitHub Pages Mirror:** [`https://xevqor.github.io/`](https://xevqor.github.io/)

XEVQOR is a zero-dependency, single-file-per-route suite of client-side cryptographic and privacy utilities built strictly on the native **Web Crypto API** (`SubtleCrypto` and `crypto.getRandomValues()`). Every operation executes inside volatile browser memory with zero backend servers, zero cookies, zero `localStorage`, and `connect-src 'none'` network isolation.

---

## Independent External Security Audits

| Audit Platform | Target | Result / Score | Verification Link |
| :--- | :--- | :--- | :--- |
| **Mozilla HTTP Observatory** | `xevqor.my.id` | **`135/100` — Grade A+** (`12/12` passed) | [View Live Report](https://developer.mozilla.org/en-US/observatory/analyze?host=xevqor.my.id) |
| **Security Headers** | `xevqor.my.id` | **Grade A+** | [View Live Report](https://securityheaders.com/?q=https%3A%2F%2Fxevqor.my.id&followRedirects=on) |
| **urlscan.io** | `xevqor.my.id` | **0 Malicious / 0 Third-Party Requests** | [View Live Scan](https://urlscan.io/search/#domain%3Axevqor.my.id) |
| **VirusTotal** | `xevqor.my.id` | **0 / 94 Clean** | [View Live Report](https://www.virustotal.com/gui/url/6098d841455f4a536cf14276468bf9e51990f4b6e35c9c5534657d8a750a886f) |
| **Qualys SSL Labs** | `xevqor.my.id` | **Grade A+** (TLS 1.3 + HSTS Preload) | [View Live Report](https://www.ssllabs.com/ssltest/analyze.html?d=xevqor.my.id) |

---

## Suite Architecture & Modules

| Route | Module | Cryptographic Primitive & Implementation Details |
| :--- | :--- | :--- |
| `/` | **Portal Index** | Zero-dependency PWA launcher with local QR rendering and offline Service Worker bootstrap. |
| `/encrypt/` | **File Vault** | **Chunked AES-256-GCM** (`10 MB` chunks), `PBKDF2-SHA256` (`600,000` iterations), unique 96-bit random IV per chunk, chunk index + final-chunk flag bound in AAD, drag-and-drop + file picker support. |
| `/cipherlink/` | **Stateless URL Cipher** | `deflate-raw` compression + `AES-256-GCM` (`PBKDF2-SHA256`, `600,000` iterations) stored exclusively in the URL `#fragment` (never sent over HTTP) and scrubbed from the address bar via `history.replaceState()`. |
| `/stego/` | **Container Trailer** | `AES-256-GCM` (`PBKDF2-SHA256`, `600,000` iterations) appended after host EOF with magic trailer marker `XEVQOR88` (non-LSB). |
| `/nebula/` | **Zero-Width Cipher** | `AES-256-GCM` (`PBKDF2-SHA256`, `600,000` iterations) mapped at `1 bit = 1 zero-width character` (`8` invisible characters per byte; total length `8 × (plaintext_bytes + 44)`, i.e. `352` characters fixed overhead for salt + IV + GCM tag). |
| `/nano/` | **Compact Text Cipher** | `deflate-raw` + `AES-256-GCM` (`PBKDF2-SHA256`, `600,000` iterations) encoded as compact Base64. |
| `/keypass/` | **Deterministic Keypass** | `PBKDF2-SHA256` (`600,000` iterations, `1024-bit` output, domain-separated salt `xevqor.keypass.v2:` + lowercase trimmed service label) generating 28-character Output A and deterministic symbol-mapped Output B. |
| `/hash/` | **Integrity Checksum** | Streaming/local `SHA-256`, `SHA-512`, and `SHA-1` (*legacy compatibility only*) for files and UTF-8 text. |
| `/jwt/` | **JWT Inspector** | Local Base64URL header/payload decoder and `exp` timestamp analyzer (`unverified signature` — does not validate cryptographic signatures). |
| `/dice/` | **Multifunctional 3D Dice** | `crypto.getRandomValues()` with unbiased rejection sampling (`< 4,294,967,292`), outputting individual die faces, total sum, arithmetic mean, Shannon entropy bits (`log2(6) ≈ 2.585 bits/die`), and volatile roll history. |

---

## Honest Threat-Model & Operational Boundaries

1. **Client-Side Execution & Passphrase Entropy:** Security relies entirely on the user's passphrase/Brain Key entropy and an uncompromised local device/browser. Offline brute-force resistance depends on `PBKDF2-SHA256` (`600,000` iterations).
2. **Passphrase Whitespace Normalization:** `/cipherlink/` trims leading and trailing whitespace (`.trim()`) before key derivation, whereas `/nano/` preserves raw whitespace verbatim.
3. **Stateless URL Links (`/cipherlink/`):** Because there is no server database, XEVQOR cannot remotely expire or revoke a shared URL; anyone possessing the full `#fragment` link and passphrase can decrypt it locally.
4. **Stego & Nebula Carrier Fragility:** `/stego/` uses an unencrypted `XEVQOR88` EOF trailer marker (providing authenticated confidentiality, not covert forensic steganography) and will be stripped if uploaded to platforms that re-encode images/videos. `/nebula/` zero-width characters may be stripped by messaging apps that sanitize invisible Unicode.
5. **Service Worker Offline Caching (`sw.js`):** `sw.js` caches same-origin `HTTP 200` `GET` responses so all modules run in Airplane Mode. URL `#fragments` are never transmitted to the network or Service Worker fetch layer.
6. **Clipboard Auto-Clear:** The 45-second clipboard auto-wipe uses `navigator.clipboard` and executes when the browser grants clipboard read/write permissions.
7. **Hosting Header Scope:** Production (`xevqor.my.id`) enforces strict `_headers` (`CSP` with per-route SHA-256 script hashes, `COOP: same-origin`, `COEP: require-corp`, `HSTS Preload`, `connect-src 'none'`). The GitHub Pages mirror (`xevqor.github.io`) serves identical HTML/JS artifacts under `<meta>` CSP rules.
8. **Audit Scope:** External badges verify HTTP security headers, TLS configuration, and domain reputation; the JavaScript implementation itself has not undergone a formal paid third-party cryptographic audit.

---

## Reproducible Multi-Route Integrity Verification

Verify that every local, GitHub mirror, and production artifact matches `SHA256SUMS.txt`:

```bash
# 1. Verify all repository & production files locally
sha256sum -c SHA256SUMS.txt

# 2. Verify live production parity across routes against SHA256SUMS.txt
for route in index.html keypass/index.html hash/index.html jwt/index.html cipherlink/index.html nano/index.html nebula/index.html encrypt/index.html stego/index.html dice/index.html sw.js manifest.json sitemap.xml; do
  live_hash=$(curl -sL "https://xevqor.my.id/${route}" | sha256sum | awk '{print $1}')
  repo_hash=$(grep " ${route}$" SHA256SUMS.txt | awk '{print $1}')
  echo "${route}: live=${live_hash:0:12} repo=${repo_hash:0:12}"
done
```

## License

Released under the [MIT License](LICENSE).
