import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import {
  ButtonLink,
  CallToAction,
  LocationStrip,
  PageHero,
  Section,
  SectionHeading,
  pageMeta,
} from "@/components/site/blocks";
import { PRIMARY_TEL } from "@/components/site/content";
import { COMMUNITY_GALLERY, DUST_DEVILS_PHOTOS, PARTNERSHIPS, TEAM } from "@/components/site/team";

const TITLE = "Team | Enhance Hearing Today - Book Now — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Discover premier hearing solutions and expert care at Columbia Basin Hearing Center. Serving the Northwest with advanced technology and compassionate service for better hearing.";

const LEAD_PHOTO =
  "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/a812b57b-0bf8-4ddf-959b-35977a99570f/CBH-02.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: LEAD_PHOTO }),
  component: AboutUs,
});

function AboutUs() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About us"
        title={
          <>
            The leading provider of hearing solutions in the{" "}
            <span className="text-accent">Northwest.</span>
          </>
        }
        lead="We achieve this distinction by offering superior hearing solutions, connecting our patients with seasoned professionals who provide expert advice, extraordinary technology, and exceptional value, all complemented by outstanding service."
        image={LEAD_PHOTO}
        imageAlt="A member of the Columbia Basin Hearing Center team smiling, wearing a white blazer and striped shirt"
      >
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Our commitment to integrity, compassion, hope, and dedication guides every aspect of our
          work, fostering a positive environment for our team, guests, and patients alike. We take
          pride in serving as the conduit for our patients&apos; journey to Better Living through
          Better Hearing.
        </p>
        <div className="mt-8">
          <ButtonLink href={PRIMARY_TEL}>Call to Schedule Today</ButtonLink>
        </div>
      </PageHero>

      <LocationStrip />

      <Section tone="surface" id="team">
        <SectionHeading
          eyebrow="Our team"
          title="Meet our Providers and Assistants"
          lead="Doctors of Audiology, hearing instrument specialists, and certified audiology assistants — the people you'll actually see at every visit."
        />
        {/* items-start so a long bio doesn't stretch its neighbour into dead space */}
        <div className="mt-14 grid items-start gap-6 lg:grid-cols-2">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-7 shadow-soft sm:flex-row"
            >
              <img
                src={member.photo}
                alt={member.alt}
                loading="lazy"
                /* self-start stops flex from stretching the photo past its aspect ratio */
                className="aspect-[3/4] w-full shrink-0 self-start rounded-xl bg-secondary object-cover object-top sm:w-40"
              />
              <div className="min-w-0">
                <h3 className="text-xl font-bold leading-snug text-ink">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-accent">{member.role}</p>
                <div className="mt-4 space-y-3">
                  {member.bio.map((p, j) => (
                    <p key={j} className="text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="In the community"
          title="Serving our Community"
          lead="Screenings, classrooms, ball games, and the occasional plunge into very cold water — hearing care doesn't stop at the clinic door."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COMMUNITY_GALLERY.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-2xl border border-border bg-secondary"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Partnerships" title="Who we stand beside" />
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
          {PARTNERSHIPS.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <div className="flex h-20 w-full items-center justify-start rounded-xl bg-ink px-6">
                <img src={p.logo} alt={p.logoAlt} loading="lazy" className="h-12 w-auto object-contain" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">{p.title}</h3>
              <p className="mt-1 text-sm font-semibold text-accent">{p.years}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid items-start gap-6 sm:grid-cols-2">
          {DUST_DEVILS_PHOTOS.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={photo.src} alt={photo.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-6 py-5 text-sm leading-relaxed text-muted-foreground">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CallToAction />
    </SiteLayout>
  );
}
