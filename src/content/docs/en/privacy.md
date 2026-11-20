---
title: Privacy
description: Birchpad collects no personal data. Which network requests it makes and how to turn them off.
---

Documents, sessions and backups stay on your computer. Birchpad has no accounts or crash reporting. Update checks send install statistics by default. You can turn them off in Preferences.

## Network requests

- **Updates.** Birchpad requests the signed manifest from `https://api.birchpad.ru/v1/updates/check` and falls back to GitHub if that fails. Setting `updates.url` directs checks to that mirror without sending install statistics. With automatic updates enabled, copies installed through the Windows EXE or macOS PKG download the new version from the URL in the manifest.
- **PlantUML, plugins and dictionaries.** Downloads start when you request them. Set `network.online-features = false` to disable them. See [Preview](/en/docs/preview/) and [Plugins and scripts](/en/docs/plugins/).

Language servers are programs you configure. Birchpad starts them on your computer and sends them the text of documents in the corresponding language. Git integration uses your installed `git` to read the local repository.

GitHub receives the network address and time of requests for files it serves. These requests are covered by [GitHub's privacy statement](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement).

## Install statistics

The request includes a random install ID, Birchpad version, update channel, platform, how PlantUML was installed and the version of the Birchpad component if present. Birchpad creates the ID on the first check with statistics enabled and stores it in `state.toml`. The ID is independent of the computer and user.

The service keeps one record per ID with the first and current versions, channel, platform, PlantUML details and the times of the first and most recent checks. It keeps no IP addresses, User-Agent headers or history of checks.

## Turning it off

- `updates.statistics = false` turns off statistics and deletes the ID from `state.toml`. Update checks send an empty body, `{}`.
- `updates.mode = "off"` turns off update checks and downloads. Set `network.online-features = false` as well to disable downloads of PlantUML, plugins and dictionaries from the catalog.
- `updates.mode = "notify"` announces new versions and leaves downloads to you.
- Administrators can set the `UpdateStatistics`, `UpdateMode` and `OnlineFeatures` policies. See [For administrators](/en/docs/admin/).

Links you choose to open go to your browser.

## This website

birchpad.ru is a static site on GitHub Pages with no analytics and no cookies. The download buttons ask GitHub's API for the latest version number.

The original policy is [PRIVACY.md](https://github.com/SecurityTrip/Birchpad/blob/main/PRIVACY.md) in the project's repository.
