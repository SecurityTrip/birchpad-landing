# birchpad.ru

Website of [Birchpad](https://github.com/SecurityTrip/Birchpad): the landing pages and the
documentation, in Russian and English.

- `public/` — the landing pages as plain HTML and CSS (`index.html`, `en/index.html`, `assets/`),
  copied to the site as they are. `assets/site.js` moves the download links to the latest release
  through the GitHub API and picks the download for the visitor's system.
- `src/content/docs/` — the documentation, roadmap, privacy policy and contributing guide
  ([Astro](https://astro.build) + [Starlight](https://starlight.astro.build)); Russian at the
  root, English under `en/`. The sidebar is in `astro.config.mjs`.
- `scripts/sync.mjs` — builds the changelog, the keyboard shortcuts and the language list from
  Birchpad's repository before every build (`BIRCHPAD_REF` picks the branch, `BIRCHPAD_DIR` a
  local checkout). It also notes when those sources last changed, for the sitemap's `<lastmod>`.
- `scripts/og.mjs` — draws the social preview images `public/assets/og-ru.png` and `og-en.png`;
  run it by hand after changing them.
- `scripts/indexnow.mjs` — tells Yandex, Bing and the other IndexNow engines which pages changed;
  the key file is `public/<key>.txt`.

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # into dist/
```

`.github/workflows/deploy.yml` publishes the site to GitHub Pages on every push to `main` and
once a day, so a new Birchpad release reaches the site without a commit here. Pages that are new
or have another `<lastmod>` than on the live site are then sent to IndexNow. Google does not take
IndexNow; it reads the sitemap, submitted once in Search Console.

Fonts: Literata and JetBrains Mono, SIL Open Font License 1.1.
