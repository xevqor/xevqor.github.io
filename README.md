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

## 🌐 Official Gateway & Mirror Network

To ensure uninterrupted availability and multi-edge static redundancy without a single point of failure, XEVQOR is deployed across independent edge networks serving the exact same static build (verifiable via SHA-256 checksum):

| Endpoint | Network / Role |
| :--- | :--- |
| **https://xevqor.my.id** | Primary Official Gateway (Cloudflare Edge) |
| **https://xevqormyid.pages.dev** | Cloudflare Pages Direct Mirror |
| **https://xevqor.github.io** | GitHub Pages Auditable Source Mirror |

---

## 🛡️ Core Architecture & Privacy Guarantee

> *"What you do here, stays here."*

XEVQOR is a suite of browser-native cryptographic and operational privacy utilities built on a strict **Zero-Knowledge Architecture**:

* **100% Client-Side Execution:** All key derivation, encryption, hashing, token inspection, compression, and steganography run locally inside browser memory using the native **W3C Web Crypto API (`window.crypto.subtle`)**.
* **Zero Third-Party Requests:** No analytics scripts, no cookies, no external font CDNs, and no third-party QR APIs. Typography relies exclusively on local system font stacks, and donation QR codes are rendered locally in-memory via an embedded **Reed-Solomon SVG generator (`OfflineQR`)**.
* **Browser-Enforced CSP Lockdown:** Enforces a strict `Content-Security-Policy` (`connect-src 'none'`, `form-action 'none'`, `object-src 'none'`) and `referrer="no-referrer"`, blocking outbound network requests at the browser engine level after initial page load.
* **Zero Data Persistence:** No backend servers, no databases, and no `localStorage` credential retention. Plaintext inputs, passphrases, and keys exist strictly in volatile memory during active execution.
* **Offline Capable (PWA):** Backed by a strictly same-origin Service Worker (`sw.js`), allowing every utility to run completely air-gapped without an internet connection.

---

## 🔐 Cryptographic Primitives & Audit Notes

* **Deterministic Key Derivation (`/keypass`):** Uses `PBKDF2` with `HMAC-SHA-256` at **350,000 iterations** via `SubtleCrypto.deriveBits`. The UTF-8 encoded *Identity Label* acts as the deterministic salt paired with the user's *Brain Key* to derive 28-character alphanumeric or mixed-symbol outputs without storing secrets on disk.
* **Authenticated Encryption (`/encrypt`, `/nano`, `/burn`):** Employs `AES-256-GCM` with fresh random 96-bit (12-byte) Initialization Vectors (`IV`) generated via `window.crypto.getRandomValues()` for every encryption operation.
* **Entropy Source (`/dice`):** Uses OS-level Cryptographically Secure Pseudorandom Number Generation (`window.crypto.getRandomValues()`) rather than `Math.random()`.
* **Service Worker Integrity (`sw.js`):** Implements a minimal `xevqor-vault-v2` cache-first strategy restricted exclusively to same-origin `GET` requests, purging legacy caches on activation without altering response payloads.

---

## 🧭 Quick Module Overview

| Module | Endpoint | Primary Purpose |
| :--- | :--- | :--- |
| **KEYPASS** | `/keypass` | Deterministic dual-key password generator (`PBKDF2-SHA256`). |
| **HASH** | `/hash` | `SHA-256` / `SHA-512` file and text cryptographic digest verifier. |
| **JWT** | `/jwt` | Local JSON Web Token decoder and expiry (`exp`) inspector. |
| **BURN** | `/burn` | Ephemeral, serverless encrypted links using URL fragments (`#`). |
| **NANO** | `/nano` | `deflate-raw` text compressor and `AES-256-GCM` cipher. |
| **NEBULA** | `/nebula` | Zero-width Unicode (`U+200B`/`U+200C`) text steganography. |
| **ENCRYPT** | `/encrypt` | Chunked `.xqr` file encryption vault (`AES-256-GCM`). |
| **STEGO** | `/stego` | Binary carrier steganography (`XEVQOR88` signature). |
| **DICE** | `/dice` | 3D cryptographic dice RNG (`window.crypto.getRandomValues`). |

---

## 🛠️ Detailed Utility Breakdown

### 1. `KEYPASS` (`/keypass`) — Deterministic Brain-Key Generator
Derives high-entropy, dual-option (alphanumeric & mixed-symbol) passwords using `PBKDF2-SHA256` with 350,000 iterations.
* **Use Case:** Regenerating consistent, strong passwords on demand from a *Brain Key* and *Identity Label* without maintaining a synced password database.
* **Capabilities:** 28-character outputs, dual-mode character sets (Alpha-only vs Mixed-symbol), and zero network I/O.

