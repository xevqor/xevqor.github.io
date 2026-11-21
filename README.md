# XEVQOR — Client-Side Privacy & Cryptography Utility Suite

**XEVQOR** is a zero-server, self-contained HTML/PWA suite of browser-based cryptographic, encoding, and inspection utilities. Every cryptographic operation executes locally inside the browser via the native **Web Crypto API** (`crypto.subtle` and `crypto.getRandomValues`) with `connect-src 'none'` network isolation.

- **Primary Production (Full Edge Security Headers):** `https://xevqor.my.id/` (Cloudflare Pages)
- **Public Open-Source Mirror:** `https://xevqor.github.io/` (GitHub Pages)

---

## Architecture, Hosting Scope & Data-Persistence Boundaries

1. **Production (`xevqor.my.id`) vs. GitHub Mirror (`xevqor.github.io`):**
   - Both domains serve the identical static HTML/JS files tracked in this repository.
   - **`https://xevqor.my.id/`** (Cloudflare Pages) parses `_headers` to enforce strict HTTP response headers: **CSP Level 3 SHA-256 script hashes** (zero `'unsafe-inline'` in `script-src`), `HSTS Preload`, `X-Frame-Options: DENY`, `Cross-Origin-Opener-Policy`, `Cross-Origin-Embedder-Policy`, and `Permissions-Policy`.
   - **`https://xevqor.github.io/`** (GitHub Pages) does not support `_headers` files; it relies on the in-document `<meta>` Content-Security-Policy (`connect-src 'none'`) rather than edge HTTP response headers.
2. **Zero User-Data Persistence (App-Shell Offline Cache Only):**
   - **No user secrets, passphrases, files, or messages** are ever transmitted to a server or written to `localStorage`, `sessionStorage`, `IndexedDB`, or cookies.
   - The Service Worker (`sw.js`) caches static UI assets (*app shell*) in browser Cache Storage strictly so the interface works offline. URL `#` fragments used by Cipherlink are never sent over HTTP or cached by `sw.js`.
3. **Passphrase Responsibility:**
   - All encrypted modules use **PBKDF2-SHA256 (600,000 iterations)** + **AES-256-GCM** with random 16-byte salts and 12-byte IVs. While 600,000 iterations resist casual brute force, weak or short dictionary passwords remain vulnerable to offline GPU cracking if ciphertext is captured. Use high-entropy passphrases (4+ random words or 16+ mixed characters).

---

## Modules & Honest Technical Definitions

| Route | Module | What It Actually Does & Threat-Model Boundaries |
| :--- | :--- | :--- |
| `/encrypt/` | **Encrypt (`XQR2`)** | Splits files into **10 MB chunks** encrypted with **STREAM-AEAD** (`AES-256-GCM`), authenticating chunk index, EOF marker, original filename, and exact file size. Processed in browser tab RAM; outputs `<basename>.xqr` and restores as `xevqor.<filename>`. |
| `/burn/` | **Cipherlink** | **Stateless URL-Fragment Encryption.** Encrypts text with `deflate-raw` + `AES-256-GCM` into the URL `#` fragment (never sent to servers) and scrubs the address bar via `history.replaceState` upon decryption. **Does not delete messages remotely**—copies in chat logs, clipboards, or screenshots persist. |
| `/stego/` | **Stego** | **EOF Container Injection (`XEVQOR88`).** Appends `AES-256-GCM` ciphertext after the carrier file's EOF marker (not pixel-level LSB steganography). Must be sent as an uncompressed file/document; apps that re-encode images strip the payload. Auto-clears copied output after 45s. |
| `/nebula/` | **Nebula** | **Zero-Width Unicode Carrier.** Encodes `AES-256-GCM` ciphertext into `U+200B` / `U+200C` characters (~360 invisible characters per plaintext byte) at the midpoint of cover text. Fails if pasted through platforms that sanitize invisible Unicode. |
| `/nano/` | **Nano** | Compresses text with `deflate-raw`, encrypts via `AES-256-GCM`, and outputs compact Base64 text. |
| `/keypass/` | **Keypass** | Deterministic key generator (`PBKDF2-SHA256`, 600k iterations). Service labels are case-normalized (`lowercase`); Output B is a deterministic character-remapped variant of Output A (same primary entropy). Auto-clears clipboard after 45s when matched. |
| `/hash/` | **Hash** | Local `crypto.subtle.digest` calculator for **SHA-256**, **SHA-512**, and **SHA-1 (Legacy Non-Security Checksum)**. |
| `/jwt/` | **JWT** | Local Base64URL header/payload decoder (`UNVERIFIED SIGNATURE` — does not verify cryptographic signatures). |
| `/dice/` | **Dice** | Unbiased CSPRNG (`crypto.getRandomValues` with rejection sampling `uint32 < 4294967292`). |

---

## Reproducible Checksums & Independent Public Audits

- **Repository Manifest (`SHA256SUMS.txt`):** Covers all 10 HTML pages, `sw.js`, `_headers`, `manifest.json`, and `favicon.svg` (`sha256sum -c SHA256SUMS.txt`). Because `SHA256SUMS.txt` lives inside this repository, independent verification relies on the immutable third-party public audit snapshots below:

| Audit Platform | Verified Production Result (`https://xevqor.my.id/`) | Permanent Public Report |
| :--- | :--- | :--- |
| **Mozilla HTTP Observatory** | **Grade A+ (`115/100` — `12/12` Tests Passed)**, SHA-256 CSP, 0 Cookies | [View Live Report](https://developer.mozilla.org/en-US/observatory/analyze?host=xevqor.my.id) |
| **Security Headers (Snyk)** | **Grade A+** — All 6 core HTTP security headers active, 0 warnings | [View Live Report](https://securityheaders.com/?q=https%3A%2F%2Fxevqor.my.id%2F&followRedirects=on) |
| **urlscan.io (Public Sandbox)** | **1 Domain (`xevqor.my.id`), 2 Requests, 0 Cookies, 100% HTTPS** | [View Live Report](https://urlscan.io/result/01a1faa4-4259-760c-ac4d-81cb7561f052/) |
| **VirusTotal Threat Intel** | **0 Malicious Flags** across global security vendors | [View Live Report](https://www.virustotal.com/gui/url/15d26cd0f18520bfc5b8e5c9b03983fc85ee717d83e98aa7c2510f8f5e28adbd) |
| **Qualys SSL Labs** | Cloudflare Edge TLS 1.3 & 2-Year HSTS Preload | [View Live Report](https://www.ssllabs.com/ssltest/analyze.html?d=xevqor.my.id) |
