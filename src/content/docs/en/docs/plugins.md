---
title: Plugins and scripts
description: Birchpad's built-in plugins (JSON Viewer, XML Tools, Hex Editor, Compare, Spell Checker), installing WebAssembly plugins from the catalog or a file, Rhai scripts and plugin API 0.2.
---

The **Plugins** menu holds Birchpad's versions of popular Notepad++ plugins, the plugins you installed and your scripts.

Notepad++ plugins are Windows DLLs, and Birchpad does not load them. Birchpad plugins are WebAssembly components: they run on every system, in a sandbox.

## Built-in plugins

### JSON Viewer

**Format JSON** lays values out on lines with the editor's indentation, **Compress JSON** removes spaces and line breaks, **Sort JSON Keys** formats with every object's keys in order, and **Validate JSON** finds an error and puts the caret on it. Each works on the selection or the whole document; numbers and strings stay as written.

**Show JSON Viewer** opens the document's JSON as a tree beside it. A click on a node selects its value in the text, **Find JSON Path** (`$.store.book[0].title`) finds one by its path, and **Copy Value**, **Copy Key** and **Copy Path** copy the chosen one (with the panel closed, the one at the caret).

### XML Tools

- **Pretty Print XML**, **Linearize XML** and **Check XML Syntax**, as for JSON.
- **Evaluate XPath Expression…** lists the nodes an expression selects.
- **Validate Now** checks the document against its DTD or XML Schema (the one it names, or one you choose) and goes to the first problem.
- **Escape Selected Text** and **Unescape Selected Text**.
- **Tag Auto-Close** inserts the closing tag as you type an opening one.

### Hex Editor

**View in HEX** shows the document's bytes in place of its text and edits them there: two digits a byte, over the caret or inserted (<kbd>Insert</kbd>), characters in the text column, the caret shared with the text. **Find in HEX** finds bytes, or text in quotes. The bytes in a row, their groups and capitals are in **Settings → Preferences… → Hex Editor**.

**Hex Dump in New Document** opens the bytes 16 to a line in a document of their own; once edited, **Apply Hex to Document** puts them back as one undo step.

### Compare

It works as ComparePlus: **Compare** puts the active document beside the document of the other view or the previous tab. Blank rows keep the lines both documents have side by side, what differs within a changed line is marked too, and the differences are marked along the scrollbar. A moment after either document changes, they are compared again.

- **Diff since Last Save**, **Compare to Clipboard** and **Diff to Git HEAD** compare the document with its file, the clipboard or Git's last commit.
- **Next Difference** and **Previous Difference** move between them, **Clear Results** removes the marks.
- **Ignore Spaces** and **Ignore Case**; **Settings → Preferences… → Compare** turns each feature on or off.
- The theme sets the colors: `compare-added`, `compare-removed`, `compare-changed`.

### Spell Checker

It works as DSpellCheck does in Notepad++:

- **Spell Check Document Automatically** underlines misspelled words;
- **Find Next Misspelling** and **Find Previous Misspelling** move between them;
- suggestions show in the completion list;
- **Add Word to Dictionary** and **Dictionary Language**.

