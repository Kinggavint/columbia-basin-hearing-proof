import type { FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG, LOCATIONS, RATING, STORIES } from "@/components/site/content";
import { Wordmark } from "@/components/site/layout";
import { CardGrid, NumberedCard, pageMeta, Section, SectionHeading } from "@/components/site/blocks";

/** Campaign-specific tracking number — keep separate from PRIMARY_TEL so call attribution stays clean. */
const LANDING_PHONE = "(509) 410-7644";
const LANDING_TEL = "tel:15094107644";

/** Published on the clinic's live contact page. */
const CONTACT_EMAIL = "contactus@columbiabasinhearing.com";

const TITLE = "Struggling to Hear? Schedule Your Evaluation | Columbia Basin Hearing Center";
const DESCRIPTION =
  "One appointment, a clear plan, and conversations you've been missing becoming a thing of the past. Nearly 50 years of audiology care in the Tri-Cities. Call now or request a callback.";

const SYMPTOMS = [
  "Turning the TV up until someone in the room complains",
  "Asking “what?” or “can you repeat that?” several times a day",
  "Nodding along in conversations, hoping you followed enough",
  "Skipping restaurants, parties, and family gatherings because it's just easier",
  "Missing what your grandkids say — and pretending you didn't",
  "Feeling like everyone around you has started mumbling",
];

const BENEFITS = [
  {
    title: "Real answers, same day",
    body: "A full audiological evaluation goes beyond a basic screening — you'll leave knowing exactly what's happening and exactly what to do about it.",
  },
  {
    title: "A doctor who knows your name",
    body: "Not a kiosk, not a call center. Dr. Shannon Marie and her team have been caring for Tri-Cities families for nearly 50 years.",
  },
  {
    title: "A plan built for your life",
    body: "Every budget, every lifestyle. We match you to technology that actually works for you — not whatever's easiest to sell.",
  },
];

export const Route = createFileRoute("/hearing")({
  head: () => {
    const base = pageMeta({ title: TITLE, description: DESCRIPTION, image: IMG.listening });
    return {
      // Ad-traffic landing page: keep it out of search results so it never competes
      // with the main site's organic rankings.
      meta: [...base.meta, { name: "robots", content: "noindex, follow" }],
    };
  },
  component: HearingLanding,
});

/**
 * No form backend exists yet (same limitation as /contact-us), so the form composes
 * a message in the visitor's own mail client. Replace with a real endpoint before
 * spending ad budget against this page.
 */
function openMailClient(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const get = (k: string) => String(data.get(k) ?? "").trim();
  const subject = `Callback request (hearing landing page) — ${get("firstName")} ${get("lastName")}`.trim();
  const body = [
    `Name: ${get("firstName")} ${get("lastName")}`,
    `Phone: ${get("phone")}`,
    `Best time to call: ${get("bestTime")}`,
    `Nearest clinic: ${get("location")}`,
    "",
    get("message"),
  ].join("\n");
  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-ring/40"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-base text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
      >
        <option value="" disabled>
          Select...
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

/** Stripped-down header for a paid-traffic landing page: logo + one CTA, no nav to bounce visitors into. */
function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" aria-label="Columbia Basin Hearing Center home" className="shrink-0">
          <Wordmark />
        </Link>
        <a
          href={LANDING_TEL}
          className="whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
        >
          Call {LANDING_PHONE}
        </a>
      </div>
    </header>
  );
}

