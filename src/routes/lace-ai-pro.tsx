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

const TITLE = "LACE AI Pro | Improve Listening Skills Today — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Enhance communication with LACE AI Pro, an AI-driven auditory training program at Columbia Basin Hearing Center, helping improve speech understanding and hearing in noise.";

const CDN = "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e";
const LOGO = `${CDN}/84a9c3df-9b24-4fda-9e8e-907a8d1bd5a6/Lace-AI-Pro-Logo-Hero.png`;
const APP_MOCKUP = `${CDN}/0707e1b4-a623-40d6-adac-373622364570/6764d14a1d681295dc5aecfa_LAIP+-+General+Mockup.png`;
const LISTENING_PHOTO = `${CDN}/1769554146653-5DEWRHIQ7VJJT4C8YNR8/unsplash-image-Kw5xszmNhnU.jpg`;
const PHONE_PHOTO = `${CDN}/1769554717787-ZO1S1ZW2U1A6OHTCG9DU/unsplash-image-lM4X4TQdngo.jpg`;

const BENEFITS = [
  "Improve understanding in noisy environments",
  "Strengthen working memory",
  "Process rapid or unclear speech better",
  "Adapt to new hearing aids quickly",
];

const FEATURES = [
  "Web-based and accessible anywhere",
  "Short daily sessions",
  "Real-world listening exercises",
  "Personalized to your hearing profile",
];

const PRICING = ["$250.00 Ala Carte", "Included in all Better Hearing Plans with new devices"];

const GET_STARTED = [
  "Ask our team at your next appointment",
  "Get signed up to receive your unique link to the LACE application",
  "Begin training at home",
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-4">
          <span
            aria-hidden="true"
            className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary"
          >
            ✓
          </span>
          <span className="text-base leading-relaxed text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export const Route = createFileRoute("/lace-ai-pro")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: APP_MOCKUP }),
  component: LaceAiPro,
});

function LaceAiPro() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="LACE AI Pro"
        title={
          <>
            Train your brain{" "}
            <span className="text-accent">to listen.</span>
          </>
        }
        lead="Unlock clearer conversations with LACE AI's clinically proven auditory brain training."
        image={LISTENING_PHOTO}
        imageAlt="A person wearing headphones on a sofa, looking down at a device in their hands"
      >
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <ButtonLink href={PRIMARY_TEL}>Ask us about LACE AI</ButtonLink>
          <div className="rounded-xl border border-border bg-card px-5 py-3">
            <img
              src={LOGO}
              alt="LACE AI Pro logo"
              loading="lazy"
              className="h-9 w-auto object-contain"
            />
          </div>
        </div>
      </PageHero>

      <Section tone="surface">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="The idea" title="What is LACE AI?" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              LACE AI (Listening and Communication Enhancement) is an AI-powered auditory training
              program proven to strengthen the brain&apos;s ability to understand speech. Hearing
              aids amplify sound — but your brain does the listening. LACE AI helps retrain the brain
              to interpret speech more clearly, especially in noise.
            </p>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-soft">
            <img
              src={APP_MOCKUP}
              alt="A smartphone showing the LACE AI app with options for speech in noise, speech reading, rapid speech, and working memory"
              loading="lazy"
              className="w-full rounded-lg object-contain"
            />
          </figure>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Benefits" title="What are the benefits of LACE AI?" />
            <CheckList items={BENEFITS} />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              LACE AI offers thousands of adaptive exercises that adjust to your progress. Train at
              home using your smartphone, tablet, or computer.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={PHONE_PHOTO}
              alt="A young man looking at a smartphone"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid items-start gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-ink">Features</h3>
            <CheckList items={FEATURES} />
          </article>
          <article className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-ink">Program access &amp; pricing</h3>
            <CheckList items={PRICING} />
          </article>
          <article className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-ink">Ready to begin?</h3>
            <ol className="mt-6 space-y-4">
              {GET_STARTED.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-base leading-relaxed text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </Section>

      <CallToAction
        title="Hearing aids amplify. Your brain listens."
        body="Ask our team about LACE AI at your next appointment, or call and we'll get you set up with your training link."
      />
    </SiteLayout>
  );
}
