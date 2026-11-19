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
* **Zero Tracking & Telemetry:** No analytics scripts, no cookies, no IP logging, no browser fingerprinting, and zero third-party requests.
* **Zero Data Collection:** There is no backend server or database. Your plaintext, passwords, keys, and files never leave your device.
* **Offline Capable:** Once loaded in your browser, every single utility functions completely air-gapped without an internet connection.

---

## 🧭 Quick Module Overview

| Module | Endpoint | Primary Purpose |
| :--- | :--- | :--- |
| **KEYPASS** | `/keypass` | Hardware-grade random password generator using native CSPRNG. |
| **HASH** | `/hash` | Cryptographic digest generator and file/text integrity verifier. |
| **JWT** | `/jwt` | Local JSON Web Token decoder and security claim inspector. |
| **BURN** | `/burn` | Ephemeral, self-contained encrypted note and secret payload builder. |
| **NANO** | `/nano` | Lightweight payload encoding, compression, and compact formatting tool. |
| **NEBULA** | `/nebula` | High-capacity file/stream encryption and chunked data processor. |
| **ENCRYPT** | `/encrypt` | Symmetric authenticated text & payload encryption (`AES-256-GCM`). |
| **STEGO** | `/stego` | Covert steganography utility for hiding secret text inside innocent carriers. |
| **DICE** | `/dice` | High-entropy Diceware passphrase generator for human memorability. |

---

## 🛠️ Detailed Utility Breakdown

### 1. `KEYPASS` (`/keypass`) — Cryptographic Password Generator
Generates high-entropy, unpredictable passwords directly inside your browser using the native `crypto.getRandomValues()` CSPRNG rather than weak `Math.random()` functions.
* **What it's for:** Creating unique, brute-force-resistant passwords for critical accounts, vaults, and infrastructure.
* **Key Capabilities:** Custom character length, granular symbol/number/case toggles, instant entropy strength feedback, and one-click clipboard copy with zero network transmission.

### 2. `HASH` (`/hash`) — Cryptographic Hash & Integrity Verifier
Computes one-way cryptographic digests for text strings or local files using the browser's built-in `SubtleCrypto` engine.
* **What it's for:** Verifying downloaded binaries, checking file integrity against tampering, or generating deterministic fingerprints without uploading sensitive data.
* **Key Capabilities:** Supports industry-standard algorithms (`SHA-256`, `SHA-384`, `SHA-512`) and instant checksum comparison to confirm exact match or mismatch.

### 3. `JWT` (`/jwt`) — Local JSON Web Token Inspector
Decodes and inspects JSON Web Tokens (`Header`, `Payload`, and `Signature` segments) completely offline.
* **What it's for:** Debugging authentication tokens, API keys, and session claims (`exp`, `iat`, `iss`, `sub`) safely without pasting live bearer tokens into third-party online decoders that log traffic.
* **Key Capabilities:** Instant Base64URL decoding, human-readable timestamp conversion, and structured JSON inspection in local memory.

### 4. `BURN` (`/burn`) — Ephemeral Encrypted Note & Payload Utility
Packages sensitive notes or secrets into self-contained, encrypted payloads designed for zero-footprint sharing.
* **What it's for:** Sharing credentials, private keys, or sensitive instructions where the decryption secret stays encapsulated in the payload/link rather than stored on any central database.
* **Key Capabilities:** Client-side encryption prior to sharing, zero server-side persistence, and ephemeral workflow hygiene.

### 5. `NANO` (`/nano`) — Compact Data Encoding & Compression Tool
Transforms, compresses, and encodes text or structured payloads into lightweight, transport-ready formats.
* **What it's for:** Shrinking verbose strings, encoding data safely for URLs/configs (`Base64`, URI encoding), and preparing compact payloads with minimal overhead.
* **Key Capabilities:** Fast client-side compression/decompression, clean encoding conversions, and instant size reduction metrics.

### 6. `NEBULA` (`/nebula`) — Chunked Stream & Heavy Payload Processor
Engineered to process, transform, and protect larger files or high-volume data streams directly inside the browser without exhausting RAM.
* **What it's for:** Handling sizeable local files or binary payloads that would normally crash standard single-buffer web tools.
* **Key Capabilities:** **Chunked stream processing** splits input into manageable memory blocks sequentially, ensuring smooth performance and zero cloud upload exposure.

### 7. `ENCRYPT` (`/encrypt`) — Authenticated Symmetric Vault (`AES-256-GCM`)
Locks plaintext messages and sensitive payloads behind strong passphrase-derived symmetric cryptography.
* **What it's for:** Securing private notes, backup seeds, or confidential communications before storing them in cloud drives or sending them over untrusted channels.
* **Key Capabilities:** Uses **PBKDF2** key derivation with unique cryptographic salts and **AES-256-GCM** authenticated encryption—guaranteeing both confidentiality and tamper detection.

### 8. `STEGO` (`/stego`) — Covert Zero-Width & Carrier Steganography
Conceals secret messages inside ordinary, innocent-looking cover text or media so the existence of the hidden payload itself remains undetectable.
* **What it's for:** Situations where standard ciphertext attracts unwanted attention—allowing covert data embedding inside plain sentences using invisible Unicode zero-width characters.
* **Key Capabilities:** Seamless payload embedding and extraction with zero visual distortion to the cover text.

### 9. `DICE` (`/dice`) — High-Entropy Diceware Passphrase Generator
Constructs multi-word passphrases using cryptographically secure random selection from curated wordlists.
* **What it's for:** Creating master passwords for disk encryption, cold storage, or password managers that are easy for humans to type and memorize yet mathematically infeasible to crack.
* **Key Capabilities:** Configurable word count, custom separators, and true cryptographic randomness (`CSPRNG`).

---

## 🔍 How to Verify & Self-Host

True security relies on independent verification, not blind trust. You can audit the network activity or run the entire XEVQOR suite locally on your own machine:

1. **Audit Zero Network Traffic:**  
   Open your browser's Developer Tools (`F12` → **Network** tab) while operating any module to verify that zero outbound requests are ever made.
2. **Clone & Run Locally:**
   ```bash
   git clone [https://github.com/xevqor/xevqor.github.io.git](https://github.com/xevqor/xevqor.github.io.git)
   cd xevqor.github.io
   ```
3. **Launch Air-Gapped:**  
   Open `index.html` directly in any modern browser, or serve the folder via any lightweight local static server (`python3 -m http.server`, `npx serve`, etc.).

---

## 💎 Support the Project

XEVQOR is free, open-source, and completely ad-free. If these utilities strengthen your digital privacy and operational security, you can support ongoing development through the **Support Xevqor** portal on the main website.
