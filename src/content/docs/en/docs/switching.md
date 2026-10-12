---
title: Switching from Notepad++
description: What Birchpad does the same way as Notepad++, what differs, and how to bring over themes, sessions, projects and user defined languages — on Windows, macOS and Linux.
---

Birchpad is not a fork of Notepad++: it is written from scratch in Rust and is not affiliated with the Notepad++ project. But its first goal is to match Notepad++, so that switching needs no relearning.

## What is the same

- **Menus and their names.** File, Edit, Search, View, Encoding, Language, Settings, Tools, Macro, Run — with the same items where you expect them.
- **Keyboard shortcuts.** <kbd>Ctrl</kbd>+<kbd>D</kbd> duplicates a line, <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd> finds in files, <kbd>F2</kbd> goes to a bookmark, <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd> records a macro. The full list is in the [shortcuts table](/en/docs/shortcuts/).
- **The command line.** `-n`, `-c`, `-p`, `-l`, `-ro`, `-multiInst`, `-nosession` and `-openSession` work as in Notepad++; other options are accepted and ignored, so file associations and scripts keep working. See [Command line](/en/docs/command-line/).
- **Search modes** Normal, Extended and regular expressions with Boost's replacement syntax (`$1`, `\U…\E`), and Find in Files filters such as `*.cpp !\build`.
- **Sessions**, backups of unsaved work, bookmarks, marks in five styles, change history in the margin.

## Bringing your setup over

| What | How |
|---|---|
| Open files | **File → Load Session…** opens Notepad++'s `session.xml`, with the unsaved copies from its backup folder. |
| Projects | Project Panels keep projects in Notepad++'s `.workspace` files — the same file opens in both editors. |
| Themes | **Settings → Import → Import Style Themes…** copies Notepad++ XML themes in; you can also drop them into the `themes` folder. See [Themes and styles](/en/docs/themes/). |
| User defined languages | **Language → User Defined Language → Import…** copies UDL files into the `userDefineLangs` folder. |
| Auto-completion | Notepad++ API files (`autoCompletion/<language>.xml`) go into the `autoCompletion` folder next to the settings. See [User languages and auto-completion](/en/docs/udl-and-completion/). |
| Run commands | `$(FULL_CURRENT_PATH)`, `$(CURRENT_WORD)` and the other variables work in the **Run** menu. |

## What differs

- **Settings in TOML.** Instead of `config.xml`, a readable `settings.toml` you can keep in Git and share. **Settings → Preferences…** edits the same file and keeps your comments. See [Settings](/en/docs/settings/).
- **A find panel, not a dialog.** Find, Replace, Mark and Find in Files open as a panel at the bottom of the window and never cover the text.
- **Printing through the browser.** **File → Print…** opens the document in its theme's colors in the browser's print dialog, which can also save a PDF.
- **Columns count cells.** Wide characters (Chinese, Japanese, Korean) take two columns, as in a terminal; Notepad++ counts characters.
- **Three systems.** The same settings, themes and macros work on Windows, macOS and Linux.

## Plugins

Notepad++ plugins are Windows DLLs, and Birchpad does not load them. Instead, the **Plugins** menu has its own versions of the most popular ones: JSON Viewer, XML Tools, Hex Editor, Compare and Spell Checker. New plugins are written as WebAssembly and run on every system — see [Plugins and scripts](/en/docs/plugins/).

## Not there yet

The Window menu, tab colors and pinned tabs, fonts in themes, and a dark mode for the interface independent of the editor theme. All of them are on the [roadmap](/en/roadmap/).
