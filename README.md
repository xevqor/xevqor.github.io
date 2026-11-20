# XEVQOR — Client-Side Cryptographic & Privacy Suite

Zero-knowledge, stateless client-side cryptographic tools running 100% inside local browser memory via the native **Web Crypto API**. Zero servers, zero telemetry, zero external fonts, and zero outbound network requests (`connect-src 'none'`).

- **Primary Production:** `https://xevqor.my.id`
- **Public Mirror & Audit Source:** `https://xevqor.github.io` (`github.com/xevqor/xevqor.github.io`)

## Cryptographic Architecture & Modules

| Module | Primitive & Key Derivation | Notes |
| :--- | :--- | :--- |
| **`/keypass`** | `PBKDF2-SHA256` (350,000 iterations) | Deterministic 28-char password generator using `Brain Key` as input keying material and domain-prefixed `Identity Label` (`xevqor.keypass.v2:<label>`) as salt, with 45-second clipboard auto-wipe. |
| **`/burn`** | `AES-256-GCM` + `PBKDF2-SHA256` (350,000 iterations) | Stateless URL-fragment (`#`) encrypted notes with a fresh 128-bit (`16-byte`) CSPRNG salt and 96-bit (`12-byte`) IV per payload. Automatically scrubs the URL fragment from the active session address bar (`history.replaceState`) upon decryption; because the architecture is 100% serverless, link distribution remains the sender's responsibility. |
| **`/encrypt`** | `AES-256-GCM` + `PBKDF2-SHA256` (350,000 iterations) | Streaming 10 MB chunked local file encryption with fresh CSPRNG salt and IV per archive. |
| **`/stego`** | Binary EOF Wrapper (`XEVQOR88` marker) | Local polyglot/EOF payload embedding inside carrier files without server uploads. |
| **`/nebula`** | Unicode Zero-Width Steganography | Client-side cover-text encoding using non-printing Unicode characters. |
| **`/hash`** | `SHA-256` / `SHA-384` / `SHA-512` | Local file and text checksum verification via `crypto.subtle.digest`. |
| **`/jwt`** | Local Base64URL Decoder | Offline inspection of JWT headers and claims without transmitting tokens. |
| **`/nano`** | Ephemeral Scratchpad | Volatile in-memory workspace wiped on tab close or reload. |
| **`/dice`** | `crypto.getRandomValues` CSPRNG | Hardware-backed unbiased entropy generator. |

## Security & Offline Guarantees

- **Strict Content Security Policy:** All HTML entry points enforce `connect-src 'none'`, `form-action 'none'`, `object-src 'none'`, and `referrer="no-referrer"`.
- **Offline PWA Runtime (`sw.js`):** Uses a **network-first with offline cache fallback** strategy (`xevqor-vault-v2`) restricted strictly to same-origin assets, purging legacy caches on activation.
- **License:** MIT License. Verify production parity anytime by comparing SHA-256 checksums across `xevqor.my.id` and `xevqor.github.io`.
