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
import { TEAM } from "@/components/site/team";

const TITLE = "Hearing UP | Enhance Your Hearing Today—Get Started Now — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Discover expert hearing care and innovative solutions at Columbia Basin Hearing Center, dedicated to improving your quality of life through better hearing. Schedule a consultation today.";

const CDN = "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e";
const HERO_PHOTO = `${CDN}/a9ac0abc-a677-4bcb-b60c-6377fde7427e/CBH-01.jpg`;
const HEARINGUP_LOGO = `${CDN}/303ed4bb-490f-4c00-b367-b9a3ef422c5a/63d8bcb3ef91320eef7b8160_hearingup-600x211.jpeg`;

const READY = [
  "At Columbia Basin Hearing Center, Dr. Shannon Marie delivers more than just expert hearing care—she delivers heart. With a passion for Audiology Best Practices and a deep commitment to the highest standards of care, Dr. Shannon takes the time to understand you—your lifestyle, your goals, and what really matters most.",
  "From your very first visit, you'll notice the difference. We don't believe in pressure—we believe in partnership. You'll get clear education on your hearing health, a full breakdown of treatment options, and honest guidance to help you decide what's best for you.",
  "Our promise? Compassionate, ongoing support from one of the most trusted hearing doctors in the region. Because when it comes to better hearing, you deserve care that listens just as well as it treats.",
];

const NETWORK = [
  "Joining the HearingUp network was a natural extension of Dr. Shannon Marie's commitment to excellence in hearing care. At Columbia Basin Hearing Center, she's always held herself to the highest standards—delivering personalized, expert care grounded in Audiology Best Practices.",
  "Dr. Shannon doesn't just believe in the HearingUp network—she relies on it. When her own patients move out of state or need care while traveling, it's the first place she turns to ensure they're in good hands.",
  "She's proud to bring that same level of trusted, high-quality care to every patient she sees right here at home. With Dr. Shannon, you won't just hear better—you'll experience better living through better hearing.",
];

export const Route = createFileRoute("/hearing-up")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: HERO_PHOTO }),
  component: HearingUp,
});

function HearingUp() {
  const drShannon = TEAM[0];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="HearingUp network"
        title={
          <>
            Dr. Shannon Marie is your local{" "}
            <span className="text-accent">Hearing Up provider.</span>
          </>
        }
        lead="Like Dr. Cliff, we are firm believers in making Audiology Best Practices the standard of care, not the exception. In fact, that is why Dr. Marie puts consistent training on patient care as well as technology at the center of CBHC. We've been in business for nearly 50 years, and have led our market in innovation after innovation, so you can have Better Living through Better Hearing!"
        image={HERO_PHOTO}
        imageAlt="Dr. Shannon Marie examining a hearing device"
      >
        <div className="mt-8">
          <ButtonLink href={PRIMARY_TEL}>Call to book with Dr. Shannon</ButtonLink>
        </div>
      </PageHero>

      <Section tone="surface">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-soft">
            <img
              src={drShannon.photo}
              alt={drShannon.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow={drShannon.role} title={drShannon.name} />
            <div className="mt-6 space-y-5">
              {drShannon.bio.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What to expect" title="Ready to start hearing better?" />
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            {READY.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <div className="space-y-5">
            {NETWORK.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-start">
          <div className="rounded-2xl border border-border bg-ink px-10 py-8 shadow-soft">
            <img
              src={HEARINGUP_LOGO}
              alt="Logo for HearingUp, a network by Dr. Cliff"
              loading="lazy"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
      </Section>

      <CallToAction />
    </SiteLayout>
  );
}
