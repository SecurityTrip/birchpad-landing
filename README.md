# birchpad.ru

Landing page of [Birchpad](https://github.com/SecurityTrip/Birchpad). Plain HTML and CSS, no build
step: `index.html` (Russian), `en/index.html` (English), `assets/`. Deployed with GitHub Pages.

The download links in the HTML point at a release that exists; `assets/site.js` moves them to the
latest release through the GitHub API and picks the download for the visitor's system.

Preview locally:

```bash
python -m http.server 8765
```

Fonts: Literata and JetBrains Mono, SIL Open Font License 1.1.