### 2. `HASH` (`/hash`) — Cryptographic Hash & Integrity Verifier
Computes one-way cryptographic digests for text strings or local files using the browser's native `SubtleCrypto` engine.
* **Use Case:** Verifying file checksums and detecting tampering locally without uploading sensitive files to external servers.
* **Capabilities:** Supports `SHA-256`, `SHA-512`, and `SHA-1` across both text inputs and local binary files.

### 3. `JWT` (`/jwt`) — Local JSON Web Token Inspector
Decodes and inspects JSON Web Tokens (`Header`, `Payload`, and `Signature` segments) completely offline.
* **Use Case:** Debugging authentication tokens and claims (`exp`, `iat`, `iss`, `sub`) safely without pasting live bearer tokens into third-party web decoders.
* **Capabilities:** Instant Base64URL decoding, real-time expiration validation, and structured JSON formatting in local memory.

### 4. `BURN` (`/burn`) — Ephemeral Encrypted Link Utility
Packages sensitive notes into self-contained encrypted URLs where the decryption key resides solely in the client-side URL fragment (`#`).
* **Use Case:** Sharing temporary secrets without central server storage (URL fragments are never transmitted in HTTP requests).
* **Capabilities:** `deflate-raw` compression prior to `AES-256-GCM` encryption with zero server-side persistence.

### 5. `NANO` (`/nano`) — Compact Data Encoding & Cipher Tool
Compresses and encrypts text payloads into compact, transport-ready Base64 strings.
* **Use Case:** Shrinking verbose text and locking it with a passphrase using `deflate-raw` compression and `AES-256-GCM` encryption.
* **Capabilities:** Fast in-memory compression, authenticated ciphertext output, and compression ratio metrics.

### 6. `NEBULA` (`/nebula`) — Zero-Width Phantom Steganography
Embeds encrypted payloads inside ordinary cover text using invisible Unicode characters (`U+200B` and `U+200C`).
* **Use Case:** Concealing covert messages inside plain sentences without altering visible typography.
* **Capabilities:** `AES-GCM` encrypted payload embedding and extraction with zero visual distortion to cover text.

### 7. `ENCRYPT` (`/encrypt`) — Chunked File Vault (`.xqr`)
Encrypts large local files in 10MB memory chunks behind passphrase-derived symmetric cryptography.
* **Use Case:** Securing large archives, media, or documents locally prior to cloud storage or transfer.
* **Capabilities:** `PBKDF2` key derivation and `AES-256-GCM` authenticated encryption outputting binary `.xqr` containers.

### 8. `STEGO` (`/stego`) — Binary Carrier Steganography
Appends encrypted files or text payloads inside standard carrier files (such as images or PDFs) without corrupting the host file structure.
* **Use Case:** Encapsulating sensitive payloads inside ordinary carrier files before transmission.
* **Capabilities:** Signature-delimited (`XEVQOR88`) binary payload embedding and extraction.

### 9. `DICE` (`/dice`) — Cryptographic 3D RNG
Renders 3D dice rolls driven directly by `window.crypto.getRandomValues()`.
* **Use Case:** Generating verifiable local random outcomes for games, raffles, or seed selection without relying on `Math.random()`.
* **Capabilities:** Configurable 1–3 dice, 3D CSS rendering, and Big/Small/Triple outcome evaluation.

---

## 🔍 How to Verify & Self-Host

Independent verification is encouraged over blind trust. You can audit network isolation and build parity directly:

1. **Audit Zero Network Traffic & CSP:**  
   Open Developer Tools (`F12` → **Network** tab) while running any utility—including opening the **Support Xevqor** QR modal—to confirm **zero outbound requests** occur and `connect-src 'none'` is enforced in `<head>`.
2. **Verify Production-to-Mirror Parity:**  
   Compare the SHA-256 checksums of the primary gateway and the GitHub mirror directly in your terminal:  
   `curl -sL https://xevqor.my.id | sha256sum`  
   `curl -sL https://xevqor.github.io | sha256sum`
3. **Test Air-Gapped Offline Execution:**  
   Load `https://xevqor.my.id` once, enable **Airplane Mode**, and operate any of the 9 utilities offline via the local Service Worker cache.
4. **Clone & Run Locally:**  
   `git clone https://github.com/xevqor/xevqor.github.io.git && cd xevqor.github.io`  
   Serve via any static HTTP server (`python3 -m http.server`, `npx serve`, etc.).

---

## 📄 License

This project is licensed under the **MIT License**. You are free to use, inspect, modify, and distribute the code for personal or commercial purposes.

<div align="center">
  <br>
  <i>Engineered with precision. Zero-Knowledge by design.</i>
</div>
