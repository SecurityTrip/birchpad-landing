---
title: Сборка из исходников
description: Как собрать и запустить Birchpad из исходного кода, запустить тесты и где что лежит в репозитории.
---

Birchpad написан на Rust. Нужна версия Rust из [`rust-toolchain.toml`](https://github.com/SecurityTrip/Birchpad/blob/main/rust-toolchain.toml) — [rustup](https://rustup.rs/) установит её сам.

```bash
git clone https://github.com/SecurityTrip/Birchpad
cd Birchpad
cargo run -p birchpad            # собрать и запустить
cargo build -p birchpad --release
cargo test --workspace           # тесты
```

На Debian и Ubuntu сначала поставьте библиотеки для сборки:

```bash
sudo apt-get install -y build-essential pkg-config libxkbcommon-dev libxkbcommon-x11-dev \
  libwayland-dev libvulkan-dev libx11-xcb-dev libxcb1-dev libfontconfig-dev libfreetype-dev \
  libssl-dev libzstd-dev
```

## Устройство репозитория

| Путь | Что внутри |
|---|---|
| `crates/core` | Модель текста: rope, выделения, наборы изменений, история отмены. Без интерфейса. |
| `crates/config` | Слои настроек: умолчания, умолчания компьютера, пользователь, политики. |
| `crates/commands` | Каталог команд, раскладка клавиш и меню как данные. |
| `crates/io` | Определение и преобразование кодировок, чтение и безопасное сохранение файлов. |
| `crates/view` | Раскладка вида документа: табуляция, перенос, визуальные строки. |
| `crates/syntax` | Языки и деревья разбора: определение, tree-sitter, подсветка, сворачивание. |
| `crates/theme` | Темы, их формат и импорт тем Notepad++. |
| `crates/cli` | Командная строка в духе Notepad++ и передача файлов запущенному экземпляру. |
| `crates/update` | Обновления: подписанный манифест, каналы, установка. |
| `crates/menu-bar` | Строка меню на Windows и Linux с доступом с клавиатуры. |
| `crates/app` | Само приложение на [GPUI](https://www.gpui.rs/). |
| `packaging/` | MSI, пакет для macOS, портативный режим, подпись обновлений. |
| `docs/adr/` | Архитектурные решения. |

Как устроен процесс разработки и тестирования — в разделе [Участие в проекте](/contributing/).
