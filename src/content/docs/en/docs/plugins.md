---
title: Plugins and scripts
description: Birchpad's built-in plugins (JSON Viewer, XML Tools, Hex Editor, Compare, Spell Checker), installing WebAssembly plugins, and Rhai scripts.
---

The **Plugins** menu holds Birchpad's own versions of popular Notepad++ plugins, the plugins you install and your scripts.

Notepad++ plugins are Windows DLLs, and Birchpad does not load them. Birchpad's plugins are WebAssembly components: they run on every system, in a sandbox.

## Built-in plugins

### JSON Viewer

**Format JSON** puts one value per line with the editor's indentation, **Compress JSON** takes the spaces and line breaks out, **Validate JSON** looks for an error. Each works on the selection or the whole document. Numbers and strings stay as written. On an error, the caret goes where it is and the message says what is wrong.

### XML Tools

**Pretty Print XML**, **Linearize XML** and **Check XML Syntax** — as for JSON.

### Hex Editor

**View in Hex** opens the document's bytes, in its encoding, as rows of 16 in a new document. Edit them and choose **Apply Hex to Document** to put them back into the document as one undo step.

### Compare

**Compare** compares the active document with the other view's, or with the tab before it, which it puts side by side. Lines added, removed and changed are colored across the line; **Next Difference** and **Previous Difference** go through them, **Clear Results** takes the colors off. Spaces and case can be ignored. Themes set the colors: `compare-added`, `compare-removed`, `compare-changed`.

### Spell Checker

It works like DSpellCheck in Notepad++:

- **Spell Check Document Automatically** underlines misspelled words — in code, only in comments and strings;
- **Find Next Misspelling** and **Find Previous Misspelling** go through them;
- **Suggestions** show in the completion list;
- **Add Word to Dictionary** and **Dictionary Language**.

Dictionaries are Hunspell's `.aff` and `.dic` files, from the `dictionaries` folder next to the settings (**Open Dictionaries Folder**) or the system's. Birchpad ships none: take them from LibreOffice, for example, or from the [LibreOffice dictionaries repository](https://github.com/LibreOffice/dictionaries).

## Installing plugins

**Plugins → Plugins Admin…** lists the installed plugins with their version, description and state:

- **Install…** — choose the plugin's `plugin.toml`; its folder is copied into `plugins/<id>` next to the settings. Installing the same plugin again updates it.
- **Remove** takes it out; **Turn Off** and **Turn On** keep it installed but not loaded.
- **Reload Plugins** loads the plugins again without restarting Birchpad.

Each plugin has a submenu of its commands in the **Plugins** menu. Plugin commands can be bound to keys and recorded in macros.

:::note[Security]
A plugin or a script works only on the open document: it reads and edits the text and the selections, runs Birchpad's commands, shows messages and its own panel. It cannot touch files or the network. A plugin that runs longer than a few seconds or takes more than 256 MiB of memory is stopped.
:::

Administrators can allow only some plugins or none with the `PluginInstall` and `AllowedPlugins` policies, and turn scripts off with `UserScripts`. See [For administrators](/en/docs/admin/).

## Rhai scripts

Save a `.rhai` file in the `scripts` folder next to the settings (**Plugins → Scripts → Open Scripts Folder**) and it appears in **Plugins → Scripts**. A script works on the active document, and all its edits are one undo step.

For example, `title-case.rhai` puts the selection in Title Case:

```rust title="title-case.rhai"
let words = selected_text().split(" ");
let out = [];
for word in words {
    if word.len() > 0 {
        out.push(word.sub_string(0, 1).to_upper() + word.sub_string(1).to_lower());
    }
}
insert(out.reduce(|sum, w| if sum == () { w } else { sum + " " + w }));
```

| Function | Does |
|---|---|
| `text()`, `set_text(s)` | the whole text |
| `length()` | its length in bytes |
| `text_range(start, end)`, `replace(start, end, s)` | a part of it, by byte offsets |
| `selected_text()`, `insert(s)` | the primary selection; typing over every selection |
| `selections()`, `set_selection(anchor, head)` | selections as `#{anchor, head}` maps |
| `path()`, `language()` | the document's file (or `()`) and its language |
| `run_command(id)`, `run_command(id, #{...})` | a command of Birchpad, once the script ends |
| `message(s)`, `print(s)` | a message |
| `show_panel(title, [lines])` | the scripts' panel |

Command ids are the ones in `keymap.toml`, such as `edit.select-all`. A script stops after 50 million operations.

## Your own plugin

A plugin is a folder:

```text
word-count/
├── plugin.toml
└── plugin.wasm
```

`plugin.toml`:

```toml
id = "word-count"            # lower-case letters, digits and dashes; names the folder
name = "Word Count"          # the submenu of the Plugins menu
version = "1.0.0"
description = "Counts the words of the document."
author = "Jane Doe"
api = "0.1"                  # the plugin API it is built for
entry = "plugin.wasm"        # the default
events = ["saved"]           # opened, saved, closed, activated: what on-event hears
```

The component implements the `plugin` world of [`crates/plugin/wit/birchpad.wit`](https://github.com/SecurityTrip/Birchpad/blob/main/crates/plugin/wit/birchpad.wit):

| Export | Called |
|---|---|
| `commands()` | once when the plugin loads: its menu items, `{ id, title }` |
| `run(command)` | when one of them is chosen (or bound to a key, or played in a macro) |
| `on-event(event)` | for the events `plugin.toml` lists |
| `on-panel-click(line)` | when a line of the plugin's panel is clicked |

Through the `host` interface it reads and edits the document (positions are byte offsets into UTF-8 text), sets the selections, runs Birchpad's commands by id with JSON arguments, shows messages and fills its panel. Everything a call does to the document is one undo step; a call that fails changes nothing.

### In Rust

With [`wit-bindgen`](https://crates.io/crates/wit-bindgen):

```rust
wit_bindgen::generate!({ path: "wit", world: "plugin" });

use birchpad::plugin::host;

struct WordCount;

impl Guest for WordCount {
    fn commands() -> Vec<Command> {
        vec![Command { id: "count".into(), title: "Count Words".into() }]
    }

    fn run(_command: String) -> Result<(), String> {
        let words = host::text().split_whitespace().count();
        host::message(&format!("{words} words"));
        Ok(())
    }

    fn on_event(_event: Event) {}

    fn on_panel_click(_line: u32) {}
}

export!(WordCount);
```

Build it for `wasm32-unknown-unknown` as a `cdylib`, and make the component with [`wasm-tools`](https://crates.io/crates/wasm-tools):

```sh
cargo build --release --target wasm32-unknown-unknown
wasm-tools component new target/wasm32-unknown-unknown/release/word_count.wasm -o plugin.wasm
```

A plugin that calls every API function is in the repository: [`crates/plugin/tests/fixtures/probe`](https://github.com/SecurityTrip/Birchpad/tree/main/crates/plugin/tests/fixtures/probe).
