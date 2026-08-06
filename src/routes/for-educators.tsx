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
  "For Educators | Enhance Hearing, Improve Teaching - Get Started — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Supporting educators with hearing health solutions and programs to improve communication in noisy classrooms. Enhance professional performance today.";

const CDN = "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e";
const HERO_PHOTO = `${CDN}/a119cd6e-aa44-45bb-a20f-6ec6f2613f71/AdobeStock_53247538.jpeg`;
const CLASSROOM_PHOTO = `${CDN}/d64653db-ee90-4c98-b2a0-4d7bb1a008db/AdobeStock_562381894.jpeg`;

const STATS = [
  { value: "94%", label: "of teachers say their classrooms are too loud" },
  { value: "65%", label: "are already dealing with hearing issues like tinnitus" },
];

export const Route = createFileRoute("/for-educators")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: HERO_PHOTO }),
  component: ForEducators,
});

function ForEducators() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="For educators"
        title={
          <>
            Your partner in{" "}
            <span className="text-accent">Better Teaching through Better Hearing.</span>
          </>
        }
        lead="At Columbia Basin Hearing Center, we're proud to support the educators who shape our community. Many teachers are eligible to receive hearing services at little to no cost—services that can have a profound impact not just on personal well-being, but also on professional performance in today's noisy classrooms."
        image={HERO_PHOTO}
        imageAlt="A teacher smiling and holding textbooks while engaging with students in a classroom"
      >
        <div className="mt-8">
          <ButtonLink href={PRIMARY_TEL}>Call to Schedule Today</ButtonLink>
        </div>
      </PageHero>

      <Section tone="gradient">
        <SectionHeading
          invert
          eyebrow="Occupational health study"
          title="The classroom is louder than you think"
        />
        <dl className="mt-12 grid gap-8 sm:grid-cols-2">
          {STATS.map((stat) => (
            <div key={stat.value} className="rounded-2xl bg-background/95 p-8 shadow-soft">
              <dt className="font-display text-5xl font-bold text-primary">{stat.value}</dt>
              <dd className="mt-3 text-lg leading-relaxed text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Teaching the next generation" title="Educators ourselves" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              As educators ourselves, we regularly host student audiologists for their practicum,
              helping to train the next generation of hearing care professionals. Our clinic connects
              patients with experienced providers, leading-edge technology, and expert guidance, all
              delivered with warmth, respect, and genuine care.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We believe in Better Living through Better Hearing—and we&apos;re here to help our
              teachers hear and live their best.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={CLASSROOM_PHOTO}
              alt="A teacher standing at the front of a classroom with students seated at desks"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <CallToAction
        title="Teaching is hard enough without straining to hear"
        body="Many teachers qualify for hearing services at little to no cost. Call and we'll check your coverage before you book."
      />
    </SiteLayout>
  );
}