US English works out of the box, with a dictionary made from SCOWL that ships with Birchpad. For other languages use **Download Languages…**, or put Hunspell `.aff` and `.dic` files in the `dictionaries` folder next to the settings (**Open Dictionaries Folder**), from the [LibreOffice dictionaries repository](https://github.com/LibreOffice/dictionaries) for example.

**Settings → Preferences… → Spell Checker** checks several languages together, chooses which words are left alone (with digits, in capitals, with a capital inside or at the start, with underscores, single letters, addresses) and what of code is checked: comments, strings, both, or all.

## Installing plugins

**Plugins → Plugins Admin…** lists the installed plugins and those of Birchpad's catalog:

- **Refresh List** reads the catalog, to install new plugins and update installed ones. Every download is checked against the catalog's SHA-256.
- **Install…** takes a plugin's `plugin.toml` and copies its folder into `plugins/<id>` next to the settings. **Settings → Import → Import plugin(s)…** installs several at once. Installing the same plugin again updates it and keeps its settings.
- **Allow Files** lets a plugin that asks for it read, write and open files.
- **Remove** removes a plugin with its settings and permission, **Enable or Disable** keeps it installed but not loaded, and **Reload Plugins** loads them again without restarting Birchpad.

Each plugin has a submenu of its commands in the **Plugins** menu, and some add items to the text's context menu. Their commands can be given keys (**Settings → Shortcut Mapper… → Plugin Commands**) and recorded in macros. Plugins' settings are in **Settings → Preferences… → Plugins**.

The catalog and dictionaries download only while online features are on (`network.online-features`, the `OnlineFeatures` policy).

:::note[Security]
Plugins and scripts work with the open document: they read and edit its text and selections, run Birchpad's commands, show messages and their panel. A plugin uses files only once you allow it in Plugins Admin; none can use the network. A call that runs longer than a few seconds or takes more than 256 MiB is stopped.
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

Command ids are those of `keymap.toml`, such as `edit.select-all`. A script stops after 50 million operations.

### Script commands

A script may declare commands, one comment line each: `// command: <function> <title>`. It then shows in **Plugins → Scripts** as a submenu: **Run** runs it from the top, and each command runs it and then calls its function. They can be given keys too.

```rust title="case.rhai"
// command: upper Upper Case
// command: lower Lower Case
fn upper() { insert(selected_text().to_upper()); }
fn lower() { insert(selected_text().to_lower()); }
```

Rhai's functions do not see the script's variables: put what they share in functions.

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
api = "0.2"                  # the plugin API it is built for
entry = "plugin.wasm"        # the default
events = ["saved"]           # what on-event and on-message hear
permissions = ["files"]      # asks the user to let it use files

[[settings]]                 # shown in Settings → Preferences… → Plugins
key = "count-numbers"
title = "Count numbers as words"
kind = "bool"                # bool, number or text
default = "true"
```

`events`: `opened`, `saved`, `closed`, `activated`; `changed` (the text changed: typing, a command, an undo) and `selection-changed` (the caret or the selection moved), each sent once the change is done; and `message`, for the command line's `-pluginMessage`.

The component implements the `plugin` world of [`crates/plugin/wit/birchpad.wit`](https://github.com/SecurityTrip/Birchpad/blob/main/crates/plugin/wit/birchpad.wit):

| Export | Called |
|---|---|
| `commands()` | once when the plugin loads: its menu items, `{ id, title, context-menu }`; those with `context-menu` are in the text's context menu too |
| `run(command)` | when one is chosen (or bound to a key, or played in a macro) |
| `on-event(event)` | for the events `plugin.toml` lists, with the document concerned |
| `on-panel-click(line)` | when a line of the plugin's panel is clicked |
| `on-control(id, value)` | when a control of its panel is used |
| `on-message(message)` | with `-pluginMessage`, if `events` lists `message` |
| `run-task(task, input)` | on another thread, for a task the plugin started; returns its result |
| `on-task-done(task, outcome)` | with what the task returned, on the active document |

Through the `host` interface a plugin reads and edits the document (positions are byte offsets into UTF-8 text), sets the selections, runs Birchpad's commands by id with JSON arguments, shows messages and fills its panel with lines (`show-panel`) or controls (`show-controls`: labels, buttons, text fields, check boxes, separators). Everything a call does to the document is one undo step; a call that fails changes nothing.

- **Settings**: `setting(key)` and `set-setting(key, value)` keep text between runs, in `plugins/<id>.settings.toml`.
- **Files**: `read-file`, `write-file` and `open-file` take absolute paths, and work only with `permissions = ["files"]` once the user chose **Allow Files**.
- **Background work**: `start-task(task, input)` runs `run-task` away from the window; its result comes back through `on-task-done`. A task may run twelve times longer than a call.

Plugins built for API 0.1 must be rebuilt against the new `birchpad.wit`, where what 0.1 had is unchanged.

### In Rust

With [`wit-bindgen`](https://crates.io/crates/wit-bindgen):

```rust
wit_bindgen::generate!({ path: "wit", world: "plugin" });

use birchpad::plugin::host;

struct WordCount;

impl Guest for WordCount {
    fn commands() -> Vec<Command> {
        vec![Command {
            id: "count".into(),
            title: "Count Words".into(),
            context_menu: true,
        }]
    }

    fn run(_command: String) -> Result<(), String> {
        let words = host::text().split_whitespace().count();
        host::message(&format!("{words} words"));
        Ok(())
    }

    fn on_event(_event: Event) {}
    fn on_panel_click(_line: u32) {}
    fn on_control(_id: String, _value: String) {}
    fn on_message(_message: String) {}
    fn run_task(_task: String, _input: String) -> Result<String, String> {
        Err("no tasks".into())
    }
    fn on_task_done(_task: String, _outcome: Result<String, String>) {}
}

export!(WordCount);
```

Build it for `wasm32-unknown-unknown` as a `cdylib`, and make the component with [`wasm-tools`](https://crates.io/crates/wasm-tools):

```sh
cargo build --release --target wasm32-unknown-unknown
wasm-tools component new target/wasm32-unknown-unknown/release/word_count.wasm -o plugin.wasm
```

A plugin that calls every function of the API is in the repository: [`crates/plugin/tests/fixtures/probe`](https://github.com/SecurityTrip/Birchpad/tree/main/crates/plugin/tests/fixtures/probe). To have a plugin listed in the catalog, open a pull request that adds it to [`packaging/catalog/catalog.json`](https://github.com/SecurityTrip/Birchpad/blob/main/packaging/catalog/catalog.json) with its ZIP's address, size and SHA-256. More in the [guide to plugins and scripts](https://github.com/SecurityTrip/Birchpad/blob/main/docs/plugins.md).
