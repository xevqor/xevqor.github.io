<div align="center">

# X E V Q O R

**Architecting Future Digital Systems**  
*Client-Side Cryptographic Suite. 100% Zero-Knowledge Architecture.*

[![Architecture](https://img.shields.io/badge/Architecture-Zero--Knowledge-0a0a0a?style=flat-square&labelColor=000000)]()
[![Execution](https://img.shields.io/badge/Execution-100%25_Client--Side-141414?style=flat-square&labelColor=000000)]()
[![Cryptography](https://img.shields.io/badge/Crypto-Web_Crypto_API-1a1a1a?style=flat-square&labelColor=000000)]()
[![Telemetry](https://img.shields.io/badge/Telemetry-Zero_Tracking-222222?style=flat-square&labelColor=000000)]()
[![Offline](https://img.shields.io/badge/Runtime-Offline_Capable-2b2b2b?style=flat-square&labelColor=000000)]()

</div>

---

## Official Gateway & Mirror Network

XEVQOR is deployed across independent edge networks serving the exact same static build (verifiable via SHA-256 checksum):

| Endpoint | Network / Role |
| :--- | :--- |
| **https://xevqor.my.id** | Primary Official Gateway (Cloudflare Edge) |
| **https://xevqormyid.pages.dev** | Cloudflare Pages Direct Mirror |
| **https://xevqor.github.io** | GitHub Pages Auditable Source Mirror |

---

## Core Architecture & Privacy Guarantee

> *"What you do here, stays here."*

* **100% Client-Side Execution:** Key derivation, encryption, hashing, token inspection, compression, and steganography run locally in browser memory via the native **W3C Web Crypto API (`window.crypto.subtle`)**.
* **Zero Third-Party Requests:** No analytics, no cookies, no external font CDNs, and no third-party QR APIs. Typography uses local system font stacks, and donation QR codes render locally via an embedded **Reed-Solomon SVG generator (`OfflineQR`)**.
* **Browser-Enforced CSP Lockdown:** Enforces `Content-Security-Policy` (`connect-src 'none'`, `form-action 'none'`, `object-src 'none'`) and `referrer="no-referrer"`, blocking outbound network calls at the browser engine level after initial load.
* **Zero Data Persistence:** No backend servers, no databases, and no `localStorage` credential retention. Inputs and keys stay strictly in volatile memory.
* **Offline Capable (PWA):** Backed by a same-origin Service Worker (`sw.js`) for full air-gapped operation.

---

## Cryptographic Primitives & Audit Notes

* **Deterministic Key Derivation (`/keypass`):** Uses `PBKDF2` (`HMAC-SHA-256`, **350,000 iterations**) via `SubtleCrypto.deriveBits`. The domain-prefixed UTF-8 *Identity Label* (`xevqor.keypass.v2:<label>`) serves as the deterministic salt paired with the *Brain Key* to derive 28-character passwords in memory, featuring a 45-second clipboard auto-wipe.
* **Authenticated Encryption (`/encrypt`, `/nano`, `/burn`):** Uses `AES-256-GCM` with fresh 96-bit random IVs and 128-bit per-payload CSPRNG salts (`PBKDF2-SHA256`, 350,000 iterations in `/burn` & `/encrypt`). Because `/burn` is 100% stateless with no server database, decryption scrubs the URL fragment from the active session address bar (`history.replaceState`), while link distribution remains the sender's responsibility.
* **Entropy Source (`/dice`):** Uses OS-level CSPRNG (`window.crypto.getRandomValues()`) rather than `Math.random()`.
* **Service Worker (`sw.js`):** Minimal `xevqor-vault-v2` network-first handler with offline cache fallback, restricted to same-origin `GET` requests.

---

## Module Overview

| Module | Endpoint | Purpose |
| :--- | :--- | :--- |
| **KEYPASS** | `/keypass` | Deterministic dual-key password generator (`PBKDF2-SHA256`). |
| **HASH** | `/hash` | `SHA-256` / `SHA-512` file and text digest verifier. |
| **JWT** | `/jwt` | Offline JSON Web Token decoder and expiry inspector. |
| **BURN** | `/burn` | Stateless encrypted links via URL fragment (`#`) with active address-bar scrubbing. |
| **NANO** | `/nano` | `deflate-raw` compressor and `AES-256-GCM` cipher. |
| **NEBULA** | `/nebula` | Zero-width Unicode (`U+200B`/`U+200C`) steganography. |
| **ENCRYPT** | `/encrypt` | Chunked 10MB `.xqr` file vault (`AES-256-GCM`). |
| **STEGO** | `/stego` | Binary carrier steganography (`XEVQOR88` signature). |
| **DICE** | `/dice` | 3D cryptographic dice RNG (`window.crypto.getRandomValues`). |

---

## How to Verify & Self-Host

1. **Audit Zero Network Traffic & CSP:** Open DevTools (`F12` -> **Network**) while operating any utility—including the **Support Xevqor** QR modal—to verify zero outbound requests and `connect-src 'none'`.
2. **Verify Production-to-Mirror Parity:**
   `curl -sL https://xevqor.my.id | sha256sum`
   `curl -sL https://xevqor.github.io | sha256sum`
3. **Test Air-Gapped Offline Execution:** Load `https://xevqor.my.id` once, enable **Airplane Mode**, and run any of the 9 tools via Service Worker cache.
4. **Clone & Self-Host:** `git clone https://github.com/xevqor/xevqor.github.io.git && cd xevqor.github.io` and serve via any static HTTP server (`python3 -m http.server`).

---

## License

Licensed under the **MIT License**.

<div align="center">
  <br>
  <i>Engineered with precision. Zero-Knowledge by design.</i>
</div>
