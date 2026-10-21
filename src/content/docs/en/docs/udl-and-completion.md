---
title: User languages and auto-completion
description: Notepad++ User Defined Languages in Birchpad, auto-closed brackets, word completion and call tips from Notepad++ API files.
---

## User Defined Languages (UDL)

Birchpad reads Notepad++ UDL files as they are. Put them in the `userDefineLangs` folder next to the [settings](/en/docs/settings/#where-files-live), or use **Language → User Defined Language → Import…**, which checks a file and copies it there. One file may hold several languages.

The languages are listed in **Language → User Defined Language** and apply to files with their extensions when no built-in language claims them. The chosen language is kept in the session.

Highlighting works as in Notepad++: block and line comments, delimiters with their escape character, operators, numbers, keywords of groups 1–8 (matching case or not, whole or as prefixes). Colors come from the UDL file, and those it leaves unset from the theme.

Folding at the language's folding words and symbols (in code and in comments), numbers with prefixes, suffixes, extra characters and ranges, comments that must start a line and nested delimiters work as in Notepad++ too.

**Language → User Defined Language → Define Your Language…** opens an editor for the extensions, keywords, comments, operators, delimiters, folding and numbers of a new language or one already there. The same menu has **Open User Defined Language Folder…** and **Notepad++ User Defined Languages Collection**.

## Auto-completion

Settings are in **Settings → Preferences… → Auto-Completion** and in [`[completion]`](/en/docs/settings/#completion).

Notepad++'s options are there too: function and word completion, each from its own number of characters, Ignore case and Ignore numbers.

### Pairs

Brackets and quotes `()[]{}""''` get their closing partner as you type. Typing the closing one steps over it; <kbd>Backspace</kbd> between an empty pair deletes both. A quote is closed only where a string can start, not after a word, where it is an apostrophe. Works for every caret at once. `completion.auto-close` sets the pairs, such as `"()[]{}«»"`.

Turn on **Close HTML and XML tags** and typing the `>` of an opening tag inserts its closing tag (off by default, as in Notepad++).

### Word list

While you type a word, a list shows: the language's keywords and functions from its API file with their signatures first, then the document's words. <kbd>Ctrl</kbd>+<kbd>Space</kbd> asks for it. <kbd>↑</kbd> <kbd>↓</kbd> choose, <kbd>Enter</kbd> or <kbd>Tab</kbd> insert, <kbd>Esc</kbd> closes.

### Call tips

After a function's opening bracket its parameters show, one overload at a time with “1 of 3”; <kbd>↑</kbd> and <kbd>↓</kbd> go through them. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Space</kbd> shows the tip again inside a call.

### API files

Keywords and functions come from API files. Birchpad ships its own for 15 languages: Bash, C, C++, C#, CSS, Go, HTML, Java, JavaScript, PHP, PowerShell, Python, Rust, SQL, TypeScript. A Notepad++ file of the same name in the `autoCompletion` folder next to the settings (such as `autoCompletion/python.xml`) takes the place of Birchpad\'s. Inside an HTML document\'s `<script>` and `<style>`, the JavaScript and CSS API files apply.
