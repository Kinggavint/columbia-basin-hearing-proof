import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { CallToAction, PageHero, Section, SectionHeading, pageMeta } from "@/components/site/blocks";
import { LOCATIONS } from "@/components/site/content";

const TITLE =
  "Sound Shield Program | Protect Your Hearing Investment—Enroll Today — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Protect your hearing aids with Columbia Basin Hearing Center's Sound Shield Program. Enjoy repairs, warranty, and peace of mind with expert care for life of your device.";

const HERO_PHOTO =
  "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1715726811769-CCWCO6WT8I6RT9JJ455Y/image-asset.jpeg";

const BENEFITS = [
  "In house repairs",
  "Manufacturer warranty",
  "All necessary supplies",
  "Loss and Damage warranty",
  "The ability to Beta test the latest in hearing aid technology",
  "Most Importantly: Peace of Mind",
];

const REASONS = [
  {
    title: "Financial Burden of Repairs and Replacements",
    body: "Hearing aids are delicate devices that are susceptible to damage from everyday wear and tear. Without a protection plan, users may face hefty repair or replacement costs. Even minor damages can be expensive to fix, and if the device is irreparably damaged or lost, the financial strain can be substantial.",
  },
  {
    title: "Disruption in Daily Life",
    body: "When a hearing aid breaks down, the immediate impact is a disruption in the user's daily life. Hearing loss can significantly hinder communication, making it challenging to participate in conversations, work, and social activities. Without a protection plan, delays in repairing or replacing the device can extend this disruption, affecting the user's quality of life and emotional well-being.",
  },
  {
    title: "Increased Wear and Tear",
    body: "Hearing aids are exposed to various environmental factors such as moisture, dust, and accidental drops. Over time, these factors can lead to increased wear and tear, reducing the device's lifespan.",
  },
  {
    title: "Limited Access to Technological Upgrades",
    body: "Technology in the hearing aid industry is continually evolving, with new features and improvements being introduced regularly. The Sound Shield Protection Plan offers Beta Testing benefits to let you know if technology advancements will benefit you.",
  },
  {
    title: "Emotional and Psychological Impact",
    body: "For most of our patients, hearing aids are more than just devices; they are a lifeline to the world. The stress and anxiety of dealing with a damaged or malfunctioning hearing aid without the safety net of the Sound Shield Protection Plan can be overwhelming. Ensuring continuous and reliable use of their hearing aids helps maintain confidence and independence.",
  },
];

export const Route = createFileRoute("/sound-shield-program")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: HERO_PHOTO }),
  component: SoundShield,
});

function SoundShield() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Sound Shield Program"
        title={
          <>
            Expert care and protection for{" "}
            <span className="text-accent">the life of your device.</span>
          </>
        }
        lead="With our inclusive Sound Shield Program, you will most affordably get the most expert care and protection you need for the life of your device."
        image={HERO_PHOTO}
        imageAlt="Close-up of a medieval suit of armor with intricate engravings and chainmail details"
      />

      <Section tone="surface">
        <SectionHeading eyebrow="Included" title="Benefits of the program" />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-start gap-4 bg-card p-8">
              <span
                aria-hidden="true"
                className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary"
              >
                ✓
              </span>
              <span className="text-base font-medium leading-relaxed text-ink">{benefit}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="Why enroll" title="Why do I need the Sound Shield Program?" />
        <ol className="mt-12 space-y-6">
          {REASONS.map((reason, i) => (
            <li
              key={reason.title}
              className="flex gap-6 rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-base font-bold text-primary">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{reason.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{reason.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-4xl text-lg leading-relaxed text-muted-foreground">
          In conclusion, while it might seem like an unnecessary expense at first, opting for a Sound
          Shield Protection Plan on hearing aids is a wise investment. It not only provides financial
          security but also ensures uninterrupted access to sound, enhancing the patient&apos;s
          overall quality of life. By safeguarding their hearing aids, patients can enjoy peace of
          mind and continue to experience the world with clarity and confidence.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {LOCATIONS.map((loc) => (
            <a
              key={loc.city}
              href={loc.tel}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              Call our {loc.city} Clinic
            </a>
          ))}
        </div>
      </Section>

      <CallToAction
        title="Enroll in Sound Shield"
        body="Ask about the program at your next visit, or call the clinic nearest you and we'll walk you through what it covers."
      />
    </SiteLayout>
  );
}
