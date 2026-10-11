---
title: Настройки
description: Где Birchpad хранит настройки и данные, все ключи settings.toml с умолчаниями и порядок, в котором применяются слои настроек.
---

Настройки хранятся в текстовом файле `settings.toml`. Окно **Опции → Настройки…** правит тот же файл: каждое изменение применяется сразу и записывается, сохраняя ваши комментарии. В файле достаточно указать только то, что отличается от умолчаний:

```toml
[editor]
tab-width = 2
insert-spaces = true
edge = "line"
edge-columns = [80, 100]

[files]
ansi-encoding = "windows-1251"
```

## Где лежат файлы

| | Windows | macOS | Linux |
|---|---|---|---|
| Настройки | `%APPDATA%\Birchpad\` | `~/Library/Application Support/Birchpad/` | `$XDG_CONFIG_HOME/birchpad/` (`~/.config/birchpad/`) |
| Данные | `%LOCALAPPDATA%\Birchpad\` | `~/Library/Application Support/Birchpad/` | `$XDG_DATA_HOME/birchpad/` (`~/.local/share/birchpad/`) |

В папке настроек: `settings.toml`, `keymap.toml` (сочетания клавиш), `macros.toml` (макросы), `run.toml` (команды меню «Запуск»), папки `themes`, `userDefineLangs` и `autoCompletion`. В папке данных: `state.toml` (тема, перенос строк, панели, недавние файлы), `session.toml` и папка `backup`.

В [портативном режиме](/docs/install/) всё это лежит в папке `data` рядом с программой.

## Слои настроек

Значения берутся по порядку, каждый следующий слой перекрывает предыдущий:

1. Умолчания Birchpad (таблица ниже).
2. Умолчания компьютера — `defaults.toml` от администратора.
3. Ваш `settings.toml`.
4. Политики администратора — их изменить нельзя, в окне настроек они показаны заблокированными.

См. [Для администраторов](/docs/admin/).

## Все ключи

### `[appearance]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `theme` | `"Default"` | Тема при запуске: `Default`, `Dark` или имя файла из папки `themes` без расширения. |
| `language` | `"auto"` | Язык интерфейса: `en`, `ru` или `auto` (как в системе). |

### `[editor]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `tab-width` | `4` | Ширина табуляции. |
| `insert-spaces` | `false` | Вставлять пробелы вместо табуляции. |
| `word-wrap` | `false` | Перенос строк. |
| `line-numbers` | `true` | Поле номеров строк. |
| `bookmark-margin` | `true` | Поле закладок. |
| `fold-margin` | `true` | Поле сворачивания. |
| `change-history` | `"margin"` | История изменений на полях: `margin` или `off`. |
| `auto-indent` | `"advanced"` | Отступ новой строки: `off`, `basic` (как у строки выше), `advanced` (ещё уровень после открывающей скобки). |
| `show-whitespace` | `false` | Показывать пробелы и табуляцию. |
| `show-eol` | `false` | Показывать концы строк. |
| `indent-guides` | `true` | Направляющие отступов. |
| `wrap-symbol` | `false` | Значок переноса. |
| `current-line` | `"background"` | Выделение текущей строки: `off`, `background`, `frame`. |
| `current-line-frame-width` | `1` | Толщина рамки текущей строки, 1–6 пикселей. |
| `edge` | `"off"` | Вертикальная граница: `off`, `line`, `background`. |
| `edge-columns` | `[80]` | Колонки границы. |

### `[completion]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `auto-close` | `"()[]{}\"\"''"` | Парные символы, которые закрываются при вводе. Пустая строка выключает. |
| `words` | `true` | Список слов документа и ключевых слов при вводе. |
| `min-chars` | `1` | Со скольких символов показывать список. |
| `call-tips` | `true` | Подсказка параметров функции после открывающей скобки. |

### `[highlighting]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `smart.enabled` | `true` | Подсвечивать выделенное слово во всём видимом тексте. |
| `smart.match-case` | `false` | …с учётом регистра. |
| `smart.whole-word` | `true` | …только целые слова. |
| `smart.use-find-options` | `false` | Брать регистр и «целые слова» из панели поиска. |
| `token-style.match-case` | `false` | «Выделить все вхождения стилем» с учётом регистра. |
| `token-style.whole-word` | `true` | …только целые слова. |

### `[files]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `recent-limit` | `10` | Сколько файлов помнит **Файл → Недавние файлы**. |
| `ansi-encoding` | системная | Кодировка ANSI, например `"windows-1251"`. По умолчанию — кодовая страница системы на Windows, Windows-1252 на других системах. |
| `large-file-limit-mb` | `20` | Файлы больше открываются без подсветки, сворачивания и умной подсветки. |
| `change-detection` | `"all"` | Следить за изменениями файлов другими программами: `all`, `current`, `off`. |
| `reload-silently` | `false` | Перечитывать изменённый файл без вопроса. |
| `reload-scrolls-to-end` | `false` | После перечитывания переходить в конец. |

### `[session]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `remember` | `true` | Открывать документы прошлого запуска. |
| `backup-unsaved` | `true` | Хранить несохранённое в резервных копиях. |
| `backup-interval-seconds` | `7` | Интервал резервного копирования. |

См. [Сессии и резервные копии](/docs/sessions/).

### `[updates]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `mode` | `"auto"` | `off` — никаких сетевых запросов, `notify` — только сообщать, `auto` — скачивать и ставить при перезапуске. |
| `channel` | `"stable"` | `stable`, `beta` или `nightly`. |
| `url` | — | Свой адрес подписанного манифеста обновлений, например внутреннее зеркало. |

См. [Обновления и сеть](/docs/updates/).

### Зарезервировано

Ключи `plugins.install` (`allow`, `allowlist`, `deny`), `plugins.allowed`, `network.online-features` и `diagnostics.crash-reports` (по умолчанию `false`) уже читаются, но относятся к будущим возможностям: плагинам, сетевым функциям и отчётам о сбоях.

## Сочетания клавиш

**Опции → Горячие клавиши…** добавляет, убирает и сбрасывает сочетания любой команды и записывает их в `keymap.toml`, сохраняя комментарии. Файл дополняет [сочетания по умолчанию](/docs/shortcuts/):

```toml
[[binding]]
keys = "secondary-shift-d"
command = "edit.duplicate-line"
context = "Editor"

# Убрать сочетание по умолчанию
[[binding]]
keys = "secondary-d"
context = "Editor"
unbind = true
```

`secondary` — это <kbd>Ctrl</kbd> на Windows и Linux и <kbd>Cmd</kbd> на macOS. Необязательные поля: `args` — аргументы команды, `context` — где действует сочетание (например, `"Editor"`), `platforms` — список из `"windows"`, `"linux"`, `"macos"`.
