---
title: Settings
description: Where Birchpad keeps its settings and data, every settings.toml key with its default, and the order in which settings layers apply.
---

Settings live in a text file, `settings.toml`. **Settings → Preferences…** edits the same file: each change applies at once and is written back, keeping your comments. The file only needs what differs from the defaults:

```toml
[editor]
tab-width = 2
insert-spaces = true
edge = "line"
edge-columns = [80, 100]

[files]
ansi-encoding = "windows-1251"
```

## Where files live

| | Windows | macOS | Linux |
|---|---|---|---|
| Settings | `%APPDATA%\Birchpad\` | `~/Library/Application Support/Birchpad/` | `$XDG_CONFIG_HOME/birchpad/` (`~/.config/birchpad/`) |
| Data | `%LOCALAPPDATA%\Birchpad\` | `~/Library/Application Support/Birchpad/` | `$XDG_DATA_HOME/birchpad/` (`~/.local/share/birchpad/`) |

The settings folder holds `settings.toml`, `keymap.toml` (shortcuts), `macros.toml` (macros), `run.toml` (Run menu commands), `context-menu.toml` (the text's context menu), and the `themes`, `userDefineLangs`, `autoCompletion`, `plugins`, `scripts` and `dictionaries` folders. The data folder holds `state.toml` (theme, word wrap, panels, recent files), `session.toml` and the `backup` folder.

In [portable mode](/en/docs/install/) all of this is in the `data` folder next to the program.

## Settings layers

Values are taken in order, each layer overriding the one before:

1. Birchpad's defaults (the tables below).
2. Machine defaults: `defaults.toml` from the administrator.
3. Your `settings.toml`.
4. Administrator policies, which cannot be changed; Preferences shows them locked.

See [For administrators](/en/docs/admin/).

## Every key

### `[appearance]`

| Key | Default | Meaning |
|---|---|---|
| `theme` | `"Default"` | Theme at startup: `Default`, `Dark`, or a file name from the `themes` folder without its extension. |
| `language` | `"auto"` | Interface language: `en`, `ru`, `de`, or `auto` (the system's). |
| `native-lang` | `""` | A Notepad++ translation file (such as `localization/german.xml` of a Notepad++ folder) whose menu and command names come before Birchpad's. |
| `interface` | `"theme"` | Colors of menus, tabs, panels and dialogs: `theme` (the theme's), `light`, `dark` or `system`. |
| `title-file-name-only` | `false` | Only the file name in the title bar, without the path. |

### `[editor]`

| Key | Default | Meaning |
|---|---|---|
| `tab-width` | `4` | Tab width. |
| `insert-spaces` | `false` | Insert spaces instead of tabs. |
| `word-wrap` | `false` | Word wrap. |
| `line-numbers` | `true` | Line number margin. |
| `bookmark-margin` | `true` | Bookmark margin. |
| `fold-margin` | `true` | Folding margin. |
| `change-history` | `"margin"` | Change history in the margin: `margin` or `off`. |
| `auto-indent` | `"advanced"` | Indentation of a new line: `off`, `basic` (as the line above), `advanced` (one more level after an opening bracket). |
| `show-whitespace` | `false` | Show spaces and tabs. |
| `show-eol` | `false` | Show line endings. |
| `indent-guides` | `true` | Indentation guides. |
| `wrap-symbol` | `false` | Wrap symbol. |
| `current-line` | `"background"` | Current line: `off`, `background`, `frame`. |
| `current-line-frame-width` | `1` | Current line frame width, 1–6 pixels. |
| `edge` | `"off"` | Vertical edge: `off`, `line`, `background`. |
| `edge-columns` | `[80]` | Edge columns. |

### `[completion]`

| Key | Default | Meaning |
|---|---|---|
| `auto-close` | `"()[]{}\"\"''"` | Pairs closed as you type. An empty string turns it off. |
| `words` | `true` | The document's words while typing. |
| `min-chars` | `1` | From how many characters the document's words show. |
| `api` | `true` | The language's keywords and functions from its API file. |
| `api-min-chars` | `1` | From how many characters they show. |
| `ignore-case` | `true` | Match without regard to case. |
| `ignore-numbers` | `true` | Do not offer numbers. |
| `close-tags` | `false` | Insert an HTML or XML closing tag after the `>` of its opening tag. |
| `call-tips` | `true` | A function's parameters after its opening bracket. |

### `[highlighting]`

| Key | Default | Meaning |
|---|---|---|
| `smart.enabled` | `true` | Highlight the selected word in all visible text. |
| `smart.match-case` | `false` | …matching case. |
| `smart.whole-word` | `true` | …whole words only. |
| `smart.use-find-options` | `false` | Take match case and whole word from the find panel. |
| `token-style.match-case` | `false` | Style All Occurrences of Token matching case. |
| `token-style.whole-word` | `true` | …whole words only. |

### `[files]`

| Key | Default | Meaning |
|---|---|---|
| `recent-limit` | `10` | How many files **File → Recent Files** remembers. |
| `ansi-encoding` | system | The ANSI encoding, e.g. `"windows-1251"`. Default: the system code page on Windows, Windows-1252 elsewhere. |
| `large-file-limit-mb` | `20` | Larger files open without highlighting, folding and smart highlighting. |
| `change-detection` | `"all"` | Watch for changes by other programs: `all`, `current`, `off`. |
| `reload-silently` | `false` | Reload a changed file without asking. |
| `reload-scrolls-to-end` | `false` | Go to the end after reloading. |
| `backup-on-save` | `"none"` | A copy of the file before each save: `none`, `simple` (`.bak` next to it) or `verbose` (one per save, with the time, in `backup-folder`). |
| `backup-folder` | `""` | The folder for `verbose`; empty: `nppBackup` next to the file. |
| `default-directory` | `"follow"` | Where Open and Save As start: `follow` (the document's folder), `remember` (the last one), `custom`. |
| `default-directory-path` | `""` | The folder for `custom`. |
| `offer-default-app` | `true` | At startup, offer to make Birchpad the default editor. |

### `[session]`

| Key | Default | Meaning |
|---|---|---|
| `remember` | `true` | Reopen the documents of the last run. |
| `backup-unsaved` | `true` | Keep unsaved changes in backup copies. |
| `backup-interval-seconds` | `7` | Backup interval. |
| `remember-inaccessible` | `false` | Keep files that cannot be read now (a network drive away) in the session. |

See [Sessions and backup](/en/docs/sessions/).

### `[tabs]`

| Key | Default | Meaning |
|---|---|---|
| `vertical` | `false` | Tabs in a column on the left of each view. |
| `multi-line` | `false` | Tabs on several rows instead of scrolling. |
| `reduce` | `false` | Smaller tabs. |
| `lock` | `false` | Tabs cannot be dragged. |
| `close-button` | `true` | A close button on every tab. |
| `double-click-close` | `false` | A double click closes a tab. |
| `peeker` | `true` | Hovering over a tab shows the start of its document. |
| `switcher` | `true` | The document switcher on <kbd>Ctrl</kbd>+<kbd>Tab</kbd>; `false`: the next tab. |
| `switcher-mru` | `true` | The switcher lists the most recently used documents first. |
| `exit-on-last-close` | `false` | Closing the last tab quits Birchpad. |

### `[toolbar]`

| Key | Default | Meaning |
|---|---|---|
| `show` | `true` | Show the toolbar. |
| `size` | `"small"` | Icons: `small` or `large`. |
| `buttons` | Notepad++'s | The buttons in order: command ids, and `"|"` for a separator. |

### `[instances]`

| Key | Default | Meaning |
|---|---|---|
| `mode` | `"single"` | `single`: a second launch hands its files to the running Birchpad; `session`: the same, but a session given with `-openSession` opens in a Birchpad of its own; `multi`: every launch is a Birchpad of its own. |

### `[date]`

| Key | Default | Meaning |
|---|---|---|
| `custom-format` | `"yyyy-MM-dd HH:mm:ss"` | The customized format of **Insert → Date Time**, in Notepad++'s letters. |
| `reverse` | `false` | The date before the time in the short and long formats. |

### `[search-engine]`

| Key | Default | Meaning |
|---|---|---|
| `engine` | `"duckduckgo"` | Where **Search on Internet** goes: `duckduckgo`, `google`, `bing`, `yahoo`, `stack-overflow`, `custom`. |
| `custom-url` | `""` | The address for `custom`, with `$(CURRENT_WORD)` for the searched text. |

### `[links]`

| Key | Default | Meaning |
|---|---|---|
| `enabled` | `true` | Links open with <kbd>Ctrl</kbd>+click. |
| `double-click` | `false` | With a double click too, as in Notepad++. |
| `underline` | `true` | Underline links. |
| `schemes` | `"svn:// git:// ssh:// sftp://"` | Schemes of your own besides http, https, ftp, ftps, file and mailto. |

### `[delimiters]`

| Key | Default | Meaning |
|---|---|---|
| `open` | `"\""` | The opening delimiter for <kbd>Ctrl</kbd>+double click. |
| `close` | `"\""` | The closing delimiter. |
| `multi-line` | `false` | The delimiters may be on other lines. |

### `[new-document]`

| Key | Default | Meaning |
|---|---|---|
| `encoding` | `"utf-8"` | Encoding of new documents: `utf-8`, `utf-8-bom`, `utf-16le-bom`, `ansi`… |
| `line-ending` | `"system"` | `crlf`, `lf`, `cr` or `system`. |
| `language` | `"text"` | Language of new documents. |

### `[languages.<language>]`

`tab-width` and `insert-spaces` of one language over `[editor]`'s, e.g. `[languages.python]`.

### `[cloud]`

| Key | Default | Meaning |
|---|---|---|
| `folder` | `""` | The folder whose `settings.toml`, `keymap.toml`, themes and the rest Birchpad uses from the next start. Only the local settings file can set it. |

### `[preview]`

| Key | Default | Meaning |
|---|---|---|
| `plantuml` | `"plantuml"` | What draws PlantUML: the `plantuml` command (or a path to it), or a path to `plantuml.jar`. With `plantuml`, the PlantUML Birchpad installed is used too. |

See [Markdown and PlantUML preview](/en/docs/preview/).

### `[print]`

| Key | Default | Meaning |
|---|---|---|
| `paper` | `"a4"` | `a3`, `a4`, `a5`, `letter`, `legal`. |
| `landscape` | `false` | Landscape orientation. |
| `margin-top`, `margin-bottom`, `margin-left`, `margin-right` | `15` | Margins in millimeters. |
| `font-size` | `10` | Text size in points. |
| `line-numbers` | `true` | Print line numbers. |
| `colors` | `"wysiwyg"` | `wysiwyg` (as on screen), `invert`, `black-on-white`, `no-background`. |
| `header-left`, `header-center`, `header-right` | `""` | The header's parts, with Notepad++'s variables. |
| `footer-left`, `footer-center`, `footer-right` | `""` | The footer's parts. |

See [Printing](/en/docs/macros-run-tools/#printing).

### `[updates]`

| Key | Default | Meaning |
|---|---|---|
| `mode` | `"auto"` | `off`: no network requests at all; `notify`: only announce; `auto`: download and install on restart. |
| `channel` | `"stable"` | `stable`, `beta` or `nightly`. |
| `url` | — | Another address for the signed update manifest, such as an internal mirror. |
| `proxy` | `\"\"` | The proxy for updates: `http://host:port`, `socks5://host:port` or `host:port`. Empty: `HTTPS_PROXY`, `ALL_PROXY`, or the system's on Windows. |

