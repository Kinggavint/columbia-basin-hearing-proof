/**
 * GA4 event helpers. gtag.js and the G-XMVRK9J2QC config are loaded from the
 * root route's <head>; these only send events through it.
 *
 * Every call is a no-op when gtag is missing (ad blockers, consent tools, or a
 * test environment), so tracking can never break a click or a form submit.
 */

type Gtag = (command: "event", eventName: string, params: Record<string, unknown>) => void;

function getGtag(): Gtag | undefined {
  if (typeof window === "undefined") return undefined;
  const { gtag } = window as unknown as { gtag?: Gtag };
  return typeof gtag === "function" ? gtag : undefined;
}

const GA4_ID = "G-XMVRK9J2QC";

/**
 * Sends a GA4 event, dropping empty parameters so reports don't fill with
 * "(not set)" noise.
 *
 * Scoped with send_to because an unscoped gtag event goes to every configured
 * tag, and the page also configures Google Ads (AW-962703891). Without it each
 * of these events would also reach Ads as a remarketing hit. These are meant to
 * be GA4 events, imported into Ads from GA4, and on a health-category site they
 * should not be feeding Ads audiences on the side.
 */
export function trackEvent(name: string, params: Record<string, string | undefined>) {
  const gtag = getGtag();
  if (!gtag) return;
  const clean = Object.fromEntries(
    Object.entries(params).filter(([, v]) => v !== undefined && v !== ""),
  );
  gtag("event", name, { ...clean, send_to: GA4_ID });
}

export type LinkLocation = "header" | "body" | "sticky" | "footer";

const LINK_LOCATIONS: readonly LinkLocation[] = ["header", "body", "sticky", "footer"];

/**
 * Where on the page a link sits. An explicit data-link-location on the link or
 * any ancestor wins, which is how portalled UI (the mobile menu, which renders
 * under <body> but belongs to the header) and any future sticky call bar
 * identify themselves. Otherwise the nearest <header> or <footer> decides, and
 * everything else is body content.
 */
function linkLocation(el: Element): LinkLocation {
  const tagged = el.closest("[data-link-location]")?.getAttribute("data-link-location");
  if (tagged && (LINK_LOCATIONS as readonly string[]).includes(tagged)) {
    return tagged as LinkLocation;
  }
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  return "body";
}

/** "tel:15097364005" -> "+15097364005", so every clinic's number reports in one consistent format. */
function phoneFromHref(href: string): string {
  const raw = decodeURIComponent(href.replace(/^tel:/i, "")).replace(/[^\d+]/g, "");
  return raw.startsWith("+") ? raw : `+${raw}`;
}

/**
 * Fires `phone_click` for every tel: link on the site, including ones added
 * later, from a single delegated listener rather than an onClick on each link.
 * Listens in the capture phase so a handler that stops propagation (the mobile
 * menu closes itself on click) can't swallow the event first.
 *
 * Returns a cleanup function for the effect that installs it.
 */
export function installPhoneClickTracking(): () => void {
  const onClick = (event: MouseEvent) => {
    const link = (event.target as Element | null)?.closest?.('a[href^="tel:"]');
    if (!link) return;
    trackEvent("phone_click", {
      phone_number: phoneFromHref(link.getAttribute("href") ?? ""),
      page_location: window.location.href,
      link_location: linkLocation(link),
    });
  };

  document.addEventListener("click", onClick, { capture: true });
  return () => document.removeEventListener("click", onClick, { capture: true });
}
