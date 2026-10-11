---
title: Building from source
description: How to build and run Birchpad from source, run the tests, and what is where in the repository.
---

Birchpad is written in Rust. It needs the toolchain pinned in [`rust-toolchain.toml`](https://github.com/SecurityTrip/Birchpad/blob/main/rust-toolchain.toml); [rustup](https://rustup.rs/) installs it automatically.

```bash
git clone https://github.com/SecurityTrip/Birchpad
cd Birchpad
cargo run -p birchpad            # build and run
cargo build -p birchpad --release
cargo test --workspace           # tests
```

On Debian and Ubuntu, install the build libraries first:

```bash
sudo apt-get install -y build-essential pkg-config libxkbcommon-dev libxkbcommon-x11-dev \
  libwayland-dev libvulkan-dev libx11-xcb-dev libxcb1-dev libfontconfig-dev libfreetype-dev \
  libssl-dev libzstd-dev
```

## Repository layout

| Path | Contents |
|---|---|
| `crates/core` | Text model: rope, selections, change sets, undo history. No UI. |
| `crates/config` | Settings layers: defaults, machine defaults, user, policies. |
| `crates/commands` | Command catalog, keymap and menus as data. |
| `crates/io` | Encoding detection and conversion, reading and safely saving files. |
| `crates/view` | Layout of a document view: tab stops, word wrap, visual rows. |
| `crates/syntax` | Languages and syntax trees: detection, tree-sitter, highlighting, folding. |
| `crates/theme` | Themes, their format and the Notepad++ theme import. |
| `crates/cli` | Notepad++-style command line and the hand-off to a running instance. |
| `crates/update` | Updates: the signed manifest, channels, installing. |
| `crates/menu-bar` | The menu bar on Windows and Linux, with keyboard access. |
| `crates/app` | The application itself, on [GPUI](https://www.gpui.rs/). |
| `packaging/` | MSI, macOS bundle, portable mode, update signing. |
| `docs/adr/` | Architecture decision records. |

How development and testing work: [Contributing](/en/contributing/).
