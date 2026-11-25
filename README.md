<div align="center">

# X E V Q O R

**Architecting Future Digital Systems**  
*Client-Side Cryptographic Suite. Zero-Server Client-Side Architecture.*

[![Architecture](https://img.shields.io/badge/Architecture-Zero--Knowledge-0a0a0a?style=flat-square&labelColor=000000)]()
[![Execution](https://img.shields.io/badge/Execution-100%25_Client--Side-141414?style=flat-square&labelColor=000000)]()
[![Cryptography](https://img.shields.io/badge/Crypto-Web_Crypto_API-1a1a1a?style=flat-square&labelColor=000000)]()
[![Telemetry](https://img.shields.io/badge/Telemetry-Zero_Tracking-222222?style=flat-square&labelColor=000000)]()
[![Offline](https://img.shields.io/badge/Runtime-Offline_Capable-2b2b2b?style=flat-square&labelColor=000000)]()

</div>

---

## Official Gateway & Mirror Network

XEVQOR is deployed across independent edge networks serving the exact same static build (verifiable via `SHA256SUMS.txt`):

| Endpoint | Network / Role |
| :--- | :--- |
| **https://xevqor.org** | Primary Official Gateway (Cloudflare Edge + Strict `_headers`) |
| **https://xevqormyid.pages.dev** | Cloudflare Pages Direct Mirror |
| **https://xevqor.github.io** | GitHub Pages Auditable Source Mirror |

---

## Core Architecture & Privacy Guarantee

> *"What you do here, stays here."*

* **100% Client-Side Execution:** Key derivation, encryption, hashing, token inspection, compression, and binary/Unicode payload encoding run locally in browser memory via the native **W3C Web Crypto API (`window.crypto.subtle`)**.
* **Zero Third-Party Requests:** No analytics, no cookies, no external font CDNs, and no third-party QR APIs. Typography uses local system font stacks, and donation QR codes render locally via an embedded **Reed-Solomon SVG generator (`OfflineQR`)**.
* **Browser-Enforced CSP Lockdown:** Enforces `Content-Security-Policy` (`connect-src 'none'`, `form-action 'none'`, `object-src 'none'`) and `referrer="no-referrer"`, blocking outbound network calls at the browser engine level after initial load.
* **Zero Data Persistence:** No backend servers, no databases, and no `localStorage` credential retention. Inputs and keys stay strictly in volatile browser tab RAM.
* **Offline Capable (PWA):** Backed by a same-origin Service Worker (`sw.js`) caching static app-shell assets for air-gapped operation without caching user secrets or URL `#` fragments.

---

## Cryptographic Primitives & Audit Notes

* **Deterministic Key Derivation (`/keypass`):** Uses `PBKDF2` (`HMAC-SHA-256`, **600,000 iterations**) via `SubtleCrypto.deriveBits`. The case-normalized (`lowercase`) domain-prefixed UTF-8 *Identity Label* (`xevqor.keypass.v2:<label>`) serves as the deterministic salt paired with the *Brain Key* to derive 28-character passwords in memory (Output B is a deterministic remapped variant of Output A), featuring a 45-second clipboard auto-wipe.
* **Authenticated Encryption (`/encrypt`, `/nano`, `/cipherlink`, `/stego`, `/nebula`):** Uses `AES-256-GCM` with fresh 96-bit random IVs and 128-bit per-payload CSPRNG salts (`PBKDF2-SHA256`, 600,000 iterations across all 5 AEAD encryption modules and Keypass). Because `/cipherlink` is 100% stateless with no server database, decryption scrubs the URL fragment from the active session address bar (`history.replaceState`), while distributed copies remain the sender's responsibility.
* **Entropy Source (`/dice`):** Uses OS-level CSPRNG (`window.crypto.getRandomValues()`) with unbiased rejection sampling (`uint32 < 4294967292`) rather than `Math.random()`.
* **Service Worker (`sw.js`):** Same-origin `GET` cache handler (`xevqor-vault-v2-cl`) caches same-origin HTTP 200 GET responses for offline availability (never caching URL # fragments or user secrets).

---

## Module Overview

| Module | Endpoint | Purpose |
| :--- | :--- | :--- |
| **KEYPASS** | `/keypass` | Deterministic password generator (`PBKDF2-SHA256`, primary + remapped output). |
| **HASH** | `/hash` | `SHA-256`, `SHA-512`, and `SHA-1 (Legacy Checksum)` file and text digest verifier. |
| **JWT** | `/jwt` | Offline JSON Web Token decoder and expiry inspector (`unverified signature`). |
| **CIPHERLINK** | `/cipherlink` | Stateless encrypted links via URL fragment (`#`) with active address-bar scrubbing. |
| **NANO** | `/nano` | `deflate-raw` compressor and `AES-256-GCM` text cipher. |
| **NEBULA** | `/nebula` | Zero-width Unicode (`U+200B`/`U+200C`) covert text carrier. |
| **ENCRYPT** | `/encrypt` | 10MB Chunked AES-256-GCM `.xqr` file vault (`AES-256-GCM`). |
| **STEGO** | `/stego` | Authenticated EOF binary container append (`XEVQOR88` trailer, non-LSB). |
| **DICE** | `/dice` | Multifunctional unbiased 3D CSPRNG dice (faces, sum, mean, Shannon entropy bits & roll history). |

---

## How to Verify & Self-Host

1. **Audit Zero Network Traffic & CSP:** Open DevTools (`F12` -> **Network**) while operating any utility—including the **Support Xevqor** QR modal—to verify zero outbound requests and `connect-src 'none'`.
2. **Verify Production-to-Mirror Parity:**

       curl -sL https://xevqor.org | sha256sum
       curl -sL https://xevqor.github.io | sha256sum
       sha256sum -c SHA256SUMS.txt

3. **Test Air-Gapped Offline Execution:** Load `https://xevqor.org` once, enable **Airplane Mode**, and run any of the 9 tools via Service Worker cache.
4. **Clone & Self-Host:** `git clone https://github.com/xevqor/xevqor.github.io.git && cd xevqor.github.io` and serve via any static HTTP server (`python3 -m http.server`).

---

## Independent Public Security & Privacy Audits

Live production (`https://xevqor.org/`) verified across independent public security, malware, TLS, and network-telemetry scanners:

| Audit Platform | Verified Result | Permanent Public Report |
| :--- | :--- | :--- |
| **Mozilla HTTP Observatory** | **Grade A+ (`135/100` — `12/12` Tests Passed)**, SHA-256 CSP, 0 Cookies | [View Live Report](https://developer.mozilla.org/en-US/observatory/analyze?host=xevqor.org) |
| **Security Headers (Snyk)** | **Grade A+** — All 6 HTTP security headers active, 0 warnings | [View Live Report](https://securityheaders.com/?q=https%3A%2F%2Fxevqor.org%2F&followRedirects=on) |
| **urlscan.io (Public Sandbox)** | **1 Domain (`xevqor.org`), 2 Requests, 0 Cookies, 100% HTTPS** | [View Domain Scans](https://urlscan.io/search/#domain%3Axevqor.org) |
| **VirusTotal Threat Intel** | **0 Malicious Flags** across global security vendors | [View Live Report](https://www.virustotal.com/gui/url/15d26cd0f18520bfc5b8e5c9b03983fc85ee717d83e98aa7c2510f8f5e28adbd) |
| **Qualys SSL Labs** | Cloudflare Edge TLS 1.3 & 2-Year HSTS Preload | [View Live Report](https://www.ssllabs.com/ssltest/analyze.html?d=xevqor.org) |

---

## Honest Threat-Model & Technical Boundaries

To maintain strict cryptographic transparency, **XEVQOR** explicitly defines what each client-side utility guarantees and where platform or physical boundaries apply:

### Hosting Perimeter & Zero-Persistence Scope
- **Cloudflare Edge (`https://xevqor.org/`) vs. GitHub Mirror (`https://xevqor.github.io/`):** Both serve bit-identical static files (`SHA256SUMS.txt`). Production enforces strict HTTP response headers via `_headers` (**CSP Level 3 SHA-256 script hashes**, `COOP: same-origin`, `COEP: require-corp`, `HSTS Preload`, `X-Frame-Options: DENY`), whereas GitHub Pages enforces sandbox isolation via the in-document `<meta>` Content-Security-Policy (`connect-src 'none'`).
- **Zero User-Data Persistence:** No passphrases, files, or messages are ever transmitted to a server or written to cookies, `localStorage`, or `IndexedDB`. The Service Worker (`sw.js`) caches same-origin HTTP 200 GET responses for offline availability and never caches user inputs or URL `#` fragments.
- **Passphrase Responsibility:** Encrypted modules use **PBKDF2-SHA256 (600,000 iterations)** + **AES-256-GCM**. While 600k iterations resist casual brute force, weak or dictionary passwords remain vulnerable to offline GPU cracking if ciphertext is captured.

### Per-Module Cryptographic Boundaries

| Route | Module | Honest Technical Definition & Operational Boundary |
| :--- | :--- | :--- |
| `/encrypt/` | **Encrypt (`XQR2`)** | Splits files into **10 MB chunks** using **Chunked AES-256-GCM (`AES-256-GCM`)**, authenticating chunk order, EOF, original filename, and exact size. Bounded by browser tab RAM; decrypted files download with `xevqor.` prefix. |
| `/cipherlink/` | **Cipherlink** | **Stateless URL-Fragment Cipher (`deflate-raw` + `AES-256-GCM`).** Payload stays in the URL `#` fragment (never sent to servers), trims passphrase whitespace (`.trim()`), and scrubs the address bar via `history.replaceState` upon decryption. **Does not delete messages remotely**—copies in chat logs, clipboards, or screenshots persist. |
| `/stego/` | **Stego** | **EOF Container Injection (`XEVQOR88` + `AES-256-GCM`).** Appends authenticated ciphertext after the carrier file's EOF marker (not pixel-level LSB steganography; does not strip EXIF metadata). Must be sent as an uncompressed file/document; apps that re-encode images strip the payload. Best-effort clipboard auto-clear after 45s (when browser clipboard read/write permission is granted). |
| `/nebula/` | **Nebula** | **Zero-Width Unicode Carrier (`U+200B` / `U+200C`).** Embeds 8 invisible characters per byte (352-character fixed overhead for salt + IV + GCM tag; total 8 × (plaintext bytes + 44)) at cover text midpoint. Fails if transmitted through channels that sanitize or normalize invisible Unicode. |
| `/nano/` | **Nano** | Compresses plaintext via `deflate-raw`, encrypts with `AES-256-GCM`, and encodes as compact Base64. |
| `/keypass/` | **Keypass** | Deterministic `PBKDF2-SHA256` (600,000 iterations). Service labels are case-normalized (`lowercase`); **Output A** and **Output B** are independently derived via separate PBKDF2 calls using domain-separated salts (`xevqor.keypass.v2:<label>` and `xevqor.keypass.v2:slot-b:<label>`). Output strength depends on Brain Key entropy. Best-effort clipboard auto-clear after 45s (when browser clipboard read/write permission is granted). |
| `/hash/` | **Hash** | Local `crypto.subtle.digest` calculator for **SHA-256**, **SHA-512**, and **SHA-1 (Legacy Non-Security Checksum)**. |
| `/jwt/` | **JWT** | Local Base64URL header/payload decoder (`UNVERIFIED SIGNATURE` — does not perform cryptographic signature verification). |
| `/dice/` | **Dice** | Unbiased CSPRNG (`crypto.getRandomValues` with rejection sampling `uint32 < 4294967292`). |

---

## License

Licensed under the **MIT License**.

<div align="center">
  <br>
  <i>Engineered with precision. 100% Client-Side & Zero-Server by design.</i>
</div>

## Scope of External Scans & Memory Model
* **Perimeter Scans vs. Cryptographic Audit:** External scanners (SecurityHeaders, Mozilla Observatory, SSL Labs, urlscan.io, VirusTotal) verify HTTP response headers, TLS configuration, network isolation (`connect-src 'none'`), and domain reputation. Cryptographic primitives and zero-backend execution are verifiable directly via the open-source code in this repository and `SHA256SUMS.txt`.
* **Hosting & Edge Headers:** No application backend, database, cookies, or analytics exist in XEVQOR. Static files are served via Cloudflare Pages / GitHub Pages; standard CDN edge headers (`NEL`, `Report-To`) injected by Cloudflare apply strictly to network diagnostics and never carry user inputs or cryptographic material.
* **Workspace Reset & Clipboard Clearing:** `WIPE SYSTEM` clears active DOM state, inputs, outputs, and URL fragments, paired with best-effort 45-second clipboard auto-clear when clipboard permissions are granted. Physical memory reclamation remains governed by the browser's JavaScript garbage collector.
