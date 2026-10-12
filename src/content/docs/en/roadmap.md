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

## 6. Full parity with Notepad++ — next

Everything phases 1–5 did differently or left for later: fonts in themes, the remaining Preferences sections, the Window menu, tab colors and pinned tabs, the text's context menu, the UDL editor, print preview, more interface languages, input methods and screen readers verified on real systems.

## 7. Beyond Notepad++

An LSP client, a command palette and fuzzy file finder, Git (gutter changes, blame, diff), an integrated terminal, syntax-aware selection, multi-gigabyte files, remote editing over SSH/SFTP, CSV and JSON viewers, vim mode, collaborative editing, AI assistance (disabled by the `OnlineFeatures` policy).

## Releases

| Channel | Built from | Cadence |
|---|---|---|
| Nightly | the next version's branch | nightly, when there are changes |
| Beta | `release/x.y` | every 1–2 weeks |
| Stable | tags on the release branch | every 4–8 weeks |

In the works: Authenticode signing for Windows and notarization for macOS, an ARM64 MSI, winget and Scoop manifests, ADMX/ADML templates.
