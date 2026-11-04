---
title: Markdown and PlantUML preview
description: How Birchpad shows a Markdown document as its rendered page and a PlantUML file as its diagram beside the text, installs PlantUML with one button, and zooms and exports diagrams.
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

PlantUML is a language of its own in the **Language** menu: `@start`/`@end` lines, keywords, arrows, preprocessor lines, colors and stereotypes are highlighted; diagrams and their blocks (`alt`, `group`, `box`, `!if`, `!procedure`, notes of several lines) fold; the Function List lists participants, `==` sections, titles, procedures and functions. Markdown's `plantuml` code blocks are highlighted too.

`.puml` files show as a diagram, drawn by PlantUML:

- the PlantUML Birchpad installed, or the `plantuml` command when the system has one;
- or a `plantuml.jar` named in the [`preview.plantuml`](/en/docs/settings/#preview) setting.

When no PlantUML is found, the preview offers **Install PlantUML**: Birchpad downloads PlantUML and the Java that runs it from its releases on GitHub, checks their size and SHA-256 and keeps them in its data folder. A download cut off goes on where it stopped. When a newer build comes out, a line above the diagrams offers it; nothing is downloaded until you click it. The download is off when online features are (`network.online-features = false`); install PlantUML yourself then.

PlantUML is kept running between drawings, so a diagram follows your typing almost at once.

### Viewing and export

- Above the diagrams: **Zoom Out**, the zoom (a click sets 100%), **Zoom In** and **Fit**; the same with <kbd>Ctrl</kbd>+mouse wheel and in **View → Preview**. From 25% to 400%.
- **Fit Diagrams to Page** shrinks a large diagram to be seen whole. Drag a diagram with the mouse to move it.
- Diagrams are drawn on white, as for paper; **White Diagram Background** puts them on the theme's background instead.
- A diagram's context menu has **Copy Diagram**, **Export Diagram as PNG…** and **Export Diagram as SVG…**. PNG is twice the size by default (`preview.plantuml-png-scale`).

### Included files

The preview follows `!include`, `!include_many`, `!include_once`, `!includesub` and `!import`, paths written with PlantUML's variables and functions too (`!include $DIAGRAMS_ROOT/library/main.iuml`). Files are found relative to the document, as IDE plugins and Confluence find them, then in the folders of `preview.plantuml-include-path`.

- A change to an included file, in Birchpad or another program, draws the diagrams again; **Redraw Diagrams** does it by hand.
- <kbd>Ctrl</kbd>+click on an `!include` line opens the file.
- PlantUML's mistakes are listed above the diagrams by line ("Line 9: Syntax Error?"); a click puts the caret there, in the document or in the included file.

### Layout

`preview.plantuml-layout` (**Settings → Preferences… → Preview**) chooses what lays diagrams out. By default it is Graphviz when its `dot` is found (`GRAPHVIZ_DOT`, `PATH`, Graphviz's folder on Windows), so diagrams look as on Confluence and in IDEs, and smetana, PlantUML's own, otherwise. Birchpad does not install Graphviz.

When smetana cannot lay out a large diagram (a C4 container diagram with boundaries in boundaries, for example), the preview draws it with ELK and says so. When ELK cannot either, the message has a **Get Graphviz** link; once it is installed, the diagram is drawn again by itself.
