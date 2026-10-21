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

В папке настроек: `settings.toml`, `keymap.toml` (сочетания клавиш), `macros.toml` (макросы), `run.toml` (команды меню «Запуск»), `context-menu.toml` (контекстное меню текста), папки `themes`, `userDefineLangs`, `autoCompletion`, `plugins`, `scripts` и `dictionaries`. В папке данных: `state.toml` (тема, перенос строк, панели, недавние файлы), `session.toml` и папка `backup`.

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
| `language` | `"auto"` | Язык интерфейса: `en`, `ru`, `de` или `auto` (как в системе). |
| `native-lang` | `""` | Файл перевода Notepad++ (например, `localization/german.xml` из папки Notepad++): его названия меню и команд важнее встроенных. |
| `interface` | `"theme"` | Цвета меню, вкладок, панелей и диалогов: `theme` (как в теме), `light`, `dark` или `system`. |
| `title-file-name-only` | `false` | В заголовке окна только имя файла, без пути. |

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
| `words` | `true` | Список слов документа при вводе. |
| `min-chars` | `1` | Со скольких символов показывать слова документа. |
| `api` | `true` | Ключевые слова и функции языка из API-файла. |
| `api-min-chars` | `1` | Со скольких символов их показывать. |
| `ignore-case` | `true` | Подбирать без учёта регистра. |
| `ignore-numbers` | `true` | Не предлагать числа. |
| `close-tags` | `false` | Вставлять закрывающий тег HTML и XML после `>` открывающего. |
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
| `backup-on-save` | `"none"` | Копия файла перед сохранением: `none`, `simple` (`.bak` рядом) или `verbose` (копия с временем в `backup-folder`). |
| `backup-folder` | `""` | Папка для `verbose`; пусто — `nppBackup` рядом с файлом. |
| `default-directory` | `"follow"` | Где начинают «Открыть» и «Сохранить как»: `follow` (папка документа), `remember` (последняя), `custom`. |
| `default-directory-path` | `""` | Папка для `custom`. |
| `offer-default-app` | `true` | При запуске предлагать сделать Birchpad редактором по умолчанию. |

### `[session]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `remember` | `true` | Открывать документы прошлого запуска. |
| `backup-unsaved` | `true` | Хранить несохранённое в резервных копиях. |
| `backup-interval-seconds` | `7` | Интервал резервного копирования. |
| `remember-inaccessible` | `false` | Оставлять в сессии файлы, которые сейчас недоступны (например, на отключённом сетевом диске). |

См. [Сессии и резервные копии](/docs/sessions/).

### `[tabs]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `vertical` | `false` | Вкладки столбцом слева от вида. |
| `multi-line` | `false` | Вкладки в несколько рядов вместо прокрутки. |
| `reduce` | `false` | Уменьшенные вкладки. |
| `lock` | `false` | Запретить перетаскивание вкладок. |
| `close-button` | `true` | Кнопка закрытия на каждой вкладке. |
| `double-click-close` | `false` | Закрывать вкладку двойным щелчком. |
| `peeker` | `true` | Показывать начало документа при наведении на вкладку. |
| `switcher` | `true` | Переключатель документов по <kbd>Ctrl</kbd>+<kbd>Tab</kbd>; `false` — просто следующая вкладка. |
| `switcher-mru` | `true` | В переключателе недавние документы первыми. |
| `exit-on-last-close` | `false` | Закрытие последней вкладки завершает Birchpad. |

### `[toolbar]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `show` | `true` | Показывать панель инструментов. |
| `size` | `"small"` | Значки: `small` или `large`. |
| `buttons` | как в Notepad++ | Кнопки по порядку: идентификаторы команд и `"|"` для разделителя. |

### `[instances]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `mode` | `"single"` | `single` — повторный запуск передаёт файлы работающему Birchpad; `session` — то же, но сессия из `-openSession` открывается отдельно; `multi` — каждый запуск отдельно. |

### `[date]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `custom-format` | `"yyyy-MM-dd HH:mm:ss"` | Свой формат **Вставить дату и время**, буквы — как в Notepad++. |
| `reverse` | `false` | Дата перед временем в коротком и длинном форматах. |

