import { useEffect, useState } from "react";

/**
 * Limited-time offer config. Flip PROMO_ACTIVE to false (or let PROMO_END pass)
 * to retire every promo element on the landing page at once.
 */
export const PROMO_ACTIVE = true;

/** Pacific time, so the offer ends at midnight for the clinic rather than UTC. */
export const PROMO_END = "2026-09-30T23:59:59-07:00";

/** Tagged onto both lead forms so promo leads are identifiable downstream. */
export const PROMO_CODE = "SEPT1000";

/** Legal copy, published verbatim wherever the offer is mentioned. */
export const PROMO_FINE_PRINT =
  "Up to $1,000 off a pair of hearing aids. Not valid with insurance claims. See clinic for details. Offer ends September 30, 2026.";

const PROMO_END_MS = Date.parse(PROMO_END);

export function isPromoLive(now: number = Date.now()): boolean {
  return PROMO_ACTIVE && now < PROMO_END_MS;
}

/**
 * Pages are prerendered to static HTML, so the build-time clock decides what ships
 * in the markup. The initial render therefore uses PROMO_ACTIVE alone, which is
 * identical on the server and on the client's first pass, and the expiry check runs
 * after mount. That keeps hydration consistent while still hiding an expired offer
 * on already-built pages that have not been redeployed yet.
 */
export function usePromoLive(): boolean {
  const [live, setLive] = useState(PROMO_ACTIVE);

  useEffect(() => {
    setLive(isPromoLive());
  }, []);

  return live;
}

/** Offer terms shown beneath each promo call to action. */
export function PromoFinePrint({ className = "" }: { className?: string }) {
  return <p className={`text-xs leading-relaxed ${className}`}>{PROMO_FINE_PRINT}</p>;
}

/**
 * Offer seal for the hero form card. Below xl it is a full-width banner pinned to
 * the top of the card (negative margins bleed it to the card edges, cancelling the
 * card's own padding); from xl up it becomes a rotated corner seal overlapping the
 * card border. The card must be positioned for the seal anchoring to work.
 *
 * The seal waits for xl rather than md because the hero card is capped at max-w-sm
 * (384px) until lg and is still only ~400px wide at lg. A seal carrying the specified
 * 40-56px headline measures ~300px, which buries the card heading at those widths.
 * From xl the card is ~500px, leaving the heading room to sit beside it.
 *
 * role="img" with a label keeps screen readers from announcing the four stacked
 * fragments separately, while the text itself stays real text rather than an image.
 */
export function PromoBadge() {
  return (
    <div
      role="img"
      aria-label="Promotion: up to $1,000 off a pair of hearing aids, September only."
      className="relative z-10 -mx-6 -mt-6 mb-6 rounded-t-2xl bg-promo px-5 py-4 text-center text-promo-foreground shadow-lift ring-1 ring-promo-foreground/15 sm:-mx-8 sm:-mt-8 xl:absolute xl:-right-5 xl:-top-7 xl:m-0 xl:w-auto xl:rotate-[-5deg] xl:rounded-2xl xl:px-5 xl:py-4"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] xl:text-xs">Up to</p>
      <p className="font-display text-[2rem] font-bold leading-[0.95] tracking-tight xl:text-[2.5rem]">
        $1,000 OFF
      </p>
      <p className="mt-1 text-[11px] font-semibold leading-snug xl:text-xs">
        a pair of hearing aids
      </p>
      <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.14em] xl:text-[11px]">
        September only
      </p>
    </div>
  );
}
