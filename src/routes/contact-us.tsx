import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { CallToAction, PageHero, Section, SectionHeading, pageMeta } from "@/components/site/blocks";
import { LOCATIONS, PRIMARY_PHONE, PRIMARY_TEL } from "@/components/site/content";
import { PATIENT_PORTAL } from "@/components/site/nav";

const TITLE =
  "Contact Us | Schedule Your Hearing Consultation Today — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Contact Columbia Basin Hearing Center for hearing assessments, resources, and expert support across Kennewick, West Richland, and Walla Walla, WA.";

/** Direct contacts published on the original contact page. */
const DIRECT_CONTACTS = [
  {
    heading: "Industrial screenings & quotes",
    person: "Carey Palazzo, Practice Manager",
    body: "For industrial screenings or inquiries regarding quotes for your company or firm, please contact us directly and ask to speak with Carey Palazzo, our Practice Manager.",
  },
  {
    heading: "Sponsorships, partnerships & marketing",
    person: "Michael Crow, Brand and Culture Manager",
    body: "Should you have any inquiries pertaining to sponsorships, partnerships or marketing, please dial our main line and ask for Michael Crow, our Brand and Culture Manager.",
  },
];

/** Published on the clinic's live contact page. */
const CONTACT_EMAIL = "contactus@columbiabasinhearing.com";

/**
 * No form backend exists yet, so the form composes a message in the visitor's own
 * mail client. `action="mailto:"` with method=post is unreliable across browsers;
 * building the URL ourselves is not. Replace this with a real endpoint before launch.
 */
function openMailClient(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const get = (k: string) => String(data.get(k) ?? "").trim();
  const subject = `Website enquiry from ${get("firstName")} ${get("lastName")}`.trim();
  const body = [
    `Name: ${get("firstName")} ${get("lastName")}`,
    `Email: ${get("email")}`,
    `Phone: ${get("phone")}`,
    "",
    get("message"),
  ].join("\n");
  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const Route = createFileRoute("/contact-us")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION }),
  component: ContactUs,
});

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

function ContactUs() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Reach out to us — we&apos;ll{" "}
            <span className="text-accent">call you back.</span>
          </>
        }
        lead="If you have any feedback to share, wish to schedule an appointment for a hearing screening, or seek consultation, kindly complete the form, ensuring to include your phone number for follow-up. Our dedicated Patient Ambassadors will promptly reach out to arrange an appointment or forward your message to the relevant department."
      />

      <Section tone="surface">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading eyebrow="Send a message" title="Tell us how we can help" />
            <form className="mt-10 space-y-5" onSubmit={openMailClient}>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First name" name="firstName" required autoComplete="given-name" />
                <Field label="Last name" name="lastName" required autoComplete="family-name" />
              </div>
              <Field label="Email" name="email" type="email" required autoComplete="email" />
              <Field label="Phone number" name="phone" type="tel" required autoComplete="tel" />
              <label className="block">
                <span className="text-sm font-semibold text-ink">
                  Message<span className="text-accent"> *</span>
                </span>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-base text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Send message
              </button>
              <p className="text-sm text-muted-foreground">
                Prefer to talk now? Call{" "}
                <a href={PRIMARY_TEL} className="font-semibold text-primary hover:underline">
                  {PRIMARY_PHONE}
                </a>
                . Existing patients can also use the{" "}
                <a href={PATIENT_PORTAL} className="font-semibold text-primary hover:underline">
                  patient portal
                </a>
                .
              </p>
            </form>
          </div>

          <div className="space-y-6">
            {DIRECT_CONTACTS.map((c) => (
              <article
                key={c.heading}
                className="rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <h3 className="text-lg font-semibold text-ink">{c.heading}</h3>
                <p className="mt-1 text-sm font-semibold text-accent">{c.person}</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{c.body}</p>
                <a
                  href={PRIMARY_TEL}
                  className="mt-5 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Call {PRIMARY_PHONE} &rarr;
                </a>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Locations"
          title="Three clinics across the Columbia Basin"
          lead="Kennewick, West Richland, and Walla Walla — each with its own direct line."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <article
              key={loc.city}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <iframe
                title={`Map of the ${loc.city} clinic`}
                loading="lazy"
                className="h-56 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&output=embed`}
              />
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-semibold text-ink">{loc.city}</h3>
                <address className="mt-3 not-italic text-base leading-relaxed text-muted-foreground">
                  {loc.street}
                  <br />
                  {loc.cityStateZip}
                </address>
                <div className="mt-auto pt-6">
                  <a
                    href={loc.tel}
                    className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    {loc.phone}
                  </a>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.mapQuery)}`}
                    className="mt-3 block rounded-full border border-border px-5 py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                  >
                    Get directions
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CallToAction />
    </SiteLayout>
  );
}
