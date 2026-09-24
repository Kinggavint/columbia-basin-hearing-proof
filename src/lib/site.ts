/**
 * Production origin, used to build absolute URLs for canonicals, og:url, the
 * sitemap and schema @id values. Search engines treat a relative canonical as a
 * hint at best, and an @id has to be globally unique to be worth anything.
 */
export const SITE_ORIGIN = "https://www.columbiabasinhearing.com";

/**
 * Absolute URL for a route path, in the site's canonical trailing-slash form.
 *
 * The CloudFront viewer-request function 301s every non-slashed path to its
 * slashed equivalent, so the slashed form is the one URL that answers 200 and
 * therefore the only one that should ever appear in a canonical, a sitemap or a
 * schema @id. The site root stays "/" rather than becoming "//".
 */
export function canonicalUrl(path: string): string {
  if (path === "/" || path === "") return `${SITE_ORIGIN}/`;
  const withLeading = path.startsWith("/") ? path : `/${path}`;
  const withTrailing = withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
  return `${SITE_ORIGIN}${withTrailing}`;
}
