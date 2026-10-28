---
title: Installing
description: Which Birchpad file to download for Windows, macOS and Linux, how portable mode works and how to verify a download.
---

Every file is on the [releases page](https://github.com/SecurityTrip/Birchpad/releases/latest). Birchpad is free and needs no account.

## Windows

| File | For |
|---|---|
| `birchpad-<version>-windows-x64-setup.exe` | Most people. Installs into your user profile without administrator rights and updates itself. |
| `birchpad-<version>-windows-arm64-setup.exe` | The same for ARM computers (Snapdragon and others). |
| `birchpad-<version>-windows-x64.msi` | Administrators: a per-machine install into `Program Files\Birchpad`, updated by the administrator. See [For administrators](/en/docs/admin/). |
| `birchpad-<version>-windows-x64.zip`, `…-arm64.zip` | Portable: unzip and run, even from a USB stick. |

:::caution[SmartScreen]
Windows builds are not signed with a certificate yet, so SmartScreen asks on the first start: choose **More info → Run anyway**. Signing through SignPath is ready and will be switched on once the project has a certificate. Until then, checksums and build provenance show that a file is genuine (see below).
:::

To uninstall, use **Windows Settings → Apps → Installed apps**. A portable copy is removed with its folder.

## macOS

`birchpad-<version>-macos.zip` holds `Birchpad.app` for macOS 10.15.7 or later, on Apple silicon and Intel. Unzip it and move the app to Applications.

The app is not notarized yet: open it the first time with **Control-click → Open** and confirm.

## Linux

`birchpad-<version>-linux-x64.zip` is a portable x64 build. To see Birchpad in the applications menu:

1. Put the `birchpad` executable in a folder on your `PATH`, such as `~/.local/bin`.
2. Copy `io.github.securitytrip.birchpad.desktop` to `~/.local/share/applications/`.
3. Copy `io.github.securitytrip.birchpad.png` to `~/.local/share/icons/hicolor/512x512/apps/`.

## Portable mode

When a file named `birchpad-portable.txt` is next to the executable (the Windows and Linux ZIPs come with it), Birchpad keeps its settings, session and backups in a `data` folder next to itself and writes nothing to your profile. The machine's administrator policies still apply.

## Verifying a download

Every release is built on GitHub's runners from the open source. Check that a file is what was built in either of two ways:

- with the checksums in the release's `birchpad-<version>-SHA256SUMS.txt`;
- with GitHub's build provenance (needs the [GitHub CLI](https://cli.github.com/)):

```sh
gh attestation verify birchpad-0.6.0-windows-x64-setup.exe --repo SecurityTrip/Birchpad
```

Every release also has an SBOM listing all dependencies in CycloneDX format (`…-sbom.cdx.json`).

## Nightly builds

Nightly builds of the next version are published as pre-releases. To get them as updates, set `updates.channel = "nightly"` — see [Updates and the network](/en/docs/updates/).
