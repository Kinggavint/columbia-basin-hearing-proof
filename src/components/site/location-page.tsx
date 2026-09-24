import { Link } from "@tanstack/react-router";
import { SiteLayout } from "./layout";
import { CallToAction, Section, SectionHeading } from "./blocks";
import { ClinicJsonLd } from "./structured-data";
import { PROVIDERS, REVIEWS } from "./content";
import { CLINIC_SERVICES, type Clinic } from "./locations";

/**
 * Shared layout for the three clinic pages. Every word a search engine weighs —
 * H1, intro, directions, FAQs, served communities, title and description — comes
 * from the clinic's own record in locations.ts, so the pages read as three
 * distinct pages rather than one template with the city swapped out.
 */
export function LocationPage({ clinic }: { clinic: Clinic }) {
  return (
    <SiteLayout>
      <ClinicJsonLd clinic={clinic} />

      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full brand-gradient opacity-[0.07] blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="eyebrow text-accent">{clinic.city}, Washington</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] text-ink sm:text-5xl">
              {clinic.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {clinic.intro[0]}
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Clinic details
              </h2>
              <address className="mt-4 not-italic text-lg leading-relaxed text-ink">
                Columbia Basin Hearing Center
                <br />
                {clinic.street}
                <br />
                {clinic.cityStateZip}
              </address>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={clinic.tel}
                  className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Call {clinic.phone}
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.mapQuery)}`}
                  className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-border shadow-lift">
              <iframe
                title={`Map of the Columbia Basin Hearing Center clinic in ${clinic.city}, WA`}
                loading="lazy"
                className="h-72 w-full border-0 lg:h-80"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`}
              />
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Hours
              </h2>
              <dl className="mt-4 space-y-2">
                {clinic.hours.display.map((row) => (
                  <div key={row.days} className="flex flex-wrap justify-between gap-x-6 gap-y-1">
                    <dt className="text-base text-muted-foreground">{row.days}</dt>
                    <dd className="text-base font-semibold text-ink">{row.hours}</dd>
                  </div>
                ))}
              </dl>
              {clinic.hours.note && (
                <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                  {clinic.hours.note}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl space-y-5">
            {clinic.intro.slice(1).map((p) => (
              <p key={p.slice(0, 40)} className="text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <h2 className="text-lg font-semibold text-ink">Communities we see patients from</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {clinic.serves.map((place) => (
                <li
                  key={place}
                  className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-primary"
                >
                  {place}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Looking for a different clinic?{" "}
              <Link
                to="/locations"
                className="font-semibold text-primary underline underline-offset-4"
              >
                See all three locations
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Services"
          title={`What we do at our ${clinic.city} clinic`}
          lead="Diagnostics, devices, and the follow-up care that makes the devices worth having."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {CLINIC_SERVICES.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-base text-muted-foreground">
          We also handle pediatric testing, cochlear and Baha programming, and industrial
          screenings.{" "}
          <Link to="/services" className="font-semibold text-primary underline underline-offset-4">
            See the full list of services
          </Link>
          .
        </p>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Getting here"
          title={`Finding the ${clinic.city} clinic`}
          lead="Directions, parking and how long to allow."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {clinic.gettingHere.map((g) => (
            <article
              key={g.heading}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <h3 className="text-lg font-semibold text-ink">{g.heading}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{g.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Your care team"
          title="The audiologists and staff behind this clinic"
          lead="Columbia Basin Hearing Center is one practice across three clinics, and this is the team that runs it."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROVIDERS.map((p) => (
            <article
              key={p.name}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <img
                src={p.photo}
                alt={p.name}
                loading="lazy"
                className="size-16 shrink-0 rounded-full bg-secondary object-cover"
              />
              <div>
                <h3 className="text-base font-semibold text-ink">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-base text-muted-foreground">
          <Link to="/about-us" className="font-semibold text-primary underline underline-offset-4">
            Read the full team biographies
          </Link>
          .
        </p>
      </Section>

      <Section tone="surface">
        {/*
          Labelled at practice level on purpose. These are real Google reviews for
          Columbia Basin Hearing Center, but they are not attributed to a specific
          clinic, so presenting them as reviews of this clinic would be a claim the
          source does not support.
        */}
        <SectionHeading
          eyebrow="Patient reviews"
          title="What patients say about Columbia Basin Hearing Center"
          lead="Reviews left for the practice on Google."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {REVIEWS.slice(0, 4).map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <blockquote className="text-base leading-relaxed text-ink">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">
                {r.name} &middot; {r.date}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Questions"
          title={`Common questions about our ${clinic.city} clinic`}
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border border-y border-border">
          {clinic.faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold text-ink marker:content-none">
                {f.q}
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-accent transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CallToAction
        title={`Book your visit to our ${clinic.city} clinic`}
        body={`Call the ${clinic.city} office directly, or send a message and a Patient Ambassador will call you back.`}
        phone={clinic.phone}
        tel={clinic.tel}
      />
    </SiteLayout>
  );
}
