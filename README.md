<div align="center">

    ╔════════════════════════════════════════════════════════════════╗
    ║                                                                ║
    ║   ██╗  ██╗███████╗██╗   ██╗ ██████╗  ██████╗ ██████╗           ║
    ║   ╚██╗██╔╝██╔════╝██║   ██║██╔═══██╗██╔═══██╗██╔══██╗          ║
    ║    ╚███╔╝ █████╗  ██║   ██║██║   ██║██║   ██║██████╔╝          ║
    ║    ██╔██╗ ██╔══╝  ╚██╗ ██╔╝██║▄▄ ██║██║   ██║██╔══██╗          ║
    ║   ██╔╝ ██╗███████╗ ╚████╔╝ ╚██████╔╝╚██████╔╝██║  ██║          ║
    ║   ╚═╝  ╚═╝╚══════╝  ╚═══╝   ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝          ║
    ║                                                                ║
    ║   ZERO-SERVER CLIENT-SIDE CRYPTOGRAPHY & PRIVACY UTILITY SUITE ║
    ╚════════════════════════════════════════════════════════════════╝

**Sovereign, Self-Contained, Deterministic Web Crypto Architecture**  
*Zero Backend • Zero Telemetry • Zero Cookies • Strict `connect-src 'none'` Isolation*

