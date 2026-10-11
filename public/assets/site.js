// Birchpad landing: picks the download for the visitor's system and keeps the links on the
// latest release. The page works without this script: the links in the HTML point at a
// release that exists, and the releases page lists every one.
(() => {
  "use strict";

  const REPO = "SecurityTrip/Birchpad";
  const ru = document.documentElement.lang === "ru";
  const T = ru
    ? { win: "Windows", winArm: "Windows ARM64", mac: "macOS", linux: "Linux", for: "Скачать для ", mb: " МБ" }
    : { win: "Windows", winArm: "Windows ARM64", mac: "macOS", linux: "Linux", for: "Download for ", mb: " MB" };

  // Header border once the page scrolls.
  const top = document.querySelector(".top");
  const onScroll = () => top && top.classList.toggle("scrolled", window.scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const fmtSize = (bytes) => {
    const mb = bytes / 1048576;
    const s = mb.toFixed(mb < 10 ? 1 : 0);
    return (ru ? s.replace(".", ",") : s) + T.mb;
  };

  // Which download suits this visitor: { os, asset } or null on phones and unknown systems.
  async function detect() {
    const ua = navigator.userAgent;
    if (/Android|iPhone|iPad|iPod/i.test(ua)) return null;
    const platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || ua;
    if (/Win/i.test(platform)) {
      let arm = /ARM64|aarch64/i.test(ua);
      try {
        if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
          const v = await navigator.userAgentData.getHighEntropyValues(["architecture"]);
          arm = v.architecture === "arm";
        }
      } catch (_) { /* keep the guess from the user agent */ }
      return arm ? { os: "windows", label: T.winArm, asset: "windows-arm64-setup.exe" }
                 : { os: "windows", label: T.win, asset: "windows-x64-setup.exe" };
    }
    if (/Mac/i.test(platform)) return { os: "macos", label: T.mac, asset: "macos.zip" };
    if (/Linux|X11/i.test(platform)) return { os: "linux", label: T.linux, asset: "linux-x64.zip" };
    return null;
  }

  const links = () => document.querySelectorAll("[data-asset]");

  function applyRelease(rel) {
    const version = rel.tag_name.replace(/^v/, "");
    document.querySelectorAll("[data-version]").forEach((el) => { el.textContent = version; });
    links().forEach((a) => {
      const suffix = "-" + a.dataset.asset;
      const asset = rel.assets.find((x) => x.name.startsWith("birchpad-") && x.name.endsWith(suffix));
      if (!asset) return;
      a.href = asset.browser_download_url;
      const size = a.querySelector("[data-size]");
      if (size) size.textContent = fmtSize(asset.size);
    });
  }

  async function main() {
    const me = await detect();
    const primary = document.querySelector("[data-primary]");
    if (me && primary) {
      const src = document.querySelector('.dl-list [data-asset="' + me.asset + '"]');
      primary.dataset.asset = me.asset;
      if (src) primary.href = src.href;
      primary.querySelector("[data-label]").textContent = T.for + me.label;
      const card = document.querySelector('.os[data-os="' + me.os + '"]');
      if (card) card.classList.add("me");
    }

    try {
      const res = await fetch("https://api.github.com/repos/" + REPO + "/releases/latest", {
        headers: { Accept: "application/vnd.github+json" },
      });
      if (res.ok) applyRelease(await res.json());
    } catch (_) { /* offline or rate-limited: the links in the HTML still work */ }
  }

  main();
})();
