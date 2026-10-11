---
title: User languages and auto-completion
description: Notepad++ User Defined Languages in Birchpad, auto-closed brackets, word completion and call tips from Notepad++ API files.
---

## User Defined Languages (UDL)

Birchpad reads Notepad++ UDL files as they are. Put them in the `userDefineLangs` folder next to the [settings](/en/docs/settings/#where-files-live), or use **Language → User Defined Language → Import…**, which checks a file and copies it there. One file may hold several languages.

The languages are listed in **Language → User Defined Language** and apply to files with their extensions when no built-in language claims them. The chosen language is kept in the session.

Highlighting works as in Notepad++: block and line comments, delimiters with their escape character, operators, numbers, keywords of groups 1–8 (matching case or not, whole or as prefixes). Colors come from the UDL file itself, not from the theme.

Not there yet: the UDL editor, UDL folding, number prefixes and suffixes, nested delimiters; see the [roadmap](/en/roadmap/).

## Auto-completion

Settings are in **Settings → Preferences… → Auto-Completion** and in [`[completion]`](/en/docs/settings/#completion).

### Pairs

Brackets and quotes `()[]{}""''` get their closing partner as you type. Typing the closing one steps over it; <kbd>Backspace</kbd> between an empty pair deletes both. A quote is closed only where a string can start, not after a word, where it is an apostrophe. Works for every caret at once. `completion.auto-close` sets the pairs, such as `"()[]{}«»"`.

### Word list

While you type a word, a list shows: the language's keywords and functions from its API file with their signatures first, then the document's words. <kbd>Ctrl</kbd>+<kbd>Space</kbd> asks for it. <kbd>↑</kbd> <kbd>↓</kbd> choose, <kbd>Enter</kbd> or <kbd>Tab</kbd> insert, <kbd>Esc</kbd> closes.

### Call tips

After a function's opening bracket its parameters show: every overload with its description. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Space</kbd> shows the tip again inside a call.

### API files

Keywords and functions come from Notepad++'s API files: `autoCompletion/<language>.xml` next to the settings, such as `autoCompletion/python.xml`. Birchpad does not ship any yet; take them from Notepad++'s `autoCompletion` folder.
