---
title: Roadmap
description: Birchpad's phases, from the first notepad to plugins, full parity with Notepad++ and beyond.
---

Birchpad first catches up with Notepad++ (phases 1–6), then goes further (phase 7). Phases are ordered by dependency, not by calendar. The detailed list with checkmarks is [ROADMAP.md](https://github.com/SecurityTrip/Birchpad/blob/main/docs/ROADMAP.md).

## ✓ 1. MVP notepad

Tabs, lossless encodings and line endings, simple find and replace, a Notepad++-like status bar, a single instance with Notepad++'s command line, installers, portable mode.

## ✓ 2. Notepad++-level editor

Highlighting for 50 languages with tree-sitter, embedded languages, folding, multi-cursor and columns, smart highlighting, bookmarks, line operations, split view, sessions with backups, watching files, automatic updates.

## ✓ 3. Search and navigation — 0.1.3

Extended mode and regular expressions, marks, Find in Files, the search results panel, incremental search, side panels (Function List, Document Map, workspace, projects), navigation history, change history.

## ✓ 4. Customization — 0.1.4

Themes and Notepad++ theme import, the Style Configurator, Preferences, the Shortcut Mapper, macros, User Defined Languages, auto-completion, the Run and Tools menus, DOS and EBCDIC code pages, a Russian interface, printing, right-to-left text.

## ✓ 5. Plugins — 0.1.5

Plugins as sandboxed WebAssembly components (commands, document events, the plugin panel), scripts in Rhai, Plugins Admin with an allowlist for organizations and the `UserScripts` policy. Built-in versions of popular Notepad++ plugins: JSON Viewer, XML Tools, Hex Editor, Compare, Spell Checker. The whole interface translated into Russian.

## ✓ 6. Full parity with Notepad++ — 0.2.0 → 0.6.0

Everything Phases 1–5 did differently or left for later. The phase ships in several releases:

- **✓ 0.2.0**: pinned and colored tabs, the tab’s menu and Close Multiple Documents, the document switcher, the Window menu, the toolbar, the text’s context menu, window modes, a dark interface, fonts in themes, more Preferences, “Edit with Birchpad” in the Explorer, Birchpad as the default editor.
- **✓ 0.3.0**: updating from the window that announces it; tests four times faster and much wider.
- **✓ 0.4.0**: Markdown and PlantUML preview, the UDL editor, API files of its own for 15 languages, closing HTML and XML tags, right-to-left text, a German interface, EBCDIC 875 and NEL.
- **✓ 0.5.0**: print preview, file hashes in a window, Notepad++'s Help menu, all of Notepad++'s command line options, installing PlantUML with one button.
- **✓ 0.6.0**: plugin API 0.2 (settings, files with permission, panels of their own, background work), script commands, ComparePlus-style Compare, JSON Viewer's tree, XPath and schema validation in XML Tools, Hex Editor in place, an English dictionary included, the online plugin catalog, documentation in Russian, a last comparison with Notepad++.

## 7. Beyond Notepad++ — 0.7.0 → 1.0.0

- **0.7.0**: a command palette, a fuzzy file finder, syntax-aware selection, sticky scroll, and the few menus, Preferences and command line options of Notepad++ 8 that the last comparison found missing.
- **0.8.0**: an LSP client, Git (changes in the gutter, blame, diff), an integrated terminal.
- **0.9.0**: multi-gigabyte files, CSV and JSON viewers, remote editing over SSH/SFTP, Vim mode.
- **1.0.0**: closing the phase.

## Releases

| Channel | Built from | Cadence |
|---|---|---|
| Nightly | the next version's branch | nightly, when there are changes |
| Beta | `release/x.y` | every 1–2 weeks |
| Stable | tags on the release branch | every 4–8 weeks |

In the works: Authenticode signing for Windows and notarization for macOS, an ARM64 MSI, winget and Scoop manifests, ADMX/ADML templates.
