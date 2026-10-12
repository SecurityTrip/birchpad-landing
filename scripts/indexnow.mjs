// Tells search engines which pages changed, through IndexNow (Yandex, Bing and others share
// what one of them receives). The deploy workflow runs it twice:
//
//   node scripts/indexnow.mjs changed   before publishing: prints the URLs of dist/ that are new
//                                       or have another <lastmod> than in the live sitemap
//   node scripts/indexnow.mjs submit    after publishing: sends the URLs read from stdin
//
// The key is public by design: search engines check that https://birchpad.ru/<key>.txt holds it.
import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://birchpad.ru";
const KEY = "47b964d5620adc799552e9dd2967600e";
const ENDPOINTS = ["https://yandex.com/indexnow", "https://api.indexnow.org/indexnow"];

// URL → lastmod ("" when it has none) of every page in a sitemap index and its sitemaps.
async function pages(read, index) {
  const result = new Map();
  const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  for (const sitemap of locs(await read(index))) {
    const xml = await read(sitemap);
    for (const [, url] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
      const loc = url.match(/<loc>([^<]+)<\/loc>/)[1];
      result.set(loc, url.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? "");
    }
  }
  return result;
}

async function changed() {
  const local = await pages(
    (url) => readFile(join(ROOT, "dist", new URL(url).pathname), "utf8"),
    `${SITE}/sitemap-index.xml`,
  );
  let live = new Map();
  try {
    live = await pages(async (url) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
      return res.text();
    }, `${SITE}/sitemap-index.xml`);
  } catch (error) {
    console.error(`indexnow: the live sitemap did not read (${error.message}); every page counts as changed`);
  }
  for (const [url, date] of local) {
    if (live.get(url) !== date || !date) console.log(url);
  }
}

async function submit() {
  let input = "";
  for await (const chunk of process.stdin) input += chunk;
  const urlList = input.split(/\s+/).filter((url) => url.startsWith(`${SITE}/`));
  if (!urlList.length) return console.log("indexnow: nothing to submit");

  const body = JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList });
  let ok = 0;
  for (const endpoint of ENDPOINTS) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body,
      });
      // 200 and 202 (key not checked yet) both mean accepted.
      console.log(`indexnow: ${endpoint}: HTTP ${res.status} for ${urlList.length} URLs`);
      if (res.ok) ok++;
      else console.log(await res.text());
    } catch (error) {
      console.log(`indexnow: ${endpoint}: ${error.message}`);
    }
  }
  if (!ok) process.exit(1);
}

const command = process.argv[2];
if (command === "changed") await changed();
else if (command === "submit") await submit();
else {
  console.error("usage: node scripts/indexnow.mjs changed | submit");
  process.exit(2);
}
