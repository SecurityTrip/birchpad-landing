---
title: Участие в проекте
description: Как сообщить об ошибке, предложить идею или прислать код в Birchpad.
---

Birchpad — проект с открытым кодом под лицензией MIT или Apache-2.0 на ваш выбор. Помочь можно по-разному:

- **Сообщить об ошибке или предложить идею** — в [Issues на GitHub](https://github.com/SecurityTrip/Birchpad/issues). Укажите версию (**? → О программе**), систему и шаги, чтобы повторить ошибку.
- **Сообщить об уязвимости** — не публично, а как описано в [SECURITY.md](https://github.com/SecurityTrip/Birchpad/blob/main/SECURITY.md).
- **Рассказать о Birchpad** и поставить звезду на [GitHub](https://github.com/SecurityTrip/Birchpad).
- **Улучшить этот сайт** — исходники в [birchpad-landing](https://github.com/SecurityTrip/birchpad-landing); на каждой странице документации есть ссылка «Редактировать страницу».

## Код

Перед чем-то крупнее небольшого исправления откройте issue или обсуждение, чтобы договориться о подходе. Архитектурные решения записаны в [`docs/adr`](https://github.com/SecurityTrip/Birchpad/tree/main/docs/adr); если изменение им противоречит, предложите новое решение.

```bash
cargo fmt --all
cargo clippy --workspace --all-targets
cargo test --workspace
```

CI запускает то же самое с предупреждениями как ошибками на Windows (x64 и ARM64), Linux и macOS, плюс `cargo-deny`. Как собрать проект — в разделе [Сборка из исходников](/docs/build/).

- **Тесты обязательны.** У проекта нет тестировщиков, поэтому тесты — его контроль качества: для каждого изменения — обычный сценарий, ошибочный ввод и граничные значения. Исправление ошибки приходит с тестом, который без исправления падает.
- **Коммиты** — в стиле [Conventional Commits](https://www.conventionalcommits.org/ru/) (`feat:`, `fix:`, `docs:`…), один логический шаг на pull request.
- **Чужой код.** Нельзя копировать код из проектов под GPL (включая Notepad++) и MPL. Читать их ради идей можно. Совместимость с форматами файлов Notepad++ (темы, UDL, API-файлы) приветствуется.

Полные правила — в [CONTRIBUTING.md](https://github.com/SecurityTrip/Birchpad/blob/main/CONTRIBUTING.md).
