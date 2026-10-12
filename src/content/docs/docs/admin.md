---
title: Для администраторов
description: Установка Birchpad на компьютеры организации через MSI, умолчания для всех пользователей и политики, которые пользователь не может изменить.
---

## MSI

`birchpad-<версия>-windows-x64.msi` ставит Birchpad для всех пользователей в `Program Files\Birchpad`. Такая копия сама не обновляется — новые версии раздаёт администратор, например через Intune, SCCM или групповую политику. Тихая установка:

```text
msiexec /i birchpad-0.1.5-windows-x64.msi /qn
```

У MSI постоянный `UpgradeCode`, поэтому новая версия ставится поверх старой.

## Умолчания для всех пользователей

Файл `defaults.toml` того же формата, что и [`settings.toml`](/docs/settings/), задаёт умолчания компьютера. Пользователь может переопределить их в своих настройках.

| Система | Путь |
|---|---|
| Windows | `%ProgramData%\Birchpad\defaults.toml` |
| macOS | `/Library/Application Support/Birchpad/defaults.toml` |
| Linux | `/etc/birchpad/defaults.toml` |

## Политики

Политики перекрывают всё остальное. В окне **Опции → Настройки…** такие параметры видны, но заблокированы.

На Windows политики читаются из реестра — туда их записывают групповая политика и Intune: `HKCU\Software\Policies\Birchpad`, а поверх — `HKLM\Software\Policies\Birchpad`. На macOS и Linux — из файла, доступного для записи только администратору: `/Library/Application Support/Birchpad/policies.toml` и `/etc/birchpad/policies.toml` (ключи — как в `settings.toml`).

| Значение реестра | Тип | Ключ настроек | Что делает |
|---|---|---|---|
| `UpdateMode` | `REG_SZ` | `updates.mode` | `off`, `notify` или `auto`. `off` гарантирует отсутствие сетевых запросов. |
| `UpdateChannel` | `REG_SZ` | `updates.channel` | `stable`, `beta` или `nightly`. |
| `UpdateUrl` | `REG_SZ` | `updates.url` | Адрес манифеста обновлений на внутреннем зеркале; подпись проверяется всё равно. |
| `BackupUnsaved` | `REG_DWORD` | `session.backup-unsaved` | `0` — не хранить содержимое документов в резервных копиях. |
| `PluginInstall` | `REG_SZ` | `plugins.install` | `allow`, `allowlist` или `deny`: какие плагины загружаются и устанавливаются. |
| `AllowedPlugins` | `REG_MULTI_SZ` | `plugins.allowed` | Идентификаторы разрешённых плагинов при `allowlist`. |
| `UserScripts` | `REG_DWORD` | `plugins.scripts` | `0` — запретить пользовательские скрипты. |
| `OnlineFeatures` | `REG_DWORD` | `network.online-features` | `0` — запретить будущие сетевые функции (ИИ-помощник, загрузка языковых серверов, каталог плагинов). |
| `CrashReports` | `REG_DWORD` | `diagnostics.crash-reports` | Отчёты о сбоях; сейчас Birchpad их не отправляет. |

Пример для Windows:

```text
reg add HKLM\Software\Policies\Birchpad /v UpdateMode /t REG_SZ /d off /f
```

Пример `policies.toml`:

```toml
[updates]
mode = "off"

[session]
backup-unsaved = false
```

Портативная копия тоже подчиняется политикам компьютера, на котором запущена. Шаблоны ADMX/ADML готовятся.
