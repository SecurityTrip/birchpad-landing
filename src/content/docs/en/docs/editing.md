---
title: Editing
description: Tabs and split view, multiple carets and rectangular selection, the Column Editor, line operations, folding, bookmarks and change history.
---

## Tabs and split view

Every document opens in a tab. A middle click on a tab closes it, and files can be dropped on the window from the file manager.

The window splits into two views, side by side or stacked (**View → Rotate Split View**):

- drag a tab onto the right or bottom third of the text and the document moves to the other view;
- with <kbd>Ctrl</kbd> (or for the only tab) the document is **cloned**: the same text in two views with their own scrolling and carets;
- **Move to Other View** and **Clone to Other View** do the same from the tab's menu;
- <kbd>F8</kbd> moves the focus between the views, and **Synchronize Vertical Scrolling** and **Synchronize Horizontal Scrolling** move them together.

## Multiple carets and columns

- <kbd>Alt</kbd> + drag, or <kbd>Alt</kbd>+<kbd>Shift</kbd>+arrows, selects a rectangle — even past the end of short lines.
- Typing, deleting, copying and pasting work on every line of the rectangle at once.
- **Multi-select Next** and **Multi-select All** add carets on the same word; the last one added can be undone or skipped. <kbd>Esc</kbd> goes back to one caret.
- **Edit → Column Editor…** (<kbd>Alt</kbd>+<kbd>C</kbd>) inserts text or numbers on each line — decimal, hexadecimal, octal or binary, padded with zeros or spaces.

Widths are counted in cells, as in a terminal: Chinese, Japanese and Korean characters take two columns, so rectangles stay straight.

## Line operations

Everything in the **Edit** menu is one undo step and has Notepad++'s keys:

- duplicate (<kbd>Ctrl</kbd>+<kbd>D</kbd>), delete, move up and down (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>↑</kbd>/<kbd>↓</kbd>), join (<kbd>Ctrl</kbd>+<kbd>J</kbd>) and split lines;
- sort lexicographically, ignoring case, as integers, as decimals with a comma or a dot, by length — ascending and descending; sort by the columns of a rectangular selection; reverse and randomize;
- remove duplicate, consecutive duplicate and empty lines, trim spaces, convert tabs and spaces;
- case: UPPERCASE, lowercase, Proper Case, Sentence case, iNVERT cASE, rAnDoM cAsE;
- line and block comments with the document's language tokens (<kbd>Ctrl</kbd>+<kbd>Q</kbd>).

## Indentation, braces and highlighting

- **Auto-indent** (`editor.auto-indent`): off, basic (as the line above) or advanced — one level more after an opening bracket.
- <kbd>Ctrl</kbd>+<kbd>B</kbd> goes to the matching brace.
- **Smart highlighting** marks every occurrence of the selected word in the visible text.
- **Search → Style All Occurrences of Token** colors a word with one of five styles (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>1</kbd>…<kbd>5</kbd>); you can jump between them and copy the styled text.
- Closing brackets and quotes and call tips — see [auto-completion](/en/docs/udl-and-completion/#auto-completion).

## Folding and bookmarks

Blocks fold by the syntax tree (by indentation in plain text): with the boxes in the margin, **Fold All**, **Unfold All**, and by levels 1–8.

A click in the symbol margin sets a bookmark (<kbd>Ctrl</kbd>+<kbd>F2</kbd>); <kbd>F2</kbd> and <kbd>Shift</kbd>+<kbd>F2</kbd> go between them. Bookmarked lines can be cut, copied, removed or inverted in one command.

## Change history

A margin between the bookmarks and the folding marks the lines changed since the file was opened: **orange** until they are saved, **green** after. `editor.change-history = "off"` turns it off.

## Display

**View → Show Symbol** shows spaces and tabs, line endings (CR, LF, CRLF), indentation guides and the wrap symbol. You can also turn on a vertical edge at several columns (`editor.edge`), the current line as a background or a frame, word wrap and zoom (<kbd>Ctrl</kbd>+<kbd>+</kbd>, <kbd>Ctrl</kbd>+<kbd>-</kbd>, <kbd>Ctrl</kbd>+<kbd>0</kbd>).

**View → Monitoring (tail -f)** follows a file that grows, like `tail -f`: handy for logs.

## Right-to-left text

Rows with Hebrew or Arabic show in their proper order by the Unicode Bidirectional Algorithm, with carets and clicks where they belong. **Edit → Text Direction RTL** turns a whole view right to left.