### `[search-engine]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `engine` | `"duckduckgo"` | Поиск выделенного в интернете: `duckduckgo`, `google`, `bing`, `yahoo`, `stack-overflow`, `custom`. |
| `custom-url` | `""` | Адрес для `custom`, `$(CURRENT_WORD)` — искомый текст. |

### `[links]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `enabled` | `true` | Ссылки открываются <kbd>Ctrl</kbd>+щелчком. |
| `double-click` | `false` | И двойным щелчком, как в Notepad++. |
| `underline` | `true` | Подчёркивать ссылки. |
| `schemes` | `"svn:// git:// ssh:// sftp://"` | Свои схемы, кроме http, https, ftp, ftps, file и mailto. |

### `[delimiters]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `open` | `"\""` | Открывающий ограничитель для <kbd>Ctrl</kbd>+двойного щелчка. |
| `close` | `"\""` | Закрывающий ограничитель. |
| `multi-line` | `false` | Ограничители могут быть на других строках. |

### `[new-document]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `encoding` | `"utf-8"` | Кодировка новых документов: `utf-8`, `utf-8-bom`, `utf-16le-bom`, `ansi`… |
| `line-ending` | `"system"` | `crlf`, `lf`, `cr` или `system`. |
| `language` | `"text"` | Язык новых документов. |

### `[languages.<язык>]`

`tab-width` и `insert-spaces` для одного языка поверх `[editor]`, например `[languages.python]`.

### `[cloud]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `folder` | `""` | Папка, откуда со следующего запуска берутся `settings.toml`, `keymap.toml`, темы и остальное. Задаётся только в локальном файле настроек. |

### `[preview]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `plantuml` | `"plantuml"` | Чем рисовать PlantUML: команда `plantuml` (или путь к ней) либо путь к `plantuml.jar`. При `plantuml` используется и PlantUML, поставленный самим Birchpad. |

См. [Предпросмотр Markdown и PlantUML](/docs/preview/).

### `[print]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `paper` | `"a4"` | `a3`, `a4`, `a5`, `letter`, `legal`. |
| `landscape` | `false` | Альбомная ориентация. |
| `margin-top`, `margin-bottom`, `margin-left`, `margin-right` | `15` | Поля, мм. |
| `font-size` | `10` | Размер текста, пт. |
| `line-numbers` | `true` | Печатать номера строк. |
| `colors` | `"wysiwyg"` | `wysiwyg` (как на экране), `invert`, `black-on-white`, `no-background`. |
| `header-left`, `header-center`, `header-right` | `""` | Части верхнего колонтитула, с переменными Notepad++. |
| `footer-left`, `footer-center`, `footer-right` | `""` | Части нижнего колонтитула. |

См. [Печать](/docs/macros-run-tools/#печать).

### `[updates]`

| Ключ | По умолчанию | Значение |
|---|---|---|
| `mode` | `"auto"` | `off` — никаких сетевых запросов, `notify` — только сообщать, `auto` — скачивать и ставить при перезапуске. |
| `channel` | `"stable"` | `stable`, `beta` или `nightly`. |
| `url` | — | Свой адрес подписанного манифеста обновлений, например внутреннее зеркало. |
| `proxy` | `""` | Прокси для обновлений: `http://host:port`, `socks5://host:port` или `host:port`. Пусто — `HTTPS_PROXY`, `ALL_PROXY` или системный на Windows. |

См. [Обновления и сеть](/docs/updates/).

### `[plugins]`

| Ключ | По умолчанию | Что делает |
|---|---|---|
| `install` | `"allow"` | Какие плагины загружаются: `allow` — все, `allowlist` — только из `allowed`, `deny` — никакие. |
| `allowed` | `[]` | Идентификаторы разрешённых плагинов при `allowlist`. |
| `scripts` | `true` | Разрешить скрипты из папки `scripts`. |

См. [Плагины и скрипты](/docs/plugins/).

### Зарезервировано

Ключи `network.online-features` и `diagnostics.crash-reports` (по умолчанию `true` и `false`) уже читаются, но относятся к будущим возможностям: плагинам, сетевым функциям и отчётам о сбоях.

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
