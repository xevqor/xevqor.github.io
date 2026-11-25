# Security Policy & Responsible Disclosure

## Supported Endpoints
| Endpoint | Role |
| :--- | :--- |
| `https://xevqor.org` | Primary Production Gateway (Cloudflare Edge + `_headers`) |
| `https://xevqormyid.pages.dev` | Cloudflare Pages Mirror |
| `https://xevqor.github.io` | GitHub Pages Auditable Source Mirror |

## Threat-Model Boundaries
1. **Client-Side Execution vs. Infrastructure Visibility:** Cryptographic operations run locally in browser memory via the W3C Web Crypto API (`window.crypto.subtle`) with no application backend, database, cookies, or analytics. Standard HTTP connection metadata (client IP and CDN diagnostic headers like `NEL`/`Report-To`) remains visible to the hosting network edge during static asset delivery.
2. **Passphrase & Brain Key Entropy:** `AES-256-GCM` and `PBKDF2-SHA256` (600,000 iterations, aligned with NIST SP 800-132) protect against casual brute force, but weak passphrases/Brain Keys remain vulnerable to offline GPU cracking if ciphertext or deterministic outputs are captured.
3. **Browser Runtime & Memory Model:** `WIPE SYSTEM` / `WIPE MEMORY` clears active DOM state and triggers best-effort 45s clipboard clearing when permissions are granted; physical RAM zeroization is governed by the browser JavaScript garbage collector.
4. **Parser Bounds Hardening:** Binary parsers (`/encrypt` `XQR2`, `/stego` `XEVQOR88`, `/nebula` zero-width streams) enforce strict header, offset, and metadata bounds checks prior to allocation and decryption.

## Verifying Build Reproducibility
```bash
sha256sum -c SHA256SUMS.txt
```

## Reporting a Vulnerability
Open a private security advisory at `https://github.com/xevqor/xevqor.github.io/security/advisories/new` or a public issue at `https://github.com/xevqor/xevqor.github.io/issues` with affected route, browser/OS version, and reproduction steps.
