---
title: Markdown and PlantUML preview
description: How Birchpad shows a Markdown document as its rendered page and a PlantUML file as its diagram beside the text, and installs PlantUML with one button.
---

Markdown and PlantUML documents show what their text makes beside it, as in IntelliJ IDEA. The preview follows your typing.

## Three views

The buttons at the top right of the document and **View → Preview** switch between:

- **Editor Only**: the text alone;
- **Editor and Preview**: the text on the left, the page or diagram on the right;
- **Preview Only**: the result alone.

The choice is remembered.

## Markdown

The page is rendered from the Markdown document: headings, lists, tables, highlighted code, quotes. Links open in the browser, links to files in Birchpad. Images are read only from files next to the document, never downloaded from the web.

## PlantUML

`.puml` files show as a diagram, drawn by PlantUML:

- the `plantuml` command, when the system has one;
- or a `plantuml.jar` named in the [`preview.plantuml`](/en/docs/settings/#preview) setting, run with `java -jar`.

When no PlantUML is found, the preview offers **Install PlantUML**: Birchpad downloads PlantUML and the Java that runs it (about 50 MB) from its releases on GitHub, checks them and keeps them in its data folder. Graphviz is not needed; diagrams are laid out without it. The download is off when online features are (`network.online-features = false`); install PlantUML yourself then.
