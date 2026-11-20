---
title: Updates and the network
description: How Birchpad checks for and installs updates, the stable, beta and nightly channels, the signed manifest and the zero-network mode.
---

Birchpad checks for updates shortly after starting, then once a day and when you pick **Help → Check for Updates…**. It requests the signed manifest from the Birchpad update service and falls back to GitHub if that fails. Update checks send install statistics by default. Turn them off in **Settings → Preferences… → Updates** or set `updates.statistics = false`. See [Privacy](/en/privacy/).

## Modes

| `updates.mode` | What happens |
|---|---|
| `auto` (default) | A new version downloads in the background and installs on the next start. |
| `notify` | Birchpad announces a new version but downloads nothing. |
| `off` | Disables update checks and downloads. |

Copies installed through the per-user Windows EXE or the macOS PKG update automatically. Install new versions of the MSI, DMG and portable builds manually.

In the window that announces an update, **Update** downloads the new version, checks it, installs it and restarts Birchpad with your documents, with a progress bar in the window; a download in the background shows its progress in the status bar. Don't show again turns update checks off. **Help → Set Updater Proxy…** (`updates.proxy`) sets a proxy for updates; by default Birchpad uses `HTTPS_PROXY` or `ALL_PROXY`, or the system's on Windows.

## Channels

| `updates.channel` | What arrives |
|---|---|
| `stable` (default) | Releases. |
| `beta` | Betas, release candidates and releases. |
| `nightly` | Everything, including nightly builds of the next version's branch when it changed. |

## Security

Birchpad reads an update manifest signed with the project's key (ed25519) and refuses any other. The manifest is protected against rollback, freezing and downgrades. `updates.url` takes the manifest from an internal mirror, but it must still be signed.

Each release comes with SHA-256 checksums, an SBOM and GitHub build provenance; see [Installing](/en/docs/install/).

## For administrators

The `UpdateMode`, `UpdateStatistics`, `UpdateChannel` and `UpdateUrl` policies set the same so that users cannot change it. The MSI does not update itself; the administrator updates it. See [For administrators](/en/docs/admin/).
