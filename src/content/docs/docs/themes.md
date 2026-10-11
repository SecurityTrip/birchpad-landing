---
title: Темы и стили
description: Встроенные темы Birchpad, темы Notepad++, окно «Определение стилей» и формат файла темы в TOML.
---

Тема задаёт цвета редактора и всего окна: вкладок, панелей, меню и диалогов. Выбор — в **Опции → Тема**, тема при запуске — ключ `appearance.theme`.

## Встроенные темы и темы Notepad++

- **Default** — цвета Notepad++ по умолчанию.
- **Dark** — тёмная тема для текста и интерфейса.

XML-темы Notepad++ работают как есть: положите файл в папку `themes` рядом с настройками или выберите **Опции → Импорт → Импортировать темы…**. Цвета стилей Scintilla сопоставляются с подсветкой Birchpad по их названиям. Шрифты из тем пока не берутся.

## Определение стилей

**Опции → Определение стилей…** — как в Notepad++: выберите тему и меняйте цвета — глобальные стили редактора, интерфейс и подсветку для всех языков или одного (цвет, фон, жирный, курсив, подчёркивание). Изменения видны сразу. **Сохранить и закрыть** записывает тему в `themes/<имя>.toml`; встроенные файлы остаются нетронутыми.

## Формат файла темы

Тема — файл TOML в папке `themes`. В нём достаточно указать только то, что меняется: остальные цвета берутся из встроенной темы той же яркости. Тема считается тёмной, если в ней `dark = true` или тёмный фон редактора.

```toml
# themes/Solarized.toml
dark = true

[editor]
background = "#002b36"
text = "#839496"
selection = "#073642"
caret = "#93a1a1"

[ui]
accent = "#268bd2"

[syntax]
comment = { color = "#586e75", italic = true }
keyword = "#859900"
string = "#2aa198"
"function.method" = "#268bd2"

[language.python]
keyword = { color = "#cb4b16", bold = true }
```

Цвет пишется как `#rrggbb` или `#rrggbbaa` (с прозрачностью). Стиль — строка с цветом или таблица с полями `color`, `background`, `bold`, `italic`, `underline`.

### `[editor]`

`text`, `background`, `selection`, `caret`, `current-line`, `gutter-background`, `gutter-text`, `gutter-border`, `bookmark`, `change-modified`, `change-saved`, `fold-mark`, `fold-line`, `fold-underline`, `whitespace`, `eol-box`, `eol-text`, `indent-guide`, `edge`, `brace-match`, `brace-bad`, `smart-highlight`, `find-mark`, `incremental-highlight`, `mark-1` … `mark-5` (пять стилей токенов), `scrollbar-thumb`.

### `[ui]`

`background`, `surface`, `border`, `text`, `muted`, `faint`, `selected`, `hovered`, `accent`, `error`, `error-background`, `modified`, `directory`, `heading`, `line-number`, `match-background`.

### `[syntax]`

Стили по именам подсветки: `attribute`, `boolean`, `character`, `comment`, `constant`, `constant.builtin`, `constructor`, `escape`, `function`, `function.macro`, `keyword`, `keyword.directive`, `label`, `module`, `number`, `operator`, `property`, `string`, `string.escape`, `string.regexp`, `string.special.key`, `tag`, `tag.attribute`, `type`, `variable.builtin`, `markup.heading`, `markup.italic`, `markup.strong`, `markup.link`, `markup.list`, `markup.quote`, `markup.raw`, `diff.plus`, `diff.minus`, `diff.delta`, `error`.

Имя с точкой без своего стиля берёт стиль префикса: `function.method` → `function`. Стиль, заданный в файле, заменяет более частные стили базовой темы (`string` заменяет и `string.escape`), чтобы ваш цвет не перекрывался тем, о чём файл не знает.

### `[language.<язык>]`

Стили одного языка, которые отличаются от общих. Имена языков — как в [списке языков](/docs/languages/).

Полные встроенные темы с комментариями — [default.toml](https://github.com/SecurityTrip/Birchpad/blob/main/crates/theme/src/themes/default.toml) и [dark.toml](https://github.com/SecurityTrip/Birchpad/blob/main/crates/theme/src/themes/dark.toml) — удобно брать за основу.
