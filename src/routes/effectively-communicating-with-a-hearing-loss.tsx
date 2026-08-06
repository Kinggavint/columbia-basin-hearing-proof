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
  "Effectively Communicating With a Hearing Loss | Enhance Communication Now — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Discover effective communication strategies for individuals with hearing loss. Our center offers tips and support to improve interactions and enhance understanding.";

const CDN = "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e";
const HERO_PHOTO = `${CDN}/1715371785714-YMAU96KTTKO8TX2BPKI8/image-asset.jpeg`;
const TEAM_PHOTO = `${CDN}/1715371902183-WKRLRPR4DRS2D85YO93O/image-asset.jpeg`;

const TIPS = [
  {
    title: "Maintain Eye Contact",
    body: "When speaking to someone with hearing loss, ensure that you have their attention by maintaining eye contact. This helps them focus on your facial expressions and lip movements, which can aid in understanding.",
  },
  {
    title: "Speak Clearly and Slowly",
    body: "Avoid mumbling or speaking too quickly, as this can make it difficult for individuals with hearing loss to follow the conversation. Instead, speak clearly and at a moderate pace, enunciating your words.",
  },
  {
    title: "Minimize Background Noise",
    body: "Background noise can interfere with the ability to hear clearly. Whenever possible, choose quiet environments for conversations and minimize distractions like television or music.",
  },
  {
    title: "Rephrase Rather than Repeat",
    body: "If the person with hearing loss is having difficulty understanding something you've said, try rephrasing your sentence rather than simply repeating it. This gives them another chance to grasp the meaning in a different context.",
  },
  {
    title: "Use Visual Aids",
    body: "Visual cues can be incredibly helpful for individuals with hearing loss. Consider using gestures, facial expressions, and pointing to objects or written notes to supplement verbal communication.",
  },
  {
    title: "Get Their Attention Before Speaking",
    body: "Before starting a conversation, make sure to get the person's attention first. A gentle tap on the shoulder or a wave can signal that you're about to speak, helping them focus on what you're saying.",
  },
  {
    title: "Be Patient and Empathetic",
    body: "Communication barriers can be frustrating for both parties involved. Exercise patience and empathy, understanding that it may take a little extra time and effort to effectively communicate with someone with hearing loss.",
  },
  {
    title: "Ask How You Can Help",
    body: "Everyone's hearing loss is unique, so don't hesitate to ask the individual how you can best support their communication needs. They may have specific preferences or strategies that work best for them.",
  },
  {
    title: "Face the Light",
    body: "Position yourself so that your face is well-lit, allowing the person with hearing loss to better see your facial expressions and lip movements, which can aid in comprehension.",
  },
  {
    title: "Consider Assistive Devices",
    body: "Lastly, consider the use of assistive listening devices or hearing aids to further enhance communication. These devices can amplify sound and improve clarity, making conversations easier for individuals with hearing loss.",
  },
];

export const Route = createFileRoute("/effectively-communicating-with-a-hearing-loss")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: HERO_PHOTO }),
  component: EffectiveCommunication,
});

function EffectiveCommunication() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Tips for communicating with individuals with hearing loss"
        title={
          <>
            Ten small changes that make{" "}
            <span className="text-accent">a real difference.</span>
          </>
        }
        lead="Communication is a fundamental aspect of human interaction, but for those with hearing loss, it can pose significant challenges. At Columbia Basin Hearing Center, we understand the importance of clear and effective communication for individuals with hearing impairments."
        image={HERO_PHOTO}
        imageAlt="A man kneeling with one hand raised near his ear, listening"
      >
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Here are some helpful tips to ensure better communication with your loved ones who may be
          experiencing hearing loss.
        </p>
      </PageHero>

      <Section tone="surface">
        <SectionHeading eyebrow="The ten tips" title="How to be easier to hear" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {TIPS.map((tip, i) => (
            <article key={tip.title} className="bg-card p-8">
              <span className="font-display text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">{tip.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{tip.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Why it matters" title="Stronger connections, not just louder ones" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              By implementing these tips, you can help facilitate better communication and strengthen
              your connections with those who have hearing loss. At Columbia Basin Hearing Center, we
              are committed to supporting individuals with hearing impairments on their journey to
              improved communication and overall well-being.
            </p>
            <OfficeCallButtons suffix="Office Today" />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={TEAM_PHOTO}
              alt="People holding hands around a table in a team-building activity"
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
