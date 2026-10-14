---
title: Themes and styles
description: Birchpad's built-in themes, Notepad++ themes, the Style Configurator and the TOML theme file format.
---

A theme sets the colors of the editor and the whole window: tabs, panels, menus and dialogs. Choose one in **Settings → Theme**; `appearance.theme` sets the theme at startup.

## Built-in and Notepad++ themes

- **Default**: Notepad++'s default colors.
- **Dark**: dark text and interface.

Notepad++ XML themes work as they are: put the file in the `themes` folder next to the settings, or use **Settings → Import → Import Style Themes…**. Scintilla style colors are matched to Birchpad's highlighting by their names. Fonts are not taken from themes yet.

## Style Configurator

**Settings → Style Configurator…** works as in Notepad++: choose a theme and change its colors (the editor's global styles, the interface, and highlighting for all languages or one: color, background, bold, italic, underline). Changes show at once. **Save & Close** writes the theme to `themes/<name>.toml`; the built-in files stay untouched.

## Theme file format

A theme is a TOML file in the `themes` folder. It only needs what it changes: the other colors come from the built-in theme of the same brightness. A theme is dark when it says `dark = true` or its editor background is dark.

```toml
# themes/Solarized.toml
dark = true

[editor]
background = "#002b36"
text = "#839496"
selection = "#073642"
caret = "#93a1a1"

[ui]
accent = "#268bd2"

[syntax]
comment = { color = "#586e75", italic = true }
keyword = "#859900"
string = "#2aa198"
"function.method" = "#268bd2"

[language.python]
keyword = { color = "#cb4b16", bold = true }
```

A color is `#rrggbb` or `#rrggbbaa` (with transparency). A style is a color string or a table with `color`, `background`, `bold`, `italic`, `underline`.

### `[editor]`

`text`, `background`, `selection`, `caret`, `current-line`, `gutter-background`, `gutter-text`, `gutter-border`, `bookmark`, `change-modified`, `change-saved`, `fold-mark`, `fold-line`, `fold-underline`, `whitespace`, `eol-box`, `eol-text`, `indent-guide`, `edge`, `brace-match`, `brace-bad`, `smart-highlight`, `find-mark`, `incremental-highlight`, `mark-1` … `mark-5` (the five token styles), `scrollbar-thumb`, `compare-added`, `compare-removed`, `compare-changed` (the Compare plugin), `spell-error` (the misspelling underline).

### `[ui]`

`background`, `surface`, `border`, `text`, `muted`, `faint`, `selected`, `hovered`, `accent`, `error`, `error-background`, `modified`, `directory`, `heading`, `line-number`, `match-background`, `tab-color-1` … `tab-color-5` (the colors of **View → Tab → Apply Color**).

### `[font]`

`family` and `size`: the text’s font. Style Configurator sets it; a Notepad++ theme gives the font of its Default Style.

### `[syntax]`

Styles by highlight name: `attribute`, `boolean`, `character`, `comment`, `constant`, `constant.builtin`, `constructor`, `escape`, `function`, `function.macro`, `keyword`, `keyword.directive`, `label`, `module`, `number`, `operator`, `property`, `string`, `string.escape`, `string.regexp`, `string.special.key`, `tag`, `tag.attribute`, `type`, `variable.builtin`, `markup.heading`, `markup.italic`, `markup.strong`, `markup.link`, `markup.list`, `markup.quote`, `markup.raw`, `diff.plus`, `diff.minus`, `diff.delta`, `error`.

A dotted name without a style of its own takes its prefix's: `function.method` → `function`. A style the file sets replaces the base theme's more specific ones (`string` replaces `string.escape` too), so your color is not hidden by styles the file does not know about.

### `[language.<id>]`

Styles of one language that differ from the shared ones. Ids are listed in [Languages](/en/docs/languages/).

The complete built-in themes, with comments, are a good start: [default.toml](https://github.com/SecurityTrip/Birchpad/blob/main/crates/theme/src/themes/default.toml) and [dark.toml](https://github.com/SecurityTrip/Birchpad/blob/main/crates/theme/src/themes/dark.toml).
