---
title: Command line
description: Birchpad's Notepad++-compatible command-line options and the single running instance.
---

```text
birchpad [-n<line>] [-c<column>] [-p<position>] [-l<language>] [-ro] [-multiInst]
         [-nosession] [-openSession] [--] [FILE]...
```

| Option | Meaning |
|---|---|
| `-n<line>` | Go to a line (from 1). |
| `-c<column>` | Go to a column (from 1). |
| `-p<position>` | Go to a byte offset (from 0); wins over `-n` and `-c`. |
| `-l<language>` | Highlighting language: `-lcpp`, `-lpython`, `-lnormal`. Notepad++'s names and [Birchpad's ids](/en/docs/languages/) both work. |
| `-ro` | Open the files read-only. |
| `-multiInst` | Start a separate instance instead of handing the files to a running one. |
| `-nosession` | Neither restore nor save the [session](/en/docs/sessions/). |
| `-openSession` | The files are sessions (Birchpad's, or Notepad++'s `session.xml`). |
| `--` | Everything after is a file name, even if it starts with `-`. |

Options ignore case. A folder instead of a file opens as a [workspace](/en/docs/panels/).

## One instance

When Birchpad is already running, a second launch hands its files to it, where they open as tabs, and exits. `-multiInst` opens a window of its own, and `instances.mode` in the [settings](/en/docs/settings/#instances) makes that the default.

## Notepad++ compatibility

Notepad++'s other options (`-x`, `-y`, `-notabbar`, `-systemtray`, `-alwaysOnTop`, `-loadingTime`, `-quickPrint`, `-monitor`, `-settingsDir=`, `-titleAdd=`, `-udl=`, `-pluginMessage=` and the rest) are accepted and ignored. An unknown option gives a warning but does not stop the start. So file associations, shortcuts and scripts written for Notepad++ keep working once the program path in them is changed.

## Examples

```text
birchpad -n120 -c5 src\main.rs
birchpad -lpython -ro script.txt
birchpad -openSession "%APPDATA%\Notepad++\session.xml"
```
