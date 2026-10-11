---
title: Macros, Run and Tools
description: Recording and playing macros, running programs with Notepad++'s variables, hashes, Base64, URL and HEX conversions, printing.
---

## Macros

- **Macro → Start Recording** (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd>) records the commands run and the text typed; press it again to stop.
- **Playback** (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>) plays the last recorded macro.
- **Run a Macro Multiple Times…** plays it a number of times, or until the end of the file (until the caret reaches the end of the text or a run changes nothing).
- **Save Current Recorded Macro…** keeps it by name. Saved macros are listed in the **Macro** menu and can get shortcuts in **Settings → Shortcut Mapper…**.

Macros live in `macros.toml` next to the settings:

```toml
[[macro]]
name = "Quote the word"
steps = [
    { command = "edit.type", args = { text = "\"" } },
    { command = "cursor.word-right" },
    { command = "edit.type", args = { text = "\"" } },
]
```

## Run

**Run → Run…** runs a command line through the system's shell, or opens a web address in the browser. Variables work as in Notepad++:

| Variable | Value |
|---|---|
| `$(FULL_CURRENT_PATH)` | Full path of the current file. |
| `$(CURRENT_DIRECTORY)` | Its folder. |
| `$(FILE_NAME)` | Name with extension. |
| `$(NAME_PART)` | Name without extension. |
| `$(EXT_PART)` | Extension. |
| `$(CURRENT_WORD)` | The selection, or the word at the caret. |
| `$(CURRENT_LINE)`, `$(CURRENT_COLUMN)` | Caret line and column. |
| `$(CURRENT_LINESTR)` | Text of the current line. |
| `$(NPP_DIRECTORY)`, `$(NPP_FULL_FILE_PATH)` | Birchpad's folder and executable. |
| `$(SYS.<NAME>)` | An environment variable, such as `$(SYS.TEMP)`. |

**Save…** keeps the command by name in `run.toml`, and it appears in the menu:

```toml
[[command]]
name = "Wikipedia Search"
line = "https://en.wikipedia.org/wiki/Special:Search?search=$(CURRENT_WORD)"
```

## Tools

- **MD5, SHA-1, SHA-256, SHA-512 → Generate from Selection into Clipboard**: the hash of the selected text.
- **… → Generate from Files…**: hashes of chosen files in a new document, in `sha256sum` format.
- **Base64 Encode** and Decode, **URL Encode** and Decode, **ASCII to HEX** and back: on every selection at once, as one undo step.

## Printing

**File → Print…** (<kbd>Ctrl</kbd>+<kbd>P</kbd>) opens the document in its theme colors with line numbers in the browser's print dialog, which can also save a PDF. **File → Export to HTML…** saves the same page as a file.
