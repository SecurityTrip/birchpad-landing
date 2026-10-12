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

The settings folder holds `settings.toml`, `keymap.toml` (shortcuts), `macros.toml` (macros), `run.toml` (Run menu commands), and the `themes`, `userDefineLangs`, `autoCompletion`, `plugins`, `scripts` and `dictionaries` folders. The data folder holds `state.toml` (theme, word wrap, panels, recent files), `session.toml` and the `backup` folder.

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
| `language` | `"auto"` | Interface language: `en`, `ru`, or `auto` (the system's). |

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
| `words` | `true` | List of the document's words and keywords while typing. |
| `min-chars` | `1` | From how many characters the list shows. |
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

### `[session]`

| Key | Default | Meaning |
|---|---|---|
| `remember` | `true` | Reopen the documents of the last run. |
| `backup-unsaved` | `true` | Keep unsaved changes in backup copies. |
| `backup-interval-seconds` | `7` | Backup interval. |

See [Sessions and backup](/en/docs/sessions/).

### `[updates]`

| Key | Default | Meaning |
|---|---|---|
| `mode` | `"auto"` | `off`: no network requests at all; `notify`: only announce; `auto`: download and install on restart. |
| `channel` | `"stable"` | `stable`, `beta` or `nightly`. |
| `url` | — | Another address for the signed update manifest, such as an internal mirror. |

See [Updates and the network](/en/docs/updates/).

### `[plugins]`

| Key | Default | Meaning |
|---|---|---|
| `install` | `"allow"` | Which plugins load: `allow` all, `allowlist` only those in `allowed`, `deny` none. |
| `allowed` | `[]` | Ids of the plugins allowed with `allowlist`. |
| `scripts` | `true` | Allow the scripts of the `scripts` folder. |

See [Plugins and scripts](/en/docs/plugins/).

### Reserved

`network.online-features` and `diagnostics.crash-reports` (default `false`) are read already but belong to features still to come: plugins, online features and crash reports.

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
