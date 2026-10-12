// Draws the social preview images (1200×630) shown when a link to the site is shared:
// public/assets/og-ru.png and og-en.png. Run by hand after changing them: node scripts/og.mjs
import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const logo = await readFile(join(ROOT, "public/assets/logo.svg"), "utf8");
const logoBody = logo.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");

const TEXT = {
  ru: {
    tagline: "Текстовый редактор в духе Notepad++",
    line: "Windows · macOS · Linux — бесплатно, с открытым кодом",
    chips: ["50 языков", "Темы и макросы", "Плагины", "Без телеметрии"],
  },
  en: {
    tagline: "A text editor in the spirit of Notepad++",
    line: "Windows · macOS · Linux — free and open source",
    chips: ["50 languages", "Themes and macros", "Plugins", "No telemetry"],
  },
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function svg({ tagline, line, chips }) {
  let x = 96;
  const chipEls = chips.map((c) => {
    const w = Math.round(c.length * 13.2 + 44);
    const el = `<rect x="${x}" y="470" width="${w}" height="52" rx="26" fill="#e1eedf"/>
      <text x="${x + w / 2}" y="504" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="600" fill="#25633e">${esc(c)}</text>`;
    x += w + 14;
    return el;
  }).join("\n");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#ede5d1"/>
      <stop offset="0.2" stop-color="#fcfaf3"/>
      <stop offset="0.8" stop-color="#f7f2e5"/>
      <stop offset="1" stop-color="#e2d8bf"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g fill="#2f2a25" opacity="0.85">
    <path d="M1080 70 Q1140 60 1200 66 L1200 86 Q1140 92 1080 84 Q1068 77 1080 70Z"/>
    <path d="M1030 190 Q1120 176 1200 184 L1200 202 Q1120 210 1030 202 Q1018 196 1030 190Z"/>
    <path d="M1110 400 Q1160 392 1200 398 L1200 416 Q1160 422 1110 414 Q1100 407 1110 400Z"/>
    <path d="M1060 540 Q1130 528 1200 536 L1200 554 Q1130 562 1060 554 Q1048 547 1060 540Z"/>
    <path d="M0 330 Q30 322 58 328 Q68 336 58 344 Q30 350 0 344Z"/>
  </g>
  <svg x="90" y="80" width="150" height="150" viewBox="0 0 1024 1024">${logoBody}</svg>
  <text x="270" y="185" font-family="Georgia, 'Times New Roman', serif" font-size="96" font-weight="700" fill="#2b2620">Birchpad</text>
  <text x="96" y="320" font-family="Georgia, 'Times New Roman', serif" font-size="48" font-weight="700" fill="#2c7149">${esc(tagline)}</text>
  <text x="96" y="395" font-family="Segoe UI, Arial, sans-serif" font-size="32" fill="#5b5246">${esc(line)}</text>
  ${chipEls}
  <text x="1104" y="600" text-anchor="end" font-family="Segoe UI, Arial, sans-serif" font-size="26" font-weight="600" fill="#8a7f6f">birchpad.ru</text>
</svg>`;
}

for (const [lang, text] of Object.entries(TEXT)) {
  const out = join(ROOT, `public/assets/og-${lang}.png`);
  await sharp(Buffer.from(svg(text))).png({ compressionLevel: 9 }).toFile(out);
  console.log(out);
}
