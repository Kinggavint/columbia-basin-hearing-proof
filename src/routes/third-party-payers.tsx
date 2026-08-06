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
  "Third Party Payers | Explore Coverage Options — Make Informed Choices — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Learn about third-party payers like UnitedHealthcare and TruHearing, their impact on hearing aid options, and how to optimize your hearing health care choices.";

const CDN = "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e";
const HERO_PHOTO = `${CDN}/1734633401683-Z4UJXAMLKUD2JVHJDMS2/unsplash-image-MNmLTgotAVA.jpg`;

const HOW_IT_WORKS = [
  {
    title: "Restricted networks",
    body: "Restricted networks like these often require you to use specific providers within a limited network, and you may not be able to see your preferred audiologist or hearing aid provider.",
  },
  {
    title: "A narrow selection of devices",
    body: "You'll also have access to a narrow selection of hearing aids, typically lower-end models or older technology that may not fully meet your specific hearing needs.",
  },
  {
    title: "Costs that show up later",
    body: "While the initial prices may seem lower, additional services like follow-up appointments, repairs, and adjustments may incur extra costs, which add up over time, especially if you have to travel to and from the in-network provider.",
  },
];

const IMPACT = [
  "Being limited to a network of providers can restrict your access to quality care, so you might have to travel farther or settle for less experienced providers.",
  "Limited options mean that you might not get the best device for your specific needs, not meeting expectations and impacting your hearing health experience, meaning your quality of life and hearing experience may not be as good as expected.",
  "These sorts of models are designed to minimize costs for the insurance company — for you, your patient care and satisfaction might be one of the expenses they skip over.",
];

export const Route = createFileRoute("/third-party-payers")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: HERO_PHOTO }),
  component: ThirdPartyPayers,
});

function ThirdPartyPayers() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Third-party payers"
        title={
          <>
            Understanding third-party{" "}
            <span className="text-accent">hearing aid payers.</span>
          </>
        }
        lead="When it comes to hearing aid coverage, it's important to understand the role of third-party hearing aid payers such as UnitedHealthcare Hearing, TruHearing, Nations Hearing, or Hearing Care Solutions. These companies are often marketed as benefits through your insurance plan, but they aim to reduce costs for the insurance company – not necessarily to benefit you and what you need."
        image={HERO_PHOTO}
        imageAlt="An audiologist examining a patient's ear with an otoscope while he smiles"
      />

      <Section tone="surface">
        <SectionHeading eyebrow="The mechanics" title="How third-party hearing aid payers work" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {HOW_IT_WORKS.map((item, i) => (
            <article key={item.title} className="bg-card p-8">
              <span className="font-display text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What it means for you" title="The impact on your care" />
        <ul className="mt-12 space-y-5">
          {IMPACT.map((point) => (
            <li
              key={point}
              className="flex gap-5 rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <span
                aria-hidden="true"
                className="mt-2 size-2 shrink-0 rounded-full brand-gradient"
              />
              <p className="text-lg leading-relaxed text-muted-foreground">{point}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-4xl text-lg leading-relaxed text-muted-foreground">
          It&apos;s important to consider these potential drawbacks when choosing a third-party
          hearing aid payer. Understanding these factors can help you make a more informed decision
          about your hearing care. If you have any questions or need further assistance, please
          don&apos;t hesitate to reach out.
        </p>
        <OfficeCallButtons />
      </Section>

      <CallToAction
        title="Not sure what your plan actually covers?"
        body="Call us before you commit to a network. We'll read the benefit with you and tell you plainly what it does and doesn't include."
      />
    </SiteLayout>
  );
}
