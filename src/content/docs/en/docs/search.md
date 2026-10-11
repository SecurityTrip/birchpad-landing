---
title: Find and replace
description: Birchpad's search modes, regular expressions, Find in Files, marks, incremental search and the search results panel.
---

Find, Replace and Mark open as a panel at the bottom of the window with three tabs: <kbd>Ctrl</kbd>+<kbd>F</kbd>, <kbd>Ctrl</kbd>+<kbd>H</kbd> and <kbd>Ctrl</kbd>+<kbd>M</kbd>. The panel never covers the text and stays open while you need it.

## Search modes

| Mode | Finds |
|---|---|
| Normal | The text as it is. |
| Extended | Text with `\n`, `\r`, `\t`, `\0`, `\x41` and similar sequences. |
| Regular expression | Regular expressions with back-references and look-around. |

Replacements take `$1`, `\1` and `${name}`, and case conversion: `\U` and `\L` up to `\E`, `\u` and `\l` for one letter. For example, `fn (\w+)\(` → `fn \U$1\E(`.

Options: **Match case**, **Match whole word only**, **Wrap around**, backward direction, **In selection**. **Count** counts the matches; **Replace All** replaces as one undo step, in the document, the selection or all opened documents.

## Marks

The **Mark** tab colors every match. **Bookmark line** bookmarks each line with a match, **Purge for each search** clears earlier marks. **Copy Marked Text** collects every mark into the clipboard.

Separately from searching, a word can be colored with five styles: **Search → Style All Occurrences of Token**, jumping between them, and **Clear Style**. The selected word is highlighted in all visible text automatically (smart highlighting, set in **Settings → Preferences…**).

## Search results panel

**Find All in Current Document** and **Find All in All Opened Documents** list the lines with matches in the search results panel. Searches stack and fold. Double-click or <kbd>F4</kbd> / <kbd>Shift</kbd>+<kbd>F4</kbd> go to the matches, <kbd>F7</kbd> shows or hides the panel, <kbd>Del</kbd> removes the selected result.

## Find in Files

<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd> finds and replaces in the files of a folder. Filters work as in Notepad++:

```text
*.rs *.toml !*.bak !\target !+\node_modules
```

`!` excludes files, `!\folder` a folder, `!+\folder` a folder at any depth. Options: **In all sub-folders**, **In hidden folders** and **Follow current doc.** (the current file's folder).

Open documents are searched with their unsaved changes, and replacing in them is undone like any edit. Other files are written back in their own encoding, with their byte order mark and line endings. Binary files are skipped. **Stop** ends a long search, keeping what it found.

## Incremental search

<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>I</kbd> opens a bar that finds while you type. <kbd>Enter</kbd> and <kbd>Shift</kbd>+<kbd>Enter</kbd> go to the next and previous match, **Highlight all** marks and counts every match.

## Going places

- <kbd>Ctrl</kbd>+<kbd>G</kbd> goes to a line or offset.
- <kbd>Ctrl</kbd>+<kbd>B</kbd> goes to the matching brace, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd> selects up to it.
- **Search → Go Back** and **Go Forward** (<kbd>Alt</kbd>+<kbd>←</kbd> / <kbd>Alt</kbd>+<kbd>→</kbd>) return to where the caret jumped from: another document, a search result, Go To. A closed file opens again.