[![Mozilla Observatory](https://img.shields.io/badge/Mozilla_Observatory-Grade_A%2B_(115%2F100)-0A0A0A?style=for-the-badge&logo=mozilla&logoColor=E4E4E7)](https://developer.mozilla.org/en-US/observatory/analyze?host=xevqor.my.id)
[![Security Headers](https://img.shields.io/badge/Security_Headers-Grade_A%2B-0A0A0A?style=for-the-badge&logo=cloudflare&logoColor=E4E4E7)](https://securityheaders.com/?q=https%3A%2F%2Fxevqor.my.id%2F&followRedirects=on)
[![VirusTotal](https://img.shields.io/badge/VirusTotal-0%2F94_Clean-0A0A0A?style=for-the-badge&logo=virustotal&logoColor=E4E4E7)](https://www.virustotal.com/gui/url/15d26cd0f18520bfc5b8e5c9b03983fc85ee717d83e98aa7c2510f8f5e28adbd)
[![Network Policy](https://img.shields.io/badge/Network_Sandbox-connect--src_'none'-18181B?style=for-the-badge&logo=shield&logoColor=E4E4E7)](#-01--zero-trust-execution--edge-architecture)
[![Web Crypto](https://img.shields.io/badge/Engine-Native_Web_Crypto_API-18181B?style=for-the-badge&logo=webauthn&logoColor=E4E4E7)](#-02--cryptographic-modules--honest-threat-model-matrix)

<br>

| 🌐 **PRIMARY EDGE PRODUCTION** | 🪞 **OPEN-SOURCE AUDIT MIRROR** | 🔐 **CRYPTOGRAPHIC MANIFEST** |
| :---: | :---: | :---: |
| [**`https://xevqor.my.id/`**](https://xevqor.my.id/) | [**`https://xevqor.github.io/`**](https://xevqor.github.io/) | [**`SHA256SUMS.txt`**](./SHA256SUMS.txt) |
| *Cloudflare Edge + Strict `_headers`* | *Byte-Identical Public Source* | *15-Artifact Reproducible Hashes* |

</div>

---

## 01 // Zero-Trust Execution & Edge Architecture

Every cryptographic operation inside **XEVQOR** executes locally in volatile browser tab RAM using native **`window.crypto.subtle`** and **`window.crypto.getRandomValues`** primitives. Zero external CDNs, analytics beacons, web fonts, or third-party scripts exist anywhere in the codebase.

    ┌────────────────────────────────────────────────────────────────┐
    │  LAYER 1 // EDGE PERIMETER & TRANSPORT HARDENING               │
    │  ├── Production (xevqor.my.id)  : Cloudflare Pages + _headers  │
    │  │   • CSP Level 3 SHA-256 Script Hashes (Zero unsafe-inline)  │
    │  │   • COOP: same-origin | COEP: require-corp (Process Lock)   │
    │  │   • HSTS Preload (2-Yr) | X-Frame-Options: DENY | 0 Cookies │
    │  └── Mirror (xevqor.github.io)  : GitHub Pages Static Mirror   │
    │      • Byte-identical HTML/JS; enforced via <meta> CSP Policy  │
    ├────────────────────────────────────────────────────────────────┤
    │  LAYER 2 // BROWSER SANDBOX & ZERO-PERSISTENCE BOUNDARY        │
    │  ├── Network Lock  : connect-src 'none' (Blocks all outbound)  │
    │  ├── User Storage  : 0 Cookies | 0 localStorage | 0 IndexedDB  │
    │  └── Offline Cache : sw.js caches static App-Shell assets ONLY │
    │                      (Never caches user secrets or # fragments) │
    ├────────────────────────────────────────────────────────────────┤
    │  LAYER 3 // NATIVE WEB CRYPTO CORE (Browser RAM Only)          │
    │  ├── KDF           : PBKDF2-HMAC-SHA256 (600,000 Iterations)   │
    │  ├── Entropy       : 128-bit CSPRNG Salt + 96-bit Unique IV    │
    │  └── AEAD Ciphers  : AES-256-GCM & Chunked STREAM-AEAD (10 MB) │
    └────────────────────────────────────────────────────────────────┘

### Hosting Scope & Storage Boundary Matrix

| Security Dimension | `[https://xevqor.my.id/](https://xevqor.my.id/)` (Cloudflare Pages) | `[https://xevqor.github.io/](https://xevqor.github.io/)` (GitHub Pages) |
| :--- | :--- | :--- |
| **Static HTML / JS Payload** | Identical SHA-256 checksums (`SHA256SUMS.txt`) | Identical SHA-256 checksums (`SHA256SUMS.txt`) |
| **CSP Enforcement Mechanism** | HTTP Response Header (`_headers`) w/ SHA-256 hashes | In-document `<meta http-equiv="Content-Security-Policy">` |
| **Cross-Origin Process Isolation** | Active (`COOP: same-origin` + `COEP: require-corp`) | Not supported by GitHub Pages static hosting |
| **HSTS & Frame Protection** | `max-age=63072000; preload` + `X-Frame-Options: DENY` | Platform default HTTPS + `<meta>` `frame-ancestors` |
| **User Secret / File Persistence** | **Zero** — processed strictly in volatile tab RAM | **Zero** — processed strictly in volatile tab RAM |

> **Passphrase Entropy Responsibility:** While **600,000 PBKDF2-SHA256 iterations** substantially slow down brute-force attacks, weak or dictionary passwords remain vulnerable to offline GPU cracking if ciphertext is intercepted. Always use high-entropy passphrases (**4+ random words** or **16+ mixed characters**).

---

## 02 // Cryptographic Modules & Honest Threat-Model Matrix

XEVQOR explicitly documents both **what each engine guarantees cryptographically** and **where its physical or platform threat boundaries end**.

| Route | Module | Primitives & Wire Format | Honest Threat-Model & Operational Boundaries |
| :--- | :--- | :--- | :--- |
| [`/encrypt/`](https://xevqor.my.id/encrypt/) | **Encrypt (`XQR2`)** | `PBKDF2-SHA256` (600k) + **10 MB Chunked STREAM-AEAD** (`AES-256-GCM`) | Authenticates chunk order, EOF, original filename, and exact byte length. Bounded by browser tab RAM; restores files with `xevqor.` prefix. |
| [`/cipherlink/`](https://xevqor.my.id/cipherlink/) | **Cipherlink** | `deflate-raw` + `AES-256-GCM` inside URL `#` fragment | **Stateless URL-Fragment Cipher:** Payload stays in `#` hash (never sent to servers) and scrubs address bar via `history.replaceState` on decrypt. **Does not delete messages remotely**—copies in chat logs or screenshots persist. |
| [`/stego/`](https://xevqor.my.id/stego/) | **Stego** | **EOF Container Injection** (`XEVQOR88` magic marker + `AES-256-GCM`) | Appends authenticated ciphertext after carrier file's EOF (not pixel-level LSB steganography). Must be sent as an uncompressed file/document; apps that re-encode images strip the payload. Auto-clears clipboard after 45s. |
| [`/nebula/`](https://xevqor.my.id/nebula/) | **Nebula** | `AES-256-GCM` mapped to `U+200B` / `U+200C` Zero-Width Unicode | Embeds ~360 invisible characters per plaintext byte at cover text midpoint. Fails if transmitted through channels that strip or normalize invisible Unicode. |
| [`/nano/`](https://xevqor.my.id/nano/) | **Nano** | `deflate-raw` + `AES-256-GCM` → Compact Base64 | Designed for short, high-density encrypted text blocks over plain-text channels. |
| [`/keypass/`](https://xevqor.my.id/keypass/) | **Keypass** | Deterministic `PBKDF2-SHA256` (600,000 iterations) | Stateless password derivation. Service labels are case-normalized (`lowercase`); **Output B** is a deterministic character-remapped variant of Output A (same primary entropy). Auto-clears clipboard after 45s. |
| [`/hash/`](https://xevqor.my.id/hash/) | **Hash** | Native `crypto.subtle.digest` (`SHA-256`, `SHA-512`, `SHA-1`) | Local file and text integrity hashing. **SHA-1** is explicitly labeled as a **Legacy Non-Security Checksum** (vulnerable to collision attacks). |
| [`/jwt/`](https://xevqor.my.id/jwt/) | **JWT** | Local Base64URL Header & Payload Inspector | Offline token structure & `exp`/`iat` decoder (`UNVERIFIED SIGNATURE` — does not perform cryptographic signature verification). Never paste live secrets into untrusted origins. |
| [`/dice/`](https://xevqor.my.id/dice/) | **Dice** | Unbiased CSPRNG (`crypto.getRandomValues` + rejection sampling) | Eliminates modulo bias (`uint32 < 4294967292`) for cryptographic dice rolls and entropy generation. |

<details>
<summary><b>🔍 Expand Deep-Dive Technical Specifications (Wire Formats & Architecture Cards)</b></summary>

    ┌────────────────────────────────────────────────────────────────┐
    │ [01] /encrypt/ — XQR2 STREAM-AEAD BINARY CONTAINER             │
    │  • Magic Header : "XQR2" + 16B Salt + 12B Base IV + Meta Len   │
    │  • Chunk Framing: Sequential 10 MB blocks; counter-derived IV  │
    │  • Finality Flag: Bitmask authenticates EOF to block truncation│
    ├────────────────────────────────────────────────────────────────┤
    │ [02] /cipherlink/ — STATELESS URL-FRAGMENT CIPHER              │
    │  • Transport    : [https://xevqor.my.id/cipherlink/#](https://xevqor.my.id/cipherlink/#)<b64url>    │
    │  • Zero-Server  : RFC 3986 # fragments are never sent in HTTP  │
    │  • Memory Hygiene: history.replaceState() wipes # post-decrypt │
    ├────────────────────────────────────────────────────────────────┤
    │ [03] /stego/ — XEVQOR88 EOF CONTAINER INJECTION                │
    │  • Structure    : [Original Carrier Bytes] + [XEVQOR88] + GCM  │
    │  • Carrier Rule : Preserves visual/binary fidelity 100%, but   │
    │                   requires raw file transfer (Document mode)   │
    └────────────────────────────────────────────────────────────────┘

</details>

---

## 03 // Independent Public Audits & Reproducible Verification

Because `SHA256SUMS.txt` resides inside this repository, independent external verification is anchored by immutable public security scans against the live production deployment at **`https://xevqor.my.id/`**:

| Audit Platform | Verified Production Result (`https://xevqor.my.id/`) | Permanent Public Report |
| :--- | :--- | :---: |
| **Mozilla HTTP Observatory** | **Grade A+ (`115/100` — `12/12` Tests Passed)** • SHA-256 CSP • 0 Cookies | [**View Live Report ↗**](https://developer.mozilla.org/en-US/observatory/analyze?host=xevqor.my.id) |
| **Security Headers (Snyk)** | **Grade A+** • All 6 Core Edge HTTP Security Headers Active • 0 Warnings | [**View Live Report ↗**](https://securityheaders.com/?q=https%3A%2F%2Fxevqor.my.id%2F&followRedirects=on) |
| **urlscan.io Sandbox** | **1 Domain (`xevqor.my.id`) • 2 Requests • 0 Cookies • 100% HTTPS** | [**View Live Report ↗**](https://urlscan.io/result/01a1faa4-4259-760c-ac4d-81cb7561f052/) |
| **VirusTotal Threat Intel** | **0 Malicious Flags** Across Global Security Vendors | [**View Live Report ↗**](https://www.virustotal.com/gui/url/15d26cd0f18520bfc5b8e5c9b03983fc85ee717d83e98aa7c2510f8f5e28adbd) |
| **Qualys SSL Labs** | Cloudflare Edge **TLS 1.3** & **2-Year HSTS Preload** | [**View Live Report ↗**](https://www.ssllabs.com/ssltest/analyze.html?d=xevqor.my.id) |

### Local Checksum & Three-Way Parity Verification

Anyone can verify that the local build, Cloudflare Pages production (`xevqor.my.id`), and GitHub mirror (`xevqor.github.io`) serve bit-identical files:

    # 1. Verify all 15 repository artifacts against SHA256SUMS.txt
    sha256sum -c SHA256SUMS.txt

    # 2. Verify live 3-way hash parity across all 10 routes
    for m in "" keypass/ hash/ jwt/ cipherlink/ nano/ nebula/ encrypt/ stego/ dice/; do
      f="${m}index.html"
      C=$(curl -sL "[https://xevqor.my.id/$f](https://xevqor.my.id/$f)" | sha256sum | cut -c1-12)
      G=$(curl -sL "[https://xevqor.github.io/$f](https://xevqor.github.io/$f)" | sha256sum | cut -c1-12)
      [ "$C" = "$G" ] && echo "✅ PARITY OK: $f ($C)" || echo "❌ MISMATCH: $f"
    done
