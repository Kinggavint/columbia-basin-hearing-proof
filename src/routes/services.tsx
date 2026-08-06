import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import {
  ButtonLink,
  CallToAction,
  CardGrid,
  LocationStrip,
  NumberedCard,
  PageHero,
  Section,
  SectionHeading,
  pageMeta,
} from "@/components/site/blocks";
import { PRIMARY_TEL, SERVICES } from "@/components/site/content";

const TITLE = "Services | Enhance Hearing Today – Book Your Consultation — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Explore our full range of hearing services including screenings, tinnitus management, cochlear mapping, and pediatric audiology to improve your hearing health today.";

const HERO_PHOTO =
  "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/a92fb11a-41bf-4109-bd6c-7ada94307f52/CBH-01.jpg";

/** "We are here to serve our communities hearing health everyday!" — clinic capability list. */
const EVERYDAY = [
  {
    title: "Hearing Screenings",
    body: "Early detection of hearing issues is crucial for effective intervention. Offering screenings allows people to identify potential hearing problems early on, enabling them to seek appropriate treatment.",
  },
  {
    title: "Industrial Screenings",
    body: "Hearing loss is a common occupational hazard, especially in industries with high noise levels. Conducting industrial screenings helps workers protect their hearing and ensures compliance with safety regulations.",
  },
  {
    title: "Tinnitus Management",
    body: "Tinnitus can be a distressing condition, and effective management is essential for improving quality of life. We offer a range of therapies and techniques to help individuals manage their tinnitus symptoms.",
  },
  {
    title: "APD Testing (Auditory Processing Disorder)",
    body: "Identifying auditory processing disorders is essential for providing appropriate support, especially for children who may struggle with learning and communication due to APD.",
  },
  {
    title: "Cochlear Mapping and Post-Surgical Management",
    body: "For individuals with cochlear implants, accurate mapping and post-surgical management are critical for optimal outcomes. Our expertise in this area ensures patients receive comprehensive care throughout their journey.",
  },
  {
    title: "Full Audiological Evaluations",
    body: "Comprehensive evaluations provide a thorough understanding of our patient's hearing health, allowing for personalized treatment plans tailored to their specific needs.",
  },
  {
    title: "Hearing Aid Fitting and Counseling",
    body: "Properly fitted hearing aids can significantly improve a person's quality of life. Pairing fitting services with counseling ensures patients understand how to use and maintain their devices effectively.",
  },
  {
    title: "Hearing Protection",
    body: "Preventative measures such as hearing protection are crucial for preserving hearing health, especially in noisy environments or for individuals engaged in activities with potential noise exposure.",
  },
  {
    title: "Pediatric Services (Ages 4+)",
    body: "Children's hearing needs differ from adults, and specialized care is essential for accurate assessment and intervention. Our pediatric services ensure that young patients receive the attention and support they require.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: HERO_PHOTO }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title={
          <>
            A full service medical clinic{" "}
            <span className="text-accent">specializing in audiology.</span>
          </>
        }
        lead="We are here to serve our community's hearing health every day — from the first screening through fitting, rehabilitation, and long-term care."
        image={HERO_PHOTO}
        imageAlt="An audiologist looking through an otoscope, smiling, wearing a white shirt with a striped collar"
      >
        <div className="mt-8">
          <ButtonLink href={PRIMARY_TEL}>Call Now to Set Up your Appointment</ButtonLink>
        </div>
      </PageHero>

      <LocationStrip />

      <Section tone="surface">
        <SectionHeading
          eyebrow="Every day"
          title="We are here to serve our community's hearing health everyday!"
        />
        <CardGrid>
          {EVERYDAY.map((item, i) => (
            <NumberedCard key={item.title} index={i + 1} title={item.title} body={item.body} />
          ))}
        </CardGrid>
        <p className="mt-10 max-w-4xl text-lg leading-relaxed text-muted-foreground">
          By offering such a comprehensive range of services, we demonstrate our commitment to
          addressing all aspects of hearing health. Our dedication to serving the community by
          providing these vital services is total and our expertise positively impacts the lives of
          many individuals and families throughout the greater Columbia Basin.
        </p>
      </Section>

      <Section id="we-can-help">
        <SectionHeading
          eyebrow="Specialties"
          title="We Can Help"
          lead="Nine areas of care, each led by clinicians who do this work every day."
        />
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <span className="font-display text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-ink">{service.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <CallToAction
        title="Not sure which service you need?"
        body="Call and describe what you're noticing. We'll tell you what kind of appointment actually fits — and how long it takes."
      />
    </SiteLayout>
  );
}
