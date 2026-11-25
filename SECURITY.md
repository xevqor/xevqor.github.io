# Security Policy & Responsible Disclosure

## Supported Endpoints
| Endpoint | Role |
| :--- | :--- |
| `https://xevqor.org` | Primary Production Gateway (Cloudflare Edge + `_headers`) |
| `https://xevqormyid.pages.dev` | Cloudflare Pages Mirror |
| `https://xevqor.github.io` | GitHub Pages Auditable Source Mirror |

## Threat-Model Boundaries
1. **Client-Side Execution vs. Edge Infrastructure:** All key derivation, encryption, hashing, and encoding run locally in browser memory via the W3C Web Crypto API (`window.crypto.subtle`). XEVQOR operates zero application servers, databases, or tracking cookies. Standard HTTP connection metadata (client IP, CDN headers like `NEL`/`Report-To`) and passive edge-level Cloudflare Web Analytics (`beacon.min.js`, blocked by our strict `script-src` CSP in enforcing browsers and isolated from Web Crypto keys, local RAM, inputs, and `#` URL fragments) remain confined to the hosting network edge.
2. **Passphrase & Brain Key Entropy:** `AES-256-GCM` and `PBKDF2-SHA256` (600,000 iterations, aligned with NIST SP 800-132) protect against casual brute force, but weak passphrases/Brain Keys remain vulnerable to offline GPU cracking if ciphertext or deterministic outputs are captured.
3. **Browser Runtime & Memory Model:** `WIPE SYSTEM` / `WIPE MEMORY` clears active DOM state and triggers best-effort 45s clipboard clearing when permissions are granted; physical RAM zeroization is governed by the browser JavaScript garbage collector.
4. **Parser Bounds Hardening:** Binary parsers (`/encrypt` `XQR2`, `/stego` `XEVQOR88`, `/nebula` zero-width streams) enforce strict header, offset, and metadata bounds checks prior to allocation and decryption.

## Verifying Build Reproducibility
```bash
sha256sum -c SHA256SUMS.txt
```

## Reporting a Vulnerability
Open a private security advisory at `https://github.com/xevqor/xevqor.github.io/security/advisories/new` or a public issue at `https://github.com/xevqor/xevqor.github.io/issues` with affected route, browser/OS version, and reproduction steps.

## Resource & Parser Safety Bounds
- **Stego (`/stego/`):** Enforces a 100 MB per-file (150 MB combined) pre-allocation check before reading `arrayBuffer()`, paired with `URL.revokeObjectURL()` cleanup and best-effort clipboard sanitization on `WIPE SYSTEM`.
- **Hash (`/hash/`) & Encrypt (`/encrypt/`):** Enforces a 250 MB pre-allocation RAM guard for in-memory hashing and mobile Blob fallback (desktop browsers with File System Access API stream chunks directly to disk).
- **Cipherlink (`/cipherlink/`) & Nano (`/nano/`):** Caps `deflate-raw` decompression streams at 5 MB to prevent decompression-bomb memory exhaustion.
- **Nebula (`/nebula/`):** Wraps zero-width bitstreams in explicit `NBL2` frame delimiters (`U+200D`/`U+FEFF`), version byte, and 32-bit payload length header, validating 8-bit alignment before AES-GCM decryption.
