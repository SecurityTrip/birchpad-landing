---
title: Sessions and backup
description: How Birchpad keeps open documents and unsaved changes between runs, Notepad++ sessions, and files changed by other programs.
---

By default Birchpad asks nothing when you quit and loses nothing. The next start opens the same documents, files and untitled "new 1" alike, with unsaved changes, carets, scroll positions, folds, bookmarks, languages and encodings.

## How it works

Every few seconds (7 by default) and on quitting, Birchpad writes copies of documents with unsaved text and a description of the session. A crash or a power cut loses at most the last interval. Files on disk are not touched until you save them.

| `settings.toml` key | Default | Meaning |
|---|---|---|
| `session.remember` | `true` | Reopen the documents of the last run. |
| `session.backup-unsaved` | `true` | Keep unsaved changes in backup copies; quitting does not ask. Needs `remember`. |
| `session.backup-interval-seconds` | `7` | How often to back up, in seconds. |

Without backups, quitting asks about each modified document (Save, Don't Save, Cancel), and untitled documents are left out of the session. The `-nosession` [command-line](/en/docs/command-line/) option neither restores nor saves the session. An administrator can forbid backups with the `BackupUnsaved` policy (see [For administrators](/en/docs/admin/)).

The session lives in the data folder (see [Settings](/en/docs/settings/#where-files-live)): `session.toml`, the previous one as `session.toml.bak`, and the copies in the `backup` folder. Only your account can read them.

## Session files

**File → Save Session…** writes the open files with their positions, bookmarks, folds and languages (no unsaved text). **File → Load Session…** and `-openSession` open such a file next to what is open.

They also read Notepad++'s `session.xml`: the files of both views, carets, bookmarks, folds, language, read-only flag, and unsaved text from Notepad++'s backup copies.

## Files changed by other programs

Birchpad watches open files (`files.change-detection`: `all`, `current` or `off`). A changed file without unsaved changes is reloaded, silently or after asking (`files.reload-silently`), keeping carets, bookmarks and folds on their lines. With unsaved changes, or when the file was deleted, Birchpad asks.

**View → Monitoring (tail -f)** reads only what is appended to the file, handy for logs.
