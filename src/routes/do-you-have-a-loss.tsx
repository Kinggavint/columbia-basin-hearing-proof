import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import {
  ButtonLink,
  CallToAction,
  PageHero,
  Section,
  SectionHeading,
  TextLink,
  pageMeta,
} from "@/components/site/blocks";
import { PRIMARY_TEL } from "@/components/site/content";

const TITLE =
  "Do You Have a Loss? | Enhance Hearing Today – Schedule Your Test — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Discover signs of hearing loss and learn about screening options at Columbia Basin Hearing Center. Get professional assessments and personalized hearing solutions today.";

const HERO_PHOTO =
  "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/37407e66-3b92-4574-a853-a8aca50cc1aa/AdobeStock_736944495.png";

const SIGNS = [
  {
    title: "Difficulty in Conversations",
    points: [
      "Frequently asking others to repeat themselves.",
      "Struggling to follow conversations, especially in noisy environments.",
      "Misunderstanding or misinterpreting what others are saying.",
    ],
  },
  {
    title: "Volume Preferences",
    points: [
      "Frequently increasing the volume on electronic devices such as TVs, radios, or smartphones.",
      "Others comment that the volume is too loud.",
    ],
  },
  {
    title: "Social Withdrawal",
    points: [
      "Avoiding social gatherings or situations where listening and communication are essential.",
      "Showing signs of frustration or irritation during conversations.",
    ],
  },
  {
    title: "Phone Conversations",
    points: [
      "Difficulty understanding conversations on the phone.",
      "Frequently asking callers to speak louder or repeat themselves.",
    ],
  },
  {
    title: "Watching Lips",
    points: [
      "Paying extra attention to lip movements while trying to understand speech.",
      "Difficulty understanding others when their face is not visible.",
    ],
  },
  {
    title: "Environmental Awareness",
    points: [
      "Not responding to environmental sounds like doorbells, alarms, or approaching vehicles.",
      "Showing surprise or confusion when others react to sounds that weren't noticed.",
    ],
  },
  {
    title: "Changes in Behavior",
    points: [
      "Feeling distant or fatigued during group conversations due to communication challenges.",
      "Expressing frustration or annoyance when unable to hear or understand.",
    ],
  },
  {
    title: "Reliance on Visual Cues",
    points: [
      "Preferring to communicate through text or email rather than phone calls or face-to-face conversations.",
      "Frequently asking others to speak directly facing them.",
    ],
  },
  {
    title: "Family Observations",
    points: [
      "Relatives noticing changes in behavior or communication patterns.",
      "Family members observing signs of hearing difficulties even when the individual denies it.",
    ],
  },
  {
    title: "Annual Hearing Check-ups",
    points: [
      "Encouraging regular hearing screenings, especially for older adults or individuals with risk factors such as exposure to loud noise or certain medical conditions.",
    ],
  },
];

const STEPS = [
  {
    title: "State-of-the-Art Testing",
    body: "We utilize cutting-edge hearing tests to assess your auditory health thoroughly. These tests are conducted in a comfortable environment by our experienced professionals.",
  },
  {
    title: "Thorough Interview",
    body: "We take the time to sit down with you and discuss your lifestyle and specific needs. Understanding your concerns and priorities helps us tailor our recommendations to suit you best.",
  },
  {
    title: "Personalized Solutions",
    body: "Our services go beyond standard offerings. We provide customized solutions that address your unique hearing challenges. Whether it's hearing aids, assistive devices, or other options, we're committed to finding the right fit for you.",
  },
  {
    title: "Expert Care",
    body: "What truly sets us apart is our team of dedicated doctors and hearing care professionals. With their expertise and personalized approach, they guide you through every step of your hearing journey, ensuring you enjoy better living through better hearing.",
  },
];

export const Route = createFileRoute("/do-you-have-a-loss")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: HERO_PHOTO }),
  component: DoYouHaveALoss,
});

function DoYouHaveALoss() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="A guide for individuals and their loved ones"
        title={
          <>
            What are the signs of{" "}
            <span className="text-accent">hearing loss?</span>
          </>
        }
        lead="Hearing loss can significantly impact one's quality of life, but often, its onset can be subtle and gradual. It's crucial to recognize the signs early to seek appropriate help and support."
        image={HERO_PHOTO}
        imageAlt="A woman with a puzzled expression, shrugging her shoulders"
      >
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Here are some ways individuals and their relatives can determine if they or their loved
          ones are struggling with hearing loss. If you have more direct questions, we also offer a
          free online hearing screening.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={PRIMARY_TEL}>Call to book an evaluation</ButtonLink>
          <ButtonLink to="/online-hearing-screening" variant="outline">
            Take the free screening
          </ButtonLink>
        </div>
      </PageHero>

      <Section tone="surface">
        <SectionHeading eyebrow="Ten signs" title="What to watch for" />
        <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
          {SIGNS.map((sign, i) => (
            <article
              key={sign.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <h3 className="pt-1.5 text-lg font-semibold text-ink">{sign.title}</h3>
              </div>
              <ul className="mt-4 space-y-3 pl-13">
                {sign.points.map((point) => (
                  <li key={point} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-4xl text-lg leading-relaxed text-muted-foreground">
          Recognizing these signs early can lead to timely intervention and improved quality of life
          for individuals experiencing hearing loss. Encouraging open communication and seeking
          professional help from audiologists or hearing healthcare professionals are crucial steps
          towards addressing hearing difficulties effectively.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our process"
          title="Four simple steps to an answer you can trust"
          lead="At Columbia Basin Hearing Center, we pride ourselves on our comprehensive approach to hearing assessments. Our process consists of four simple steps designed to provide you with accurate and personally relevant results."
        />
        <ol className="mt-12 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <span className="font-display text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-4xl text-lg leading-relaxed text-muted-foreground">
          At Columbia Basin Hearing Center, your satisfaction and improved quality of life are our
          top priorities. Experience the difference our personalized care can make in your hearing
          health journey.
        </p>
        <div className="mt-8">
          <TextLink to="/video-library" className="text-sm">
            Helpful videos on hearing loss from our Video Library &rarr;
          </TextLink>
        </div>
      </Section>

      <CallToAction />
    </SiteLayout>
  );
}
