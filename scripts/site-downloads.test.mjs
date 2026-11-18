import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { setImmediate } from "node:timers/promises";
import test from "node:test";
import { runInNewContext } from "node:vm";

const script = readFileSync(new URL("../public/assets/site.js", import.meta.url), "utf8");
const fallback = "/old-macos.zip";

async function macLinks(version, names) {
  const size = {};
  const card = { dataset: { asset: "macos.dmg" }, href: fallback, querySelector: () => size };
  const primary = { dataset: {}, querySelector: () => ({}) };
  runInNewContext(script, {
    addEventListener() {},
    navigator: { platform: "MacIntel", userAgent: "" },
    document: {
      documentElement: { lang: "en" },
      querySelector(selector) {
        if (selector === "[data-primary]") return primary;
        if (selector === '.dl-list [data-asset="macos.dmg"]') return card;
        return null;
      },
      querySelectorAll(selector) {
        return selector === "[data-asset]" ? [primary, card] : [];
      },
    },
    async fetch() {
      return { ok: true, json: async () => ({
        tag_name: "v" + version,
        assets: names.map(name => ({ name, browser_download_url: "/" + name, size: 1048576 })),
      }) };
    },
  });
  await setImmediate();
  return [primary.href, card.href, size.textContent];
}

test("macOS links prefer the current disk image to a ZIP", async () => {
  const dmg = "birchpad-0.8.2-macos.dmg";
  assert.deepEqual(await macLinks("0.8.2", ["birchpad-0.8.2-macos.zip", dmg]),
    ["/" + dmg, "/" + dmg, "1.0 MB"]);
});

test("macOS links still work for the previous ZIP release", async () => {
  const zip = "birchpad-0.8.1-macos.zip";
  assert.deepEqual(await macLinks("0.8.1", ["birchpad-0.8.2-macos.dmg", zip]),
    ["/" + zip, "/" + zip, "1.0 MB"]);
});

test("a release without a matching macOS download keeps the fallback", async () => {
  assert.deepEqual(await macLinks("0.8.2", ["birchpad-0.8.2-macos.pkg"]),
    [fallback, fallback, undefined]);
});
