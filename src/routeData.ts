// The social preview image of each documentation page, in the page's language.
import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  const image = `https://birchpad.ru/assets/og-${route.locale === "en" ? "en" : "ru"}.png`;
  route.head.push(
    { tag: "meta", attrs: { property: "og:image", content: image } },
    { tag: "meta", attrs: { property: "og:image:width", content: "1200" } },
    { tag: "meta", attrs: { property: "og:image:height", content: "630" } },
  );
});
