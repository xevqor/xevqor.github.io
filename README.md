<div align="center">

# X E V Q O R

**Architecting Future Digital Systems**  
*Absolute Privacy Protocol. 100% Zero-Knowledge Architecture.*

[![Architecture](https://img.shields.io/badge/Architecture-Zero--Knowledge-0a0a0a?style=flat-square&labelColor=000000)]()
[![Execution](https://img.shields.io/badge/Execution-100%25_Client--Side-141414?style=flat-square&labelColor=000000)]()
[![Cryptography](https://img.shields.io/badge/Crypto-Web_Crypto_API-1a1a1a?style=flat-square&labelColor=000000)]()
[![Telemetry](https://img.shields.io/badge/Telemetry-Zero_Tracking-222222?style=flat-square&labelColor=000000)]()
[![Offline](https://img.shields.io/badge/Runtime-Offline_Capable-2b2b2b?style=flat-square&labelColor=000000)]()

</div>

---

## 🌐 Official Gateway & Mirror Network

To guarantee uninterrupted availability, censorship resistance, and zero single point of failure, XEVQOR is mirrored across multiple independent domains and global edge networks. Every endpoint serves the exact same static, zero-knowledge build:

| Endpoint | Network / Role |
| :--- | :--- |
| **https://xevqor.my.id** | Primary Official Gateway |
| **https://xevqormyid.pages.dev** | Cloudflare Pages Edge Mirror |
| **https://xevqor.github.io** | GitHub Pages Immutable Mirror |
| **https://xevqor.dpdns.org** | Independent DNS Mirror (`.dpdns.org`) |
| **https://xevqor.eu.cc** | European TLD Mirror (`.eu.cc`) |
| **https://xevqor.us.ci** | Global Fallback Mirror (`.us.ci`) |

---

## 🛡️ Core Architecture & Privacy Guarantee

> *"What you do here, stays here."*

XEVQOR is a suite of client-side cryptographic and operational privacy utilities engineered with a strict **Zero-Knowledge Architecture**:

* **100% Client-Side Execution:** All encryption, key derivation, hashing, token inspection, data compression, and steganography run locally inside your browser's memory using native **Web Crypto APIs**.
* **Zero Third-Party Requests:** No analytics scripts, no cookies, no external font CDNs, and no third-party QR APIs. All typography uses local system font stacks, and crypto donation QR codes are rendered locally in-memory via an embedded **Reed-Solomon SVG generator (`OfflineQR`)**.
* **Browser-Enforced CSP Lockdown:** Enforces a strict `Content-Security-Policy` (`connect-src 'none'`, `form-action 'none'`, `object-src 'none'`) and `referrer="no-referrer"`, architecturally blocking outbound network calls at the browser engine level after initial load.
* **Zero Data Collection:** There is no backend server or database. Your plaintext, passwords, keys, and files never leave your device.
* **Offline Capable (PWA):** Backed by a strictly same-origin Service Worker (`sw.js`), allowing every single utility to function completely air-gapped without an internet connection.

---

## 🧭 Quick Module Overview

| Module | Endpoint | Primary Purpose |
| :--- | :--- | :--- |
| **KEYPASS** | `/keypass` | Deterministic dual-key password generator (PBKDF2). |
| **HASH** | `/hash` | SHA-256/512 file and text cryptographic digest verifier. |
| **JWT** | `/jwt` | Local JSON Web Token decoder and expiry inspector. |
| **BURN** | `/burn` | Ephemeral, serverless self-destructing encrypted links. |
| **NANO** | `/nano` | Deflate text compressor and AES-256-GCM Base64 cipher. |
| **NEBULA** | `/nebula` | Phantom zero-width Unicode text steganography tool. |
| **ENCRYPT** | `/encrypt` | Chunked `.xqr` file encryption vault (AES-256-GCM). |
| **STEGO** | `/stego` | Binary carrier steganography for embedding files. |
| **DICE** | `/dice` | High-entropy 3D cryptographic dice RNG (CSPRNG). |

---

## 🛠️ Detailed Utility Breakdown

### 1. `KEYPASS` (`/keypass`) — Deterministic Brain-Key Generator
Generates high-entropy, dual-option (alphanumeric & mixed-symbol) passwords using `PBKDF2-SHA256` with 350,000 iterations. 
* **What it's for:** Creating deterministic passwords from a "Brain Key" and "Identity Label". This means you can regenerate the exact same strong password without needing to store it anywhere.
* **Key Capabilities:** 28-character outputs, dual-key logic (Alpha-only vs Mixed-symbol), and zero network transmission.

### 2. `HASH` (`/hash`) — Cryptographic Hash & Integrity Verifier
Computes one-way cryptographic digests for text strings or local files using the browser's built-in `SubtleCrypto` engine.
* **What it's for:** Verifying downloaded binaries, checking file integrity against tampering, or generating deterministic fingerprints without uploading sensitive data.
* **Key Capabilities:** Supports industry-standard algorithms (`SHA-256`, `SHA-512`, `SHA-1`) for both text and dropped files.

### 3. `JWT` (`/jwt`) — Local JSON Web Token Inspector
Decodes and inspects JSON Web Tokens (`Header`, `Payload`, and `Signature` segments) completely offline.
* **What it's for:** Debugging authentication tokens, API keys, and session claims (`exp`, `iat`, `iss`, `sub`) safely without pasting live bearer tokens into third-party online decoders that log traffic.
* **Key Capabilities:** Instant Base64URL decoding, real-time expiration (`exp`) validation, and structured JSON inspection in local memory.

### 4. `BURN` (`/burn`) — Ephemeral Encrypted Link Utility
Packages sensitive notes or secrets into self-contained, encrypted payloads designed for zero-footprint sharing.
* **What it's for:** Sharing credentials or private instructions where the decryption secret is encapsulated in the URL fragment (`#`) rather than stored on any central database.
* **Key Capabilities:** Deflate compression prior to AES-256-GCM encryption, zero server-side persistence, and ephemeral self-destructing mechanics.

### 5. `NANO` (`/nano`) — Compact Data Encoding & Cipher Tool
Transforms, compresses, and encrypts text or structured payloads into lightweight, transport-ready formats.
* **What it's for:** Shrinking verbose strings and locking them with a passphrase using `deflate-raw` compression and `AES-256-GCM` encryption.
* **Key Capabilities:** Fast client-side compression, Base64 ciphertext output, and instant size reduction metrics.

### 6. `NEBULA` (`/nebula`) — Zero-Width Phantom Steganography
Conceals secret messages inside ordinary, innocent-looking cover text using invisible Unicode characters so the existence of the hidden payload remains undetectable.
* **What it's for:** Situations where standard ciphertext attracts unwanted attention—allowing covert data embedding inside plain sentences (U+200B and U+200C).
* **Key Capabilities:** Seamless AES-GCM encrypted payload embedding and extraction with zero visual distortion to the cover text.

### 7. `ENCRYPT` (`/encrypt`) — Chunked File Vault (`.xqr`)
Locks large files and sensitive payloads behind strong passphrase-derived symmetric cryptography, processing data in 10MB chunks.
* **What it's for:** Securing large backup files, images, or documents before storing them in cloud drives.
* **Key Capabilities:** Uses `PBKDF2` key derivation and `AES-256-GCM` authenticated encryption, outputting a proprietary binary `.xqr` format.

### 8. `STEGO` (`/stego`) — Binary Carrier Steganography
Conceals encrypted text or hidden files inside ordinary cover media (like images or PDFs) without breaking the host file.
* **What it's for:** Hiding sensitive files inside innocent-looking carriers before sending them over untrusted channels.
* **Key Capabilities:** Signature-based (`XEVQOR88`) binary payload embedding and extraction with zero visual distortion to the carrier.

### 9. `DICE` (`/dice`) — Cryptographic 3D RNG
Constructs visual 3D dice rolls using true cryptographic randomness (`window.crypto.getRandomValues`), mimicking hardware entropy.
* **What it's for:** Generating verifiable random outcomes for games, decision-making, or cryptographic seed generation.
* **Key Capabilities:** Configurable 1-3 dice, smooth 3D CSS animations, and Big/Small/Triple evaluation logic.

---

## 🔍 How to Verify & Self-Host

True security relies on independent verification, not blind trust. You can audit the network activity or run the entire XEVQOR suite locally on your own machine:

1. **Audit Zero Network Traffic & CSP:**  
   Open your browser's Developer Tools (`F12` → **Network** tab) while operating any module—including opening the **Support Xevqor** QR modal—to verify that **zero outbound requests** are ever made and `connect-src 'none'` is enforced in `<head>`.
2. **Test Air-Gapped Offline Execution:**  
   Load `https://xevqor.my.id` once, turn on **Airplane Mode** (disconnect Wi-Fi/cellular), and run any of the 9 utilities to verify full offline operation via the local Service Worker cache.
3. **Clone & Run Locally:**  
   Open your terminal and type:  
   `git clone https://github.com/xevqor/xevqor.github.io.git`  
   `cd xevqor.github.io`
4. **Launch on Local Static Server:**  
   Open `index.html` directly in any modern browser, or serve the folder via any lightweight local static server (`python3 -m http.server`, `npx serve`, etc.).

---

## 💎 Support the Project

XEVQOR is free, open-source, and completely ad-free. If these utilities strengthen your digital privacy and operational security, you can support ongoing development through the **Support Xevqor** portal (Crypto / Web3) on the main website.

---

## 📄 License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute the code for personal or commercial use.

<div align="center">
  <br>
  <i>Engineered with precision. Zero-Knowledge by design.</i>
</div>
