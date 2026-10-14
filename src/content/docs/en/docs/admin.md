---
title: For administrators
description: Deploying Birchpad in an organization with the MSI, defaults for all users, and policies users cannot change.
---

## MSI

`birchpad-<version>-windows-x64.msi` installs Birchpad for all users into `Program Files\Birchpad`. This copy does not update itself: the administrator rolls out new versions, for example with Intune, SCCM or Group Policy. A silent install:

```text
msiexec /i birchpad-0.2.0-windows-x64.msi /qn
```

“Edit with Birchpad” in the Windows Explorer’s context menu is a feature of its own, `ExplorerMenu`. To install Birchpad without it:

```text
msiexec /i birchpad-0.2.0-windows-x64.msi /qn ADDLOCAL=Main
```

The MSI keeps a fixed `UpgradeCode`, so a new version installs over the old one.

## Defaults for all users

A `defaults.toml` file, in the same format as [`settings.toml`](/en/docs/settings/), sets the machine's defaults. Users can override them in their own settings.

| System | Path |
|---|---|
| Windows | `%ProgramData%\Birchpad\defaults.toml` |
| macOS | `/Library/Application Support/Birchpad/defaults.toml` |
| Linux | `/etc/birchpad/defaults.toml` |

## Policies

Policies override everything else. **Settings → Preferences…** shows them, locked.

On Windows, policies are read from the registry keys that Group Policy and Intune write: `HKCU\Software\Policies\Birchpad`, overridden by `HKLM\Software\Policies\Birchpad`. On macOS and Linux they come from a file only the administrator can write: `/Library/Application Support/Birchpad/policies.toml` and `/etc/birchpad/policies.toml` (keys as in `settings.toml`).

| Registry value | Type | Settings key | What it does |
|---|---|---|---|
| `UpdateMode` | `REG_SZ` | `updates.mode` | `off`, `notify` or `auto`. `off` guarantees no network requests. |
| `UpdateChannel` | `REG_SZ` | `updates.channel` | `stable`, `beta` or `nightly`. |
| `UpdateUrl` | `REG_SZ` | `updates.url` | The update manifest on an internal mirror; its signature is still checked. |
| `BackupUnsaved` | `REG_DWORD` | `session.backup-unsaved` | `0`: keep no document contents in backup copies. |
| `PluginInstall` | `REG_SZ` | `plugins.install` | `allow`, `allowlist` or `deny`: which plugins load and can be installed. |
| `AllowedPlugins` | `REG_MULTI_SZ` | `plugins.allowed` | Ids of the plugins allowed with `allowlist`. |
| `UserScripts` | `REG_DWORD` | `plugins.scripts` | `0`: turn user scripts off. |
| `OnlineFeatures` | `REG_DWORD` | `network.online-features` | `0`: forbid online features to come (AI assistance, downloading language servers, the plugin catalog). |
| `CrashReports` | `REG_DWORD` | `diagnostics.crash-reports` | Crash reports; Birchpad sends none today. |

On Windows:

```text
reg add HKLM\Software\Policies\Birchpad /v UpdateMode /t REG_SZ /d off /f
```

A `policies.toml`:

```toml
[updates]
mode = "off"

[session]
backup-unsaved = false
```

A portable copy obeys the policies of the machine it runs on too. ADMX/ADML templates are in the works.
