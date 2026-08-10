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
import { LOCATIONS, PRIMARY_TEL } from "@/components/site/content";

const TITLE =
  "Online Hearing Screening | Schedule Your Hearing Check Today — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Accessible online hearing screening by Columbia Basin Hearing Center. Offering comprehensive hearing health services in Kennewick and surrounding areas.";

const WHAT_IT_IS = [
  {
    title: "A starting point, not a diagnosis",
    body: "A screening tells you whether it's worth getting a full evaluation. Only a comprehensive audiological evaluation in the clinic can tell you what is actually going on and what to do about it.",
  },
  {
    title: "Takes a few minutes",
    body: "Find a quiet room, use headphones if you have them, and answer honestly. Rushing it or testing in a noisy space will give you a result you can't trust.",
  },
  {
    title: "Then bring it to us",
    body: "Whatever the result, call the clinic nearest you. We'll tell you what kind of appointment fits, how long it takes, and what it costs before you book.",
  },
];

export const Route = createFileRoute("/online-hearing-screening")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION }),
  component: OnlineScreening,
});

function OnlineScreening() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Online hearing screening"
        title={
          <>
            Not sure if it&apos;s time?{" "}
            <span className="text-accent">Start here.</span>
          </>
        }
        lead="A free online screening is the lowest-effort way to find out whether what you're noticing is worth a closer look. It costs nothing and nobody has to know you took it."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={PRIMARY_TEL}>Call to book a real evaluation</ButtonLink>
          <ButtonLink to="/do-you-have-a-loss" variant="outline">
            Read the signs of hearing loss
          </ButtonLink>
        </div>
      </PageHero>

      <Section tone="surface">
        <SectionHeading eyebrow="Before you start" title="What a screening can and can't tell you" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {WHAT_IT_IS.map((item, i) => (
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
        <SectionHeading
          eyebrow="Ready when you are"
          title="Book the screening at the clinic nearest you"
          lead="Screenings are quick, and our Patient Ambassadors will find you a slot that works."
        />
        <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <a
              key={loc.city}
              href={loc.tel}
              className="group rounded-2xl border border-border bg-card p-8 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <p className="eyebrow text-muted-foreground">{loc.city}</p>
              <p className="mt-2 font-display text-2xl font-semibold text-primary">{loc.phone}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {loc.street}
                <br />
                {loc.cityStateZip}
              </p>
            </a>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Want to understand what we actually do in a full evaluation first? See{" "}
          <TextLink to="/services">our services</TextLink> or watch the{" "}
          <TextLink to="/video-library">Video Library</TextLink>.
        </p>
      </Section>

      <CallToAction />
    </SiteLayout>
  );
}
