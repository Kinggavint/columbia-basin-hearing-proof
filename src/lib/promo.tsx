import { useEffect, useState } from "react";

/**
 * Limited-time offer config. PROMO_ACTIVE is the on/off switch for every promo
 * element on the landing page.
 */
export const PROMO_ACTIVE = true;

/**
 * Optional hard stop, as an ISO timestamp with offset, for example
 * "2026-10-31T23:59:59-07:00" (Pacific, so the offer ends at midnight for the
 * clinic rather than UTC). Left null because the copy reads "this month only"
 * rather than naming a date, which means the offer runs until PROMO_ACTIVE is
 * switched off. Set a timestamp here to have it retire itself instead.
 */
export const PROMO_END: string | null = null;

/** Tagged onto both lead forms so promo leads are identifiable downstream. */
export const PROMO_CODE = "SEPT1000";

/** Legal copy, published verbatim wherever the offer is mentioned. */
export const PROMO_FINE_PRINT =
  "Up to $1,000 off a pair of hearing aids. Not valid with insurance claims. See clinic for details.";

const PROMO_END_MS = PROMO_END === null ? null : Date.parse(PROMO_END);

export function isPromoLive(now: number = Date.now()): boolean {
  if (!PROMO_ACTIVE) return false;
  return PROMO_END_MS === null || now < PROMO_END_MS;
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
 * Offer banner pinned to the top of the hero form card. Negative margins bleed it
 * to the card edges, cancelling the card's own padding.
 *
 * This runs full width at every breakpoint rather than becoming a rotated corner
 * seal on desktop. The headline is the point of the banner, and at this size it
 * measures wider than the hero card (~507px) can host beside its own heading: as a
 * corner seal it either covered the heading, floated away from the card, or was
 * clipped by the hero section's overflow. Full width gives the headline the whole
 * card to work with and keeps it attached to the card it belongs to.
 *
 * role="img" with a label keeps screen readers from announcing the four stacked
 * fragments separately, while the text itself stays real text rather than an image.
 */
export function PromoBadge() {
  return (
    <div
      role="img"
      aria-label="Promotion: up to $1,000 off a pair of hearing aids, this month only."
      className="relative z-10 -mx-6 -mt-6 mb-6 rounded-t-2xl bg-promo px-5 py-5 text-center text-promo-foreground shadow-lift ring-1 ring-promo-foreground/15 sm:-mx-8 sm:-mt-8"
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] xl:text-sm">Up to</p>
      <p className="font-display text-[2.75rem] font-extrabold leading-[0.9] tracking-tight sm:text-[3rem] xl:text-[4rem]">
        $1,000 OFF
      </p>
      <p className="mt-1.5 text-xs font-semibold leading-snug xl:text-sm">a pair of hearing aids</p>
      <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] xl:text-xs">
        This month only
      </p>
    </div>
  );
}
