---
title: Contributing
description: How to report a bug, suggest an idea or contribute code to Birchpad.
---

Birchpad is open source under the MIT or Apache-2.0 license, at your option. There are several ways to help:

- **Report a bug or suggest an idea** in [GitHub Issues](https://github.com/SecurityTrip/Birchpad/issues). Include the version (**Help → About**), your system and the steps that reproduce the bug.
- **Report a vulnerability** privately, as [SECURITY.md](https://github.com/SecurityTrip/Birchpad/blob/main/SECURITY.md) describes.
- **Tell others about Birchpad** and star it on [GitHub](https://github.com/SecurityTrip/Birchpad).
- **Improve this website**: its source is [birchpad-landing](https://github.com/SecurityTrip/birchpad-landing); every documentation page has an "Edit page" link.

## Code

For anything bigger than a small fix, open an issue or a discussion first to agree on the approach. Architecture decisions are recorded in [`docs/adr`](https://github.com/SecurityTrip/Birchpad/tree/main/docs/adr); if your change contradicts one, propose a new one.

```bash
cargo fmt --all
cargo clippy --workspace --all-targets
cargo test --workspace
```

CI runs the same with warnings as errors on Windows (x64 and ARM64), Linux and macOS, plus `cargo-deny`. How to build: [Building from source](/en/docs/build/).

- **Tests are required.** The project has no testers, so its tests are its quality assurance: every change covers the ordinary case, invalid input and boundary values. A bug fix comes with a test that fails without the fix.
- **Commits** follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`…), one logical change per pull request.
- **Third-party code.** Do not copy code from GPL-licensed projects (Notepad++ included) or MPL-licensed ones. Reading them for ideas is fine. Compatibility with Notepad++ file formats (themes, UDL, API files) is welcome.

The full rules are in [CONTRIBUTING.md](https://github.com/SecurityTrip/Birchpad/blob/main/CONTRIBUTING.md).
