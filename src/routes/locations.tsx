import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import {
  CallToAction,
  PageHero,
  Section,
  SectionHeading,
  pageMeta,
} from "@/components/site/blocks";
import { CLINICS } from "@/components/site/locations";
import { RATING } from "@/components/site/content";

const TITLE =
  "Our Locations | Audiologists in Kennewick, West Richland & Walla Walla | Columbia Basin Hearing Center";
const DESCRIPTION =
  "Three Columbia Basin Hearing Center clinics across southeast Washington: Kennewick, West Richland and Walla Walla. Addresses, hours, direct phone numbers and directions.";

export const Route = createFileRoute("/locations")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/locations" }),
  component: Locations,
});

function Locations() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our locations"
        title={
          <>
            Three clinics across the <span className="text-accent">Columbia Basin.</span>
          </>
        }
        lead="Columbia Basin Hearing Center has cared for hearing in southeast Washington for nearly fifty years, from clinics in Kennewick, West Richland and Walla Walla. Each has its own direct line and its own page with hours, directions and parking. Pick whichever is easiest to get to — it is one practice and one set of patient records, so your audiologist can see your history wherever you are sitting."
      />

      <Section tone="surface">
        <SectionHeading
          eyebrow="Find your clinic"
          title="Addresses, hours and direct numbers"
          lead={`Rated ${RATING.value} out of 5 across ${RATING.count} Google reviews.`}
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {CLINICS.map((clinic) => (
            <article
              key={clinic.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <iframe
                title={`Map of the Columbia Basin Hearing Center clinic in ${clinic.city}, WA`}
                loading="lazy"
                className="h-52 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`}
              />
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl font-semibold text-ink">{clinic.city}</h3>
                <address className="mt-3 not-italic text-base leading-relaxed text-muted-foreground">
                  {clinic.street}
                  <br />
                  {clinic.cityStateZip}
                </address>

                <dl className="mt-5 space-y-1.5 border-t border-border pt-5">
                  {clinic.hours.display.map((row) => (
                    <div key={row.days} className="flex flex-wrap justify-between gap-x-4">
                      <dt className="text-sm text-muted-foreground">{row.days}</dt>
                      <dd className="text-sm font-semibold text-ink">{row.hours}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-auto space-y-3 pt-6">
                  <a
                    href={clinic.tel}
                    className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Call {clinic.phone}
                  </a>
                  <Link
                    to={`/${clinic.slug}`}
                    className="block rounded-full border border-border px-5 py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                  >
                    {clinic.city} clinic details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Service area"
          title="Who we see across southeast Washington"
          lead="Patients travel to us from across the Columbia Basin and the Walla Walla valley, and from just over the Oregon line."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CLINICS.map((clinic) => (
            <div
              key={clinic.slug}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <h3 className="text-lg font-semibold text-ink">Nearest to {clinic.city}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {clinic.serves.map((place) => (
                  <li
                    key={place}
                    className="rounded-full bg-secondary px-3.5 py-1.5 text-sm font-medium text-primary"
                  >
                    {place}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CallToAction />
    </SiteLayout>
  );
}
