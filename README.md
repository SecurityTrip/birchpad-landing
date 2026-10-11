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
  local checkout).

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # into dist/
```

`.github/workflows/deploy.yml` publishes the site to GitHub Pages on every push to `main` and
once a day, so a new Birchpad release reaches the site without a commit here.

Fonts: Literata and JetBrains Mono, SIL Open Font License 1.1.
