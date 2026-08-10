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
import { VideoGrid } from "@/components/site/video-grid";
import { TINNITUS_SERIES, YT_EMBED } from "@/components/site/videos";

const TITLE =
  "Tinnitus Management & Care Program | Manage Tinnitus Effectively — Get Started Now — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Explore Columbia Basin Hearing Center's Tinnitus Relief Management Program for personalized strategies to manage tinnitus symptoms effectively. Contact us today.";

const HABITUATION_SHEET =
  "https://www.columbiabasinhearing.com/s/CBHC-Sound-Therapy-and-Tinnitus-Habituation-Sheet-031824-1.pdf";

const HERO_PHOTO =
  "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/a9ac0abc-a677-4bcb-b60c-6377fde7427e/CBH-01.jpg";

const GROUPS: { heading: string; note?: string; items: { term: string; body: string }[] }[] = [
  {
    heading: "Types of Tinnitus",
    items: [
      {
        term: "Subjective Tinnitus",
        body: "The most common type, where only the person experiencing it can hear the sound. It is usually linked to auditory and neurological reactions to hearing loss.",
      },
      {
        term: "Objective Tinnitus",
        body: "A rare type where the sound is audible to both the affected individual and others, often caused by vascular or muscular issues within the ear.",
      },
    ],
  },
  {
    heading: "Causes of Tinnitus",
    items: [
      {
        term: "Hearing Loss",
        body: "Age-related hearing loss (presbycusis) or damage to the inner ear from exposure to loud noise.",
      },
      {
        term: "Ear Infections and Diseases",
        body: "Earwax buildup, otosclerosis, and Meniere's disease.",
      },
      { term: "Medications", body: "Certain antibiotics, diuretics, and chemotherapy drugs." },
      {
        term: "Injuries",
        body: "Head or neck injuries can affect the auditory nerves, inner ear, or brain functions related to hearing.",
      },
      {
        term: "Health Conditions",
        body: "High blood pressure, cardiovascular disease, diabetes, and thyroid problems.",
      },
    ],
  },
  {
    heading: "Symptoms",
    items: [
      { term: "Phantom sound", body: "Perception of ringing, buzzing, hissing, or clicking sounds." },
      {
        term: "Related hearing changes",
        body: "Possible hearing loss or sensitivity to sound (hyperacusis).",
      },
      { term: "Daily impact", body: "Difficulty concentrating or sleeping due to the noise." },
    ],
  },
  {
    heading: "Diagnosis",
    note: "A thorough examination by a healthcare professional is required to diagnose tinnitus. This may include:",
    items: [
      { term: "Hearing Tests", body: "Audiometry to assess hearing acuity." },
      {
        term: "Medical History and Physical Examination",
        body: "To identify potential underlying causes.",
      },
      { term: "Imaging Tests", body: "MRI or CT scans if a structural issue is suspected." },
    ],
  },
  {
    heading: "Treatment and Management",
    items: [
      { term: "Hearing Aids", body: "Can improve hearing and reduce the perception of tinnitus." },
      {
        term: "Sound Therapy",
        body: "Using white noise machines or specialized ear devices to mask the tinnitus.",
      },
      {
        term: "Cognitive Behavioral Therapy (CBT)",
        body: "Helps patients cope with the emotional impact of tinnitus.",
      },
      {
        term: "Medications",
        body: "Antidepressants or anti-anxiety medications to reduce the distress caused by tinnitus.",
      },
      {
        term: "Lifestyle Changes",
        body: "Stress reduction techniques, healthy diet, and regular exercise.",
      },
    ],
  },
  {
    heading: "Prevention",
    items: [
      { term: "Hearing Protection", body: "Use earplugs or earmuffs in noisy environments." },
      { term: "Volume Control", body: "Keep personal audio devices at a safe volume." },
      {
        term: "Regular Hearing Checkups",
        body: "Especially if you are at risk due to occupational noise exposure or other factors.",
      },
    ],
  },
];

export const Route = createFileRoute("/tinnitus-relief-management-program")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: HERO_PHOTO }),
  component: TinnitusProgram,
});

function TinnitusProgram() {
  const intro = TINNITUS_SERIES[0];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Tinnitus Management & Care Program"
        title={
          <>
            Tinnitus options{" "}
            <span className="text-accent">tailored to you.</span>
          </>
        }
        lead="Tinnitus is a condition characterized by the perception of sound in the absence of an external auditory stimulus. People with tinnitus often describe the sound as ringing, buzzing, hissing, whistling, or clicking. These phantom noises can be constant or intermittent, and they may vary in pitch and intensity."
        image={HERO_PHOTO}
        imageAlt="An audiologist performing an examination"
      >
        <div className="mt-8">
          <ButtonLink href={PRIMARY_TEL}>Call for a tinnitus evaluation</ButtonLink>
        </div>
      </PageHero>

      <Section tone="surface">
        <SectionHeading eyebrow="General overview" title="Understanding tinnitus" />
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
          {GROUPS.map((group) => (
            <article
              key={group.heading}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <h3 className="text-xl font-semibold text-ink">{group.heading}</h3>
              {"note" in group && group.note && (
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{group.note}</p>
              )}
              <dl className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <div key={item.term}>
                    <dt className="text-sm font-semibold text-accent">{item.term}</dt>
                    <dd className="mt-1 text-base leading-relaxed text-muted-foreground">
                      {item.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-4xl text-lg leading-relaxed text-muted-foreground">
          Understanding and managing tinnitus involves a combination of medical treatment,
          therapeutic support, and lifestyle adjustments. While there is no cure for tinnitus,
          several strategies can help manage the condition. If you experience symptoms of tinnitus,
          it&apos;s important to consult a healthcare professional for proper diagnosis and
          management.
        </p>
      </Section>

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Free of charge"
              title="Dr. Marie's Tinnitus Relief Management program is here to help at no charge to you!"
            />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              If visiting our office for an evaluation isn&apos;t feasible, or if you need expert
              guidance on your journey to alleviate tinnitus, Dr. Shannon Marie has an extensive
              online counseling course. With years of clinical experience in successfully treating
              tinnitus, Dr. Marie&apos;s 8-week program provides flexible, on-demand counseling tips
              that fit into your schedule. Each session is designed to help you manage and reduce
              your tinnitus symptoms effectively.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              You can also download our free{" "}
              <a
                href={HABITUATION_SHEET}
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                &ldquo;Sound Therapy and Tinnitus Habituation Sheet&rdquo;
              </a>
              .
            </p>
          </div>
          {intro && (
            <div className="overflow-hidden rounded-2xl border border-border bg-ink shadow-lift">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={YT_EMBED(intro.id)}
                  title={intro.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow={`${TINNITUS_SERIES.length} videos`}
          title="Tinnitus Management & Care Program Series"
          lead="Dr. Shannon Marie, a tinnitus sufferer herself, did an 8 week course for those who suffer from tinnitus but could not make office visits and who wished to find a way to find accurate and condensed information to aid them in taking the suffer out their ring! Now, these videos are available to all who want to view them free of charge, and with Dr. Shannon's best wishes for a happy and fulfilling existence, in spite of the sometimes negative effects of tinnitus!"
        />
        <VideoGrid videos={TINNITUS_SERIES} numbered />
      </Section>

      <CallToAction
        title="Tinnitus doesn't have to run your day"
        body="Dr. Shannon Marie is a nationally recognized authority on tinnitus treatment. Call the clinic nearest you to start."
      />
    </SiteLayout>
  );
}
