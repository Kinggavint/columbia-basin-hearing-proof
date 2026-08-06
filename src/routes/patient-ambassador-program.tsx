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
  "Patient Ambassador Program | Volunteer to Share & Support Hearing Health — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Join our Patient Ambassador Program at Columbia Basin Hearing Center to promote hearing health, enjoy community rewards, and support loved ones' hearing journeys.";

const CDN = "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e";
const PROGRAM_LOGO = `${CDN}/4b16832a-9eff-4267-b61c-d7254cbaf840/Artboard+1%402x.png`;
const FRIENDS_PHOTO = `${CDN}/1715705692663-LM72S5I6R9X54FYIDTWX/image-asset.jpeg`;

const STEPS = [
  {
    title: "Get your cards",
    body: "Upon receiving a device fitting, our patients are provided with a set of four referral cards, each uniquely numbered to them.",
  },
  {
    title: "Share them",
    body: "They share these cards with friends and family who could benefit from our assistance.",
  },
  {
    title: "Both of you get a treat",
    body: "When a person with a referral card presents it during their appointment to receive top-notch hearing care, both the patient and the referral will be treated to a delightful Free Cupcake from Frost Me Sweet Bistro if they reside in the Tri-Cities Region, or a Truffle Treat Card from Bright's Candies if they're in the Walla Walla area.",
  },
  {
    title: "And if they move forward",
    body: "If the referred individual proceeds with hearing correction and purchases a device, we'll express our gratitude by sending the referrer a fifty-dollar gift card to one of the outstanding local businesses that enrich our community!",
  },
];

export const Route = createFileRoute("/patient-ambassador-program")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: FRIENDS_PHOTO }),
  component: PatientAmbassador,
});

function PatientAmbassador() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Patient Ambassador Program"
        title={
          <>
            Our best advocates are the people{" "}
            <span className="text-accent">we&apos;ve already helped.</span>
          </>
        }
        lead="We've observed that our most effective advocates for promoting better hearing health within the community are often those we've had the privilege to assist! That's why we're thrilled to introduce our exciting new initiative designed to benefit both our patients and those in their lives who may benefit from our services."
        image={PROGRAM_LOGO}
        imageAlt="Columbia Basin Hearing Center Patient Ambassador Program logo"
      >
        <div className="mt-8">
          <ButtonLink href={PRIMARY_TEL}>Ask about the program</ButtonLink>
        </div>
      </PageHero>

      <Section tone="surface">
        <SectionHeading
          eyebrow="How it works"
          title="It's as straightforward as that"
          lead="Participating in our Patient Ambassador Program couldn't be easier."
        />
        <ol className="mt-12 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <span className="font-display text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why it matters"
              title="Brighter and more fulfilling, one referral at a time"
            />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We trust that with our patients&apos; dedication to their hearing health and our
              compassionate expertise, each day moving forward will be brighter and more fulfilling.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={FRIENDS_PHOTO}
              alt="Two friends smiling and hugging on a balcony at sunset"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <CallToAction />
    </SiteLayout>
  );
}