function LandingFooter() {
  return (
    <footer className="bg-ink py-10 text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <Wordmark tone="dark" className="h-10" />
        <div className="mt-6 flex flex-wrap gap-x-10 gap-y-2 text-sm text-ink-foreground/70">
          {LOCATIONS.map((loc) => (
            <span key={loc.city}>
              <span className="font-semibold text-ink-foreground">{loc.city}:</span> {loc.street},{" "}
              {loc.cityStateZip}
            </span>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-foreground/55">
          &copy; {new Date().getFullYear()} Columbia Basin Hearing Center. Better Living Through Better
          Hearing.
        </p>
      </div>
    </footer>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full brand-gradient opacity-[0.07] blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-14">
        <div>
          <p className="eyebrow text-accent">Nearly 50 Years of Care in the Tri-Cities</p>
          <h1 className="mt-4 text-4xl font-bold uppercase leading-[1.05] text-ink sm:text-5xl lg:text-[3.4rem]">
            You&apos;ve lived with hearing loss for years.{" "}
            <span className="text-accent">Solve it in one visit.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We know how exhausting it is to ask people to repeat themselves. By this weekend, you could
            be hearing every word. One appointment, a clear plan, and conversations you&apos;ve been
            missing becoming a thing of the past.
          </p>
          <div className="mt-7">
            <a
              href={LANDING_TEL}
              className="inline-block rounded-full bg-primary px-8 py-4 text-center text-base font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
            >
              Call Now: {LANDING_PHONE}
            </a>
          </div>
          <dl className="mt-8 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6 sm:gap-6">
            <div>
              <dt className="font-display text-3xl font-bold text-primary">50</dt>
              <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">Years of care</dd>
            </div>
            <div>
              <dt
                className="text-lg tracking-[0.2em] text-accent sm:text-xl"
                aria-label={`${RATING.value} out of 5 stars`}
              >
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </dt>
              <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {RATING.value} &middot; {RATING.count} reviews
              </dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-bold text-primary">3</dt>
              <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">Tri-Cities locations</dd>
            </div>
          </dl>
        </div>

        <div className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-2 rounded-[1.75rem] brand-gradient opacity-90" />
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-lift sm:p-8">
              <h2 className="text-lg font-semibold text-ink">Request a Call Back</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We&apos;ll call you back to schedule your visit.
              </p>
              <form className="mt-6 space-y-4" onSubmit={openMailClient}>
                <Field label="First name" name="firstName" required autoComplete="given-name" />
                <Field label="Last name" name="lastName" required autoComplete="family-name" />
                <Field label="Phone number" name="phone" type="tel" required autoComplete="tel" />
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Request My Callback
                </button>
              </form>
              <p className="mt-4 text-xs text-muted-foreground">
                No obligation. We&apos;ll never share your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-3.5">
      <path
        d="M4 10l4 4 8-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SymptomsSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Sound familiar?"
        title="You shouldn't have to fight this hard just to be part of the conversation."
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {SYMPTOMS.map((s) => (
          <li
            key={s}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-accent"
            >
              <CheckIcon />
            </span>
            <span className="text-base leading-relaxed text-ink">{s}</span>
          </li>
        ))}
      </ul>
      <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        If even one of these sounds familiar, you don&apos;t have to keep managing around it. One visit
        can tell you exactly what&apos;s going on &mdash; and exactly how to fix it.
      </p>
      <a
        href={LANDING_TEL}
        className="mt-6 inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
      >
        Call {LANDING_PHONE}
      </a>
    </Section>
  );
}

function BenefitsSection() {
  return (
    <Section tone="surface">
      <SectionHeading eyebrow="Why one visit" title="What changes the moment you walk in" />
      <CardGrid cols="md:grid-cols-3">
        {BENEFITS.map((b, i) => (
          <NumberedCard key={b.title} index={i + 1} title={b.title} body={b.body} />
        ))}
      </CardGrid>
    </Section>
  );
}

function SocialProofSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Real patients"
        title={
          <>
            {RATING.value}{" "}
            <span className="text-xl font-medium text-muted-foreground">
              out of 5 &mdash; {RATING.count} Google reviews
            </span>
          </>
        }
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {STORIES.map((s) => (
          <figure
            key={s.name}
            className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <img
              src={s.photo}
              alt={s.name}
              loading="lazy"
              className="size-14 rounded-full bg-secondary object-cover"
            />
            <blockquote className="text-base leading-relaxed text-ink">{s.quote}</blockquote>
            <figcaption className="text-sm font-semibold text-muted-foreground">{s.name}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

function CallbackFormSection() {
  return (
    <Section id="callback-form" tone="surface">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading
            eyebrow="Take the next step"
            title="Request Your Callback"
            lead="Tell us the best way and time to reach you. A Patient Ambassador will call to schedule your hearing evaluation."
          />
          <form className="mt-10 space-y-5" onSubmit={openMailClient}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="First name" name="firstName" required autoComplete="given-name" />
              <Field label="Last name" name="lastName" required autoComplete="family-name" />
            </div>
            <Field label="Phone number" name="phone" type="tel" required autoComplete="tel" />
            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField label="Best time to call" name="bestTime" options={["Morning", "Afternoon", "Evening"]} />
              <SelectField label="Nearest clinic" name="location" options={LOCATIONS.map((l) => l.city)} />
            </div>
            <label className="block">
              <span className="text-sm font-semibold text-ink">Anything we should know?</span>
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-base text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
            >
              Request My Callback
            </button>
            <p className="text-sm text-muted-foreground">
              Prefer to talk now? Call{" "}
              <a href={LANDING_TEL} className="font-semibold text-primary hover:underline">
                {LANDING_PHONE}
              </a>
              .
            </p>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <h3 className="text-lg font-semibold text-ink">What happens next</h3>
            <ol className="mt-5 space-y-4">
              <li className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-sm font-bold text-primary">
                  1
                </span>
                <p className="pt-1 text-sm leading-relaxed text-muted-foreground">
                  We call you back to confirm the details.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-sm font-bold text-primary">
                  2
                </span>
                <p className="pt-1 text-sm leading-relaxed text-muted-foreground">
                  We schedule your comprehensive hearing evaluation at the clinic nearest you.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-sm font-bold text-primary">
                  3
                </span>
                <p className="pt-1 text-sm leading-relaxed text-muted-foreground">
                  You leave with real answers and a clear plan &mdash; no guessing, no pressure.
                </p>
              </li>
            </ol>
          </div>
          <div className="rounded-2xl bg-ink p-7 text-ink-foreground shadow-soft">
            <p className="eyebrow text-ink-foreground/60">Trusted locally</p>
            <p className="mt-3 text-3xl font-bold">
              {RATING.value}
              <span className="text-lg font-medium text-ink-foreground/70"> / 5</span>
            </p>
            <p className="mt-1 text-sm text-ink-foreground/70">
              {RATING.count} Google reviews &middot; Nearly 50 years of care &middot; 3 Tri-Cities
              locations
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <Section tone="gradient">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight text-ink-foreground sm:text-4xl">
          Ready to hear clearly again?
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink-foreground/80">
          A comprehensive evaluation, a personalized plan, and a clear path toward better everyday
          hearing. Nearly 50 years of doing exactly this for Tri-Cities families.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={LANDING_TEL}
            className="rounded-full bg-background px-8 py-4 text-base font-semibold text-primary shadow-soft transition-opacity hover:opacity-90"
          >
            Call Now: {LANDING_PHONE}
          </a>
          <a
            href="#callback-form"
            className="rounded-full border border-ink-foreground/30 px-8 py-4 text-base font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
          >
            Request a Callback
          </a>
        </div>
      </div>
    </Section>
  );
}

function HearingLanding() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <LandingHeader />
      <main id="main">
        <Hero />
        <SymptomsSection />
        <BenefitsSection />
        <SocialProofSection />
        <CallbackFormSection />
        <FinalCta />
      </main>
      <LandingFooter />
    </div>
  );
}