See [Updates and the network](/en/docs/updates/).

### `[plugins]`

| Key | Default | Meaning |
|---|---|---|
| `install` | `"allow"` | Which plugins load: `allow` all, `allowlist` only those in `allowed`, `deny` none. |
| `allowed` | `[]` | Ids of the plugins allowed with `allowlist`. |
| `scripts` | `true` | Allow the scripts of the `scripts` folder. |

See [Plugins and scripts](/en/docs/plugins/).

### Reserved

`network.online-features` and `diagnostics.crash-reports` (default `true` and `false`) are read already but belong to features still to come: plugins, online features and crash reports.

## Keyboard shortcuts

**Settings → Shortcut Mapper…** adds, removes and resets the shortcuts of any command and writes them to `keymap.toml`, keeping its comments. The file adds to the [default shortcuts](/en/docs/shortcuts/):

```toml
[[binding]]
keys = "secondary-shift-d"
command = "edit.duplicate-line"
context = "Editor"

# Remove a default shortcut
[[binding]]
keys = "secondary-d"
context = "Editor"
unbind = true
```

`secondary` is <kbd>Ctrl</kbd> on Windows and Linux and <kbd>Cmd</kbd> on macOS. Optional fields: `args` for the command's arguments, `context` for where the shortcut applies (such as `"Editor"`), `platforms` for a list of `"windows"`, `"linux"`, `"macos"`.
