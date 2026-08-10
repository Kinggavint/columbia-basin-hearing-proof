import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { LOCATIONS, PRIMARY_PHONE, PRIMARY_TEL } from "./content";

/** Page-level hero used by every interior page. */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full brand-gradient opacity-[0.07] blur-3xl"
      />
      <div
        className={`mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:py-20 ${
          image ? "lg:grid-cols-[1.05fr_0.95fr]" : ""
        }`}
      >
        <div className={image ? "" : "max-w-3xl"}>
          {eyebrow && <p className="eyebrow text-accent">{eyebrow}</p>}
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] text-ink sm:text-5xl">{title}</h1>
          {lead && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
          )}
          {children}
        </div>
        {image && (
          /*
           * The gradient is an offset plate sized to the image itself. Positioning it
           * against the column instead lets it stick out past short or wide images.
           */
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 -left-2 -top-2 rounded-[1.75rem] brand-gradient opacity-90"
              />
              <img
                src={image}
                alt={imageAlt ?? ""}
                loading="eager"
                className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-lift"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/** Standard content section with the homepage's vertical rhythm. */
export function Section({
  children,
  tone = "background",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "background" | "surface" | "gradient" | "ink";
  className?: string;
  id?: string;
}) {
  const tones = {
    background: "bg-background",
    surface: "bg-surface",
    gradient: "brand-gradient text-ink-foreground",
    ink: "bg-ink text-ink-foreground",
  } as const;

  return (
    <section id={id} className={`border-b border-border py-20 sm:py-24 ${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  invert?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className={`eyebrow ${invert ? "text-ink-foreground/70" : "text-accent"}`}>{eyebrow}</p>
      )}
      <h2
        className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl ${
          invert ? "text-ink-foreground" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            invert ? "text-ink-foreground/80" : "text-muted-foreground"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/** Long-form body copy: renders an array of paragraphs at a readable measure. */
export function Prose({ paragraphs, invert = false }: { paragraphs: string[]; invert?: boolean }) {
  return (
    <div className="mt-6 space-y-5">
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className={`text-lg leading-relaxed ${
            invert ? "text-ink-foreground/80" : "text-muted-foreground"
          }`}
        >
          {p}
        </p>
      ))}
    </div>
  );
}

export function ButtonLink({
  href,
  to,
  children,
  variant = "primary",
  className = "",
}: {
  href?: string;
  to?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "onDark";
  className?: string;
}) {
  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-soft hover:opacity-90",
    outline:
      "border border-border bg-card text-primary hover:bg-secondary",
    onDark: "bg-background text-primary hover:opacity-90",
  } as const;

  const cls = `inline-block whitespace-nowrap rounded-full px-7 py-3.5 text-sm font-semibold transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

/**
 * Inline text link to an internal route.
 * Takes a plain string so pages can link to routes that land in a later build phase.
 */
export function TextLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`font-semibold text-primary underline-offset-4 hover:underline ${className}`}
    >
      {children}
    </Link>
  );
}

/** Bordered card grid — the "gap-px on border background" trick from the homepage. */
export function CardGrid({
  children,
  cols = "md:grid-cols-2 xl:grid-cols-3",
}: {
  children: ReactNode;
  cols?: string;
}) {
  return (
    <div className={`mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border ${cols}`}>
      {children}
    </div>
  );
}

export function NumberedCard({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <article className="bg-card p-8">
      <span className="font-display text-sm font-semibold text-accent">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </article>
  );
}

/** Closing call-to-action used at the bottom of interior pages. */
export function CallToAction({
  title = "Ready to hear what you've been missing?",
  body = "Comprehensive evaluation, personalized guidance, and a clear path toward better everyday hearing. Call the clinic nearest you.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <Section tone="gradient">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-ink-foreground sm:text-4xl">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-foreground/80">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={PRIMARY_TEL} variant="onDark">
              Call {PRIMARY_PHONE}
            </ButtonLink>
            <Link
              to="/contact-us"
              className="inline-block rounded-full border border-ink-foreground/30 px-7 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
            >
              Send us a message
            </Link>
          </div>
        </div>
        <ul className="grid gap-3">
          {LOCATIONS.map((loc) => (
            <li key={loc.city}>
              <a
                href={loc.tel}
                className="group flex items-center justify-between gap-4 rounded-2xl bg-background/95 px-6 py-4 shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <span>
                  <span className="eyebrow block text-muted-foreground">{loc.city}</span>
                  <span className="mt-1 block font-display text-lg font-semibold text-primary">
                    {loc.phone}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-accent transition-transform group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/** "Call our X Office" pill row — repeated across several interior pages. */
export function OfficeCallButtons({ suffix = "Office" }: { suffix?: string }) {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {LOCATIONS.map((loc) => (
        <a
          key={loc.city}
          href={loc.tel}
          className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Call our {loc.city} {suffix}
        </a>
      ))}
    </div>
  );
}

/** Compact three-up location strip. */
export function LocationStrip() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-px px-6 py-5 sm:grid-cols-3">
        {LOCATIONS.map((loc) => (
          <a
            key={loc.city}
            href={loc.tel}
            className="group flex items-center justify-between gap-4 px-2 py-2 sm:px-6"
          >
            <span>
              <span className="eyebrow block text-muted-foreground">{loc.city}</span>
              <span className="mt-1 block font-display text-xl font-semibold text-primary">
                {loc.phone}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="text-accent transition-transform group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

/** Shared <head> meta builder so every page sets title/description/OG consistently. */
export function pageMeta({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}) {
  const og = image ?? "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/c8ffc0e6-4cea-45b5-9e54-e321e5970f77/Hearing+Small+Size.jpg";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: og },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: og },
    ],
  };
}
