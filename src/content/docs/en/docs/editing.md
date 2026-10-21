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

### Pinning, colors and order

- **View → Tab → Pin Tab** (or the pin on a tab) keeps a tab at the start of the tab bar; **Close All but Pinned** leaves it open.
- **View → Tab → Apply Color 1…5** and **Remove Color** color tabs; the theme sets the colors (`tab-color-1` … `tab-color-5`).
- <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>PageDown</kbd> and <kbd>PageUp</kbd> move a tab, **Move Tab to Start / to End** take it to the edges.
- <kbd>Ctrl</kbd>+<kbd>Tab</kbd> opens the document switcher: while <kbd>Ctrl</kbd> is held it lists the view’s documents, most recently used first. <kbd>Ctrl</kbd>+<kbd>PageDown</kbd> and <kbd>PageUp</kbd> go through the tabs in order.
- Hover over a tab to see the start of its document.
- A double click on the empty part of the tab bar opens a new document.

Pinned tabs and colors are kept in sessions. Vertical tabs, several rows, smaller tabs and closing with a double click are in **Settings → Preferences… → Tab Bar** (the [`[tabs]`](/en/docs/settings/#tabs) keys).

### The tab’s menu and closing groups of tabs

Right-click a tab to close it or a group of tabs, save, print, pin or color it, move or clone it to the other view, or copy its path, file name or folder. **File → Close Multiple Documents** closes all but the current one, all but the pinned ones, all to the left or to the right, or all unchanged.

### The Window menu

The **Window** menu lists the active view’s documents, sorts them by name, path, type, length or modified time, and opens **Windows…**: a table of the documents where the selected ones are activated, saved or closed, and **Sort Tabs** gives the tabs the order shown.

## Files

- **Open Containing Folder**: in the file manager, a terminal or as the workspace; **Open in Default Viewer**.
- **Reload from Disk** (<kbd>Ctrl</kbd>+<kbd>R</kbd>), **Save a Copy As…** (in the document’s encoding), **Rename…**, **Move to Recycle Bin**.
- **Recent Files → Restore Recent Closed File** (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>T</kbd>) and **Open All Recent Files**.
- **Edit → Set Read-Only** keeps the document from being edited.

## Window modes

**View → Always on Top**, **Toggle Full Screen Mode** (<kbd>F11</kbd>), **Post-It** (<kbd>F12</kbd>: the text alone, without menus, tabs and panels) and **Distraction Free Mode** (the text in a column in the middle). A button in the corner leaves the last two. **Move to New Instance** and **Open in New Instance** open the file in a Birchpad of its own.

Under the menus is a toolbar with Notepad++’s buttons. Its size and visibility are in Preferences, its buttons and their order in `toolbar.buttons`.

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

## Context menu and links

Right-click the text for a menu: cut, copy, paste, token styles, case, comments, open the selected file, search the web for the selection. Its items are in `context-menu.toml` next to the settings (**Settings → Edit Popup ContextMenu**), like Notepad++’s `contextMenu.xml`: any command, labels of your own, submenus.

- **Edit → On Selection**: open the file or folder the selection names, or search the web for it (the engine is chosen in Preferences).
- **Edit → Paste Special**: copy and paste binary content (NUL characters kept), paste the clipboard’s HTML or RTF as text.
- **Edit → Insert → Date Time**: short, long or a format of your own (in Notepad++’s format letters).
- Addresses (`http`, `https`, `ftp`, `file`, `mailto` and schemes of your own) are underlined and open with <kbd>Ctrl</kbd>+click (<kbd>Cmd</kbd>+click on macOS); a double click selects a word, as anywhere else. `links.double-click` brings back Notepad++'s double click.
- <kbd>Ctrl</kbd>+double click selects the text between delimiters (quotes by default).
- **View → Hide Lines** (<kbd>Alt</kbd>+<kbd>H</kbd>) hides the selected lines; a click on the mark in the margin or **Show Hidden Lines** brings them back.
- **View → Summary…** shows the document’s path, times, characters, words and lines, and the selection’s.

## Display

**View → Show Symbol** shows spaces and tabs, line endings (CR, LF, CRLF), indentation guides and the wrap symbol. You can also turn on a vertical edge at several columns (`editor.edge`), the current line as a background or a frame, word wrap and zoom (<kbd>Ctrl</kbd>+<kbd>+</kbd>, <kbd>Ctrl</kbd>+<kbd>-</kbd>, <kbd>Ctrl</kbd>+<kbd>0</kbd>).

**View → Monitoring (tail -f)** follows a file that grows, like `tail -f`: handy for logs.

## Right-to-left text

Rows with Hebrew or Arabic show in their proper order by the Unicode Bidirectional Algorithm, with carets and clicks where they belong. **Edit → Text Direction RTL** turns a whole view right to left. In RTL the margins move to the right, and <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd> and <kbd>L</kbd> switch the direction. A selection over mixed text is drawn in pieces, and sessions keep the direction per tab (Notepad++\'s sessions too).
