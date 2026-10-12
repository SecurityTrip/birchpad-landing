// The site: the landing pages are plain HTML in `public/` (index.html, en/index.html); the
// documentation, changelog and privacy policy are Starlight pages in `src/content/docs/`.
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";

const t = (ru, en) => ({ label: ru, translations: { en } });

export default defineConfig({
  site: "https://birchpad.ru",
  trailingSlash: "always",
  integrations: [
    starlight({
      title: "Birchpad",
      description: "Быстрый текстовый редактор в духе Notepad++ для Windows, macOS и Linux.",
      defaultLocale: "root",
      locales: {
        root: { label: "Русский", lang: "ru" },
        en: { label: "English", lang: "en" },
      },
      logo: { src: "./public/assets/logo.svg", alt: "" },
      favicon: "/favicon.svg",
      customCss: ["./src/styles/docs.css"],
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/SecurityTrip/Birchpad" }],
      editLink: { baseUrl: "https://github.com/SecurityTrip/birchpad-landing/edit/main/" },
      lastUpdated: true,
      routeMiddleware: "./src/routeData.ts",
      head: [
        { tag: "link", attrs: { rel: "icon", href: "/favicon.ico", sizes: "32x32" } },
      ],
      sidebar: [
        {
          ...t("Начало", "Getting started"),
          items: [
            { slug: "docs" },
            { slug: "docs/install" },
            { slug: "docs/switching" },
          ],
        },
        {
          ...t("Работа с текстом", "Working with text"),
          items: [
            { slug: "docs/editing" },
            { slug: "docs/encodings" },
            { slug: "docs/search" },
            { slug: "docs/panels" },
            { slug: "docs/sessions" },
            { slug: "docs/languages" },
          ],
        },
        {
          ...t("Настройка", "Customization"),
          items: [
            { slug: "docs/settings" },
            { slug: "docs/themes" },
            { slug: "docs/shortcuts" },
            { slug: "docs/macros-run-tools" },
            { slug: "docs/udl-and-completion" },
            { slug: "docs/plugins" },
          ],
        },
        {
          ...t("Справочник", "Reference"),
          items: [
            { slug: "docs/command-line" },
            { slug: "docs/updates" },
            { slug: "docs/admin" },
            { slug: "docs/build" },
          ],
        },
        {
          ...t("О проекте", "Project"),
          items: [
            { slug: "changelog" },
            { slug: "roadmap" },
            { slug: "privacy" },
            { slug: "contributing" },
          ],
        },
      ],
    }),
    sitemap({
      customPages: ["https://birchpad.ru/", "https://birchpad.ru/en/"],
      i18n: { defaultLocale: "ru", locales: { ru: "ru", en: "en" } },
    }),
  ],
});
