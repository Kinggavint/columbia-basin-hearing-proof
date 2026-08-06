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

const TITLE = "Nuance | Enhance Hearing Confidence Today — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Discover Nuance at Columbia Basin Hearing Center, a discreet, stylish hearing solution for mild to moderate hearing loss. Enhance your quality of life today.";

const CDN = "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e";
const LOGO = `${CDN}/5d9a2560-6177-4f5f-8012-74d2860badd5/Nuance+Logo.png`;
const HERO_PHOTO = `${CDN}/6c934725-9314-4581-84ca-bee1c33552d1/Nuance-Audio-_-EssilorLuxottica-_-Woman-qk1aw90dby2389vvnk7tv07z3493ptfv8gnq22a62o.png`;
const BEAMFORMING = `${CDN}/4378c9ed-b8e1-4b74-b7a6-f40047d7cf93/Luxottica_Nuance24_Features_Beamforming_Horizontal2.png`;
const GLASSES = `${CDN}/5dbf60a1-7d4b-4f2b-ae87-33cf2e786f48/luxottica-nuance-audio-glasses-670px.jpg`;

export const Route = createFileRoute("/nuance-cbhc")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: HERO_PHOTO }),
  component: Nuance,
});

function Nuance() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Nuance"
        title={
          <>
            Add some Nuance to your{" "}
            <span className="text-accent">hearing journey.</span>
          </>
        }
        lead="Nuance is a fantastic new hearing aid built directly into a pair of stylish glasses which allows users with a low to moderate hearing loss to get the most of their lives when they need it the most. Easy to fit, easy to program and easy to use. Call us today to find out if Nuance is right for you!"
        image={HERO_PHOTO}
        imageAlt="A confident woman with long gray hair wearing round Nuance glasses"
      >
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <ButtonLink href={PRIMARY_TEL}>Call us today</ButtonLink>
          <div className="rounded-xl border border-border bg-card px-5 py-3">
            <img src={LOGO} alt="Nuance logo" loading="lazy" className="h-8 w-auto object-contain" />
          </div>
        </div>
      </PageHero>

      <Section tone="surface">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="The technology" title="What is Nuance?" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Nuance is a new kind of hearing solution that blends seamlessly into everyday life by
              combining advanced hearing technology with a stylish pair of glasses. Designed for
              people with mild to moderate hearing loss, Nuance uses discreet, built-in microphones
              and directional sound processing to help you focus on conversations—especially in noisy
              environments like restaurants or family gatherings.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Because the technology is integrated directly into the frames, it offers a more
              comfortable, low-profile alternative to traditional hearing aids, making it easier to
              stay engaged, confident, and connected in the moments that matter most.
            </p>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-soft">
            <img
              src={BEAMFORMING}
              alt="Side profile of a man wearing black Nuance glasses, illustrating directional beamforming"
              loading="lazy"
              className="w-full rounded-lg object-contain"
            />
          </figure>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={GLASSES}
              alt="A pair of Nuance Audio glasses with a sleek black design"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>
          <div>
            <SectionHeading eyebrow="Is it for you?" title="Who is best suited to Nuance?" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Nuance is best suited for adults with mild to moderate hearing loss who primarily
              notice difficulty in conversations—especially in group settings, restaurants, or social
              environments—and who value a discreet, easy-to-wear solution that blends into everyday
              life. It&apos;s an excellent option for those who may not feel ready for traditional
              hearing aids or who prefer a more subtle approach to improving their hearing.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              However, Nuance may not be appropriate for individuals with more significant or complex
              hearing loss, those who require highly customized programming, or patients needing
              all-day amplification across a wide range of listening environments. A comprehensive
              hearing evaluation at Columbia Basin Hearing Center can help determine if Nuance is the
              right fit for your specific needs.
            </p>
          </div>
        </div>
      </Section>

      <CallToAction
        title="Call now to see if Nuance is right for you"
        body="A comprehensive evaluation tells us whether glasses-based hearing is the right call — or whether something else would serve you better. We'll tell you either way."
      />
    </SiteLayout>
  );
}
