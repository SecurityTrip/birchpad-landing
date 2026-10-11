---
title: Updates and the network
description: How Birchpad checks for and installs updates, the stable, beta and nightly channels, the signed manifest and the zero-network mode.
---

Birchpad uses the network only for updates: shortly after it starts, then once a day, and when you pick **Help → Check for Updates…**. Nothing else: no telemetry, no crash reports, no accounts. See [Privacy](/en/privacy/).

## Modes

| `updates.mode` | What happens |
|---|---|
| `auto` (default) | A new version downloads in the background and installs on the next start. |
| `notify` | Birchpad announces a new version but downloads nothing. |
| `off` | No network requests at all. |

Only Birchpad from the per-user installer (`…-setup.exe`) updates itself. Portable copies, the MSI and the macOS and Linux builds show where to download the new version.

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

The `UpdateMode`, `UpdateChannel` and `UpdateUrl` policies set the same so that users cannot change it. The MSI does not update itself; the administrator updates it. See [For administrators](/en/docs/admin/).
