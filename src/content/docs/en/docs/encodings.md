---
title: Encodings and line endings
description: How Birchpad detects encodings, "Encode in" versus "Convert to", ANSI, DOS and EBCDIC code pages, and line endings.
---

## Detection

On opening, Birchpad checks in order: a byte order mark (UTF-8, UTF-16 LE/BE), valid UTF-8, UTF-16 without a BOM, then guesses a legacy encoding (Windows-1251, KOI8-R and others) and, failing that, takes the ANSI encoding — the system code page on Windows, or `files.ansi-encoding` such as `"windows-1252"`.

A file's encoding, BOM and line endings are kept: opening and saving a file without edits gives the same bytes.

## Lossless

- A file that does not decode exactly opens **read-only** with a warning and an offer to reopen it in another encoding. **Edit Anyway…** lists every place where saving would change the file's bytes.
- If the text has characters the target encoding lacks, saving is refused with a list of them — Birchpad never substitutes `?` silently.

## "Encode in" versus "Convert to"

- **Encoding → Encode in** reads the file's bytes from disk again in another encoding — for a file that opened as mojibake. It clears the undo history.
- **Encoding → Convert to** changes the encoding the file will be saved in. The text stays, and <kbd>Ctrl</kbd>+<kbd>Z</kbd> undoes it like any edit.

The status bar shows the encoding and the line ending; a click on them opens the same menus.

## Character sets

**Encoding → Character Sets** lists every code page, DOS (OEM-US 437, 737, 775, 850, 852, 855, 857, 858, 860–865, 869) and EBCDIC (037, 500, 1026, 1140) included. Settings and the command line name them as `cp437` or `IBM437`, for example.

## Line endings

Windows (CR LF), Unix (LF) and Mac (CR) are detected on opening. Converting changes every line in one undo step; mixed line breaks in a file stay as they are, and the mode applies to new lines.
