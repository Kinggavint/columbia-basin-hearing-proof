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
import { PRIMARY_PHONE, PRIMARY_TEL } from "@/components/site/content";

const TITLE =
  "Lenire from Neuromod | Experience Tinnitus Relief Today — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Discover Lenire, an FDA-approved tinnitus treatment at Columbia Basin Hearing Center, offering personalized neuromodulation therapy to reduce tinnitus symptoms effectively.";

const CDN = "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e";
const HERO_PHOTO = `${CDN}/f908b7a9-7bfa-408d-ad1a-bf4c7bb575b8/Lenire+025.jpg`;
const KIT_PHOTO = `${CDN}/270f9703-f7e4-4e5a-8bb9-3bb29e325f20/Lenire+022.jpg`;
const LOGO = `${CDN}/22e11f9d-16ba-4bd1-bb86-4c807398da6d/Lenire_Logo.png`;
const DEVICE_DIAGRAM = `${CDN}/cf1ce7b3-4ad2-4746-b279-c90ca61e9ab8/What+is+the+Lenire+Device.png`;
const CLINICAL_CHART = `${CDN}/8e6ac535-6740-44c0-bf8f-cadbecb2bf5a/Lenire+Clinical+Take+Aways.png`;

const PROOF = [
  { value: "83%", label: "of patients who completed treatment recommend Lenire" },
  { value: "3", label: "large FDA-reviewed clinical trials" },
  { value: "~80%", label: "of participants saw a meaningful reduction in tinnitus severity" },
];

const PILLARS = [
  {
    title: "Safe",
    body: "Lenire is the only bimodal neuromodulation device with FDA approval following a controlled trial. In recent studies, nearly 80% of participants experienced a meaningful reduction in tinnitus severity.",
  },
  {
    title: "Customized",
    body: "Treatment with Lenire is tailored for each individual. Columbia Basin Hearing Center's audiologists will guide you every step of the way, ensuring you get the best results.",
  },
  {
    title: "Effective",
    body: "These studies show meaningful, clinically significant improvements for a majority of patients, offering real hope where few effective options previously existed.",
  },
];

export const Route = createFileRoute("/lenire-from-neuromod")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: HERO_PHOTO }),
  component: Lenire,
});

function Lenire() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Meet Lenire"
        title={
          <>
            World class tinnitus relief is{" "}
            <span className="text-accent">one call away.</span>
          </>
        }
        lead="Tinnitus—the perception of sound without an external source—affects millions of people worldwide and can be a deeply frustrating condition. Columbia Basin Hearing Center is proud to offer Lenire, an innovative, FDA-approved tinnitus treatment that uses a unique bimodal neuromodulation approach to help reduce tinnitus symptoms."
        image={HERO_PHOTO}
        imageAlt="A hand holding the white portable Lenire controller with power, volume, and play buttons"
      >
        <div className="mt-8">
          <ButtonLink href={PRIMARY_TEL}>Call {PRIMARY_PHONE}</ButtonLink>
        </div>
      </PageHero>

      <Section tone="gradient">
        <div className="flex items-center gap-6">
          <div className="rounded-2xl bg-background px-6 py-4">
            <img src={LOGO} alt="Lenire logo" loading="lazy" className="h-10 w-auto object-contain" />
          </div>
        </div>
        <dl className="mt-12 grid gap-8 sm:grid-cols-3">
          {PROOF.map((stat) => (
            <div key={stat.value} className="rounded-2xl bg-background/95 p-8 shadow-soft">
              <dt className="font-display text-5xl font-bold text-primary">{stat.value}</dt>
              <dd className="mt-3 text-base leading-relaxed text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="surface">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="How it works" title="What is Lenire?" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Lenire uses a combination of sound therapy delivered through Bluetooth headphones and a
              tongue-tip stimulator to provide gentle electrical stimulation. Together, this
              simultaneous stimulation alters or reduces tinnitus pathways over time.
            </p>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-soft">
            <img
              src={DEVICE_DIAGRAM}
              alt="Infographic explaining the three Lenire components: a controller, a tongue-tip device, and headphones"
              loading="lazy"
              className="w-full rounded-lg object-contain"
            />
          </figure>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className="bg-card p-8">
              <h3 className="text-xl font-semibold text-ink">{pillar.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{pillar.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-soft">
            <img
              src={CLINICAL_CHART}
              alt="Chart summarizing the clinical takeaways from the Lenire trials"
              loading="lazy"
              className="w-full rounded-lg object-contain"
            />
          </figure>
          <div>
            <SectionHeading eyebrow="The evidence" title="Does Lenire work?" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Lenire has been recommended by 83% of patients who have completed treatment and has
              demonstrated high efficacy across three large FDA-reviewed clinical trials. These
              studies show meaningful, clinically significant improvements for a majority of
              patients, offering real hope where few effective options previously existed.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              To learn more about the science behind Lenire and review the clinical trial data, ask
              our team — or start with our{" "}
              <TextLink to="/tinnitus-relief-management-program">
                Tinnitus Management & Care Program
              </TextLink>
              , which is free.
            </p>
          </div>
        </div>

        <figure className="mt-14 overflow-hidden rounded-2xl">
          <img
            src={KIT_PHOTO}
            alt="The Lenire kit laid out: headphones, controller, and accessories on a blue background"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </figure>
      </Section>

      <CallToAction
        title="Take the SUFFER out of your RING"
        body={`Call us today at ${PRIMARY_PHONE} and we will reach out to help. No one in Eastern Washington handles tinnitus care as well as we do, and we are proud to be the sole local clinic in the Tri-Cities area offering local Lenire services.`}
      />
    </SiteLayout>
  );
}
