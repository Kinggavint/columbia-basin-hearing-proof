import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import {
  ButtonLink,
  CallToAction,
  PageHero,
  Section,
  SectionHeading,
  pageMeta,
} from "@/components/site/blocks";
import { PRIMARY_TEL } from "@/components/site/content";

const TITLE =
  "Hearing Heroes | Empower Hearing Journeys – Contribute Now — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Support hearing health in Tri-Cities with Columbia Basin Hearing Center's Hearing Heroes program, providing affordable hearing aids to those in need. Contribute today.";

const CDN = "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e";

const PILLARS = [
  {
    label: "What we do",
    image: `${CDN}/a812b57b-0bf8-4ddf-959b-35977a99570f/CBH-02.jpg`,
    alt: "A smiling audiologist wearing a white jacket over a black and white striped top",
    body: "At Columbia Basin Hearing Center, our doctors and providers leverage manufacturer programs to obtain hearing aids for individuals living at or below the poverty line. Through these programs, we bring in low-cost hearing devices to assist those who otherwise could not afford them. We volunteer our time for appointments dedicated to treating members of our community who lack the financial means. If an individual has a treatable hearing deficit, we will ensure they receive hearing aids through our Hearing Heroes initiative.",
  },
  {
    label: "What you do",
    image: `${CDN}/1715709536309-3C5K9YR691HLRRZNXFTP/image-asset.jpeg`,
    alt: "A smiling man with a beard sitting at a desk, talking on a cell phone in a modern office",
    body: "By donating to the Hearing Heroes program, your organization will ensure a continuous supply of hearing aids for those in need within the Tri-Cities community. Donations can be made as a one-time contribution or on a recurring basis. Regardless of the type of giving you choose, every dollar donated to this program goes directly towards purchasing hearing devices. Columbia Basin Hearing Center covers all administrative costs and treatment services, ensuring that every penny directly benefits individuals with hearing loss in the Tri-Cities.",
  },
  {
    label: "What you get",
    image: `${CDN}/1715709489054-C2BNZFQU7AUSZOMYPKKC/image-asset.jpeg`,
    alt: "A group of people meeting around a conference table with laptops",
    body: "When you donate to the Hearing Heroes Program, your business name and logo will be featured on our program web page. Additionally, you can include materials in the bags we distribute to those receiving our services. Your business will also be mentioned in our social media posts promoting the program. Sustaining monthly donors will receive recognition in our mainstream media promotions, including TV, radio, and print. Most importantly, you will have the satisfaction of knowing that your contribution is helping individuals in our community live happier, more fulfilled lives, free from the barriers of hearing loss.",
  },
];

const DONORS = [
  {
    name: "Salus Disability Law",
    logo: `${CDN}/8ebc2e7d-1895-4b85-9365-8b40d6302bce/400dpiLogo.png`,
    logoAlt: "Logo for Salus Disability Law featuring a stylized column",
    body: "Inspired by Salus, the Roman Goddess of welfare, health and prosperity, the Salus team is committed to guiding you through the complex world of the disability system.",
    cta: { label: "Call Salus Disability Law", href: "tel:12064854066" },
  },
];

export const Route = createFileRoute("/hearing-heroes")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION }),
  component: HearingHeroes,
});

function HearingHeroes() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Hearing Heroes"
        title={
          <>
            Hearing aids for anyone who needs them —{" "}
            <span className="text-accent">regardless of ability to pay.</span>
          </>
        }
        lead="Our Hearing Heroes Program is dedicated to empowering individuals in the Tri-Cities community who suffer from hearing loss. We provide access to hearing aids, ensuring everyone can live their lives to the fullest, regardless of their ability to pay."
      >
        <div className="mt-8">
          <ButtonLink href={PRIMARY_TEL}>Call to contribute</ButtonLink>
        </div>
      </PageHero>

      <Section tone="surface">
        <SectionHeading eyebrow="How it works" title="Three parts, one outcome" />
        <div className="mt-12 space-y-8">
          {PILLARS.map((pillar, i) => (
            <article
              key={pillar.label}
              /*
               * Alternating rows swap the order AND the template together, so the photo
               * always lands in the narrow track. Swapping only one of them puts the
               * photo in the 1fr column and squeezes the copy.
               */
              className={`grid gap-0 overflow-hidden rounded-2xl border border-border bg-card shadow-soft ${
                i % 2 === 1
                  ? "lg:grid-cols-[1fr_minmax(0,22rem)]"
                  : "lg:grid-cols-[minmax(0,22rem)_1fr]"
              }`}
            >
              <div className={`bg-secondary ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover lg:h-full"
                />
              </div>
              <div className={`p-8 lg:p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="eyebrow text-accent">{pillar.label}</p>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{pillar.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Thank you" title="Our Hearing Heroes donors" />
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
          {DONORS.map((donor) => (
            <article
              key={donor.name}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <div className="flex h-28 items-center justify-start">
                <img
                  src={donor.logo}
                  alt={donor.logoAlt}
                  loading="lazy"
                  className="h-24 w-auto object-contain"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">{donor.name}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{donor.body}</p>
              <a
                href={donor.cta.href}
                className="mt-6 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                {donor.cta.label} &rarr;
              </a>
            </article>
          ))}
        </div>
      </Section>

      <CallToAction
        title="Want your business on this page?"
        body="Every dollar donated buys hearing devices — we cover the admin and the care. Call to set up a one-time or recurring contribution."
      />
    </SiteLayout>
  );
}
