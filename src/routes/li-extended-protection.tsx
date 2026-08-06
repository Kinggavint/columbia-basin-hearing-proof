import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import {
  CallToAction,
  OfficeCallButtons,
  PageHero,
  Section,
  SectionHeading,
  pageMeta,
} from "@/components/site/blocks";

const TITLE =
  "L&I Extended Protection | Protect Your Hearing Devices Today — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Secure your hearing aids with Columbia Basin Hearing Center's L&I Extended Protection, offering affordable coverage for non-work-related loss or damage. Enroll today for peace of mind.";

const CDN = "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e";
const HERO_PHOTO = `${CDN}/1734635011562-M65IOX3FXKNMF29Q8V7A/unsplash-image-D46mXLsQRJw.jpg`;

const WHAT_TO_KNOW = [
  "Hearing aids issued by L&I only include one year of loss and damage coverage.",
  "If you lose your hearing aids after this period, L&I will not replace them.",
  "Replacing lost hearing aids requires you to pay full price for new devices to re-enter the L&I system.",
];

const BENEFITS = [
  "Protection against non-work-related loss or damage.",
  "Affordable yearly coverage at just $365.00 per year.",
  "Discounted rates for L&I workers.",
  "Access to loaner hearing aids (based on hearing loss) when needed.",
  "Support for timely claim processing to avoid delays.",
];

const COVERAGE = [
  { term: "Deductible", value: "$750 per hearing aid." },
  { term: "Earmold Deductible", value: "$110 per earmold or $325 per AP mold (if applicable)." },
  { term: "Accessories", value: "Additional charges may apply for accessories not covered by L&I." },
];

export const Route = createFileRoute("/li-extended-protection")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: HERO_PHOTO }),
  component: LIExtendedProtection,
});

function LIExtendedProtection() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="L&I Extended Loss & Damage Protection"
        title={
          <>
            Protect your hearing health{" "}
            <span className="text-accent">without worry.</span>
          </>
        }
        lead="Injured workers covered by Labor and Industries (L&I) need to know what their coverage actually includes — and where it stops."
        image={HERO_PHOTO}
        imageAlt="Construction site at dusk with multiple tower cranes under a blue sky"
      />

      <Section tone="surface">
        <SectionHeading eyebrow="Know this first" title="Where L&I coverage ends" />
        <ul className="mt-12 space-y-5">
          {WHAT_TO_KNOW.map((item, i) => (
            <li
              key={item}
              className="flex gap-6 rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-base font-bold text-primary">
                {i + 1}
              </span>
              <p className="pt-1.5 text-lg leading-relaxed text-ink">{item}</p>
            </li>
          ))}
        </ul>

        <figure className="mt-10 rounded-2xl border-l-4 border-accent bg-card p-8 shadow-soft">
          <figcaption className="eyebrow text-accent">L&I policy reminder</figcaption>
          <blockquote className="mt-4 text-lg leading-relaxed text-muted-foreground">
            L&amp;I will pay for repairs and replacement due to normal wear and tear. Any other loss
            or damage, such as those from non-work accidents, is the worker&apos;s responsibility.
            L&amp;I does not cover hearing aids that are lost, stolen, or damaged in non-work-related
            incidents.
          </blockquote>
        </figure>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our supplemental insurance program"
          title="We're here to bridge the gap"
          lead="So you can focus on your hearing health without unexpected expenses."
        />
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-ink">Benefits include</h3>
            <ul className="mt-6 space-y-4">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary"
                  >
                    ✓
                  </span>
                  <span className="text-base leading-relaxed text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-ink">Coverage details</h3>
            <dl className="mt-6 space-y-5">
              {COVERAGE.map((item) => (
                <div key={item.term}>
                  <dt className="text-sm font-semibold text-accent">{item.term}</dt>
                  <dd className="mt-1 text-base leading-relaxed text-muted-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Get started today!"
          title="Protect your hearing aids and ensure uninterrupted hearing care"
          lead="Contact us for more information or to enroll."
        />
        <OfficeCallButtons />
      </Section>

      <CallToAction />
    </SiteLayout>
  );
}
