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
import { VIDEO_LIBRARY, YT_EMBED } from "@/components/site/videos";

const TITLE =
  "OTC Information | Explore Better Hearing Options Today — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Learn about OTC hearing devices, their limitations, and the importance of professional audiologist guidance for personalized hearing solutions at Columbia Basin Hearing Center.";

const CDN = "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e";
const HERO_PHOTO = `${CDN}/aeaecc50-cb20-4def-9925-f9816b4afb9f/AdobeStock_170518761.jpeg`;
const OTC_POSTER = `${CDN}/bfbd5319-5a02-4b85-80f5-c5ea61cbb8ad/OTC+Poster.png`;

const BODY = [
  'OTC devices, often marketed as "over the counter," lack the crucial support, counseling, and fitting expertise provided by professional audiologists. This absence of personalized care poses inherent risks and limitations to individuals seeking hearing solutions. Unlike professionally guided interventions, OTC devices do not account for the nuances of individual hearing profiles, potentially leading to suboptimal outcomes and dissatisfaction.',
  "As audiologists, we emphasize the critical importance of having your devices programmed to your specific hearing loss profile. This personalized approach ensures that the amplification provided by the device is precisely tailored to your unique needs, maximizing effectiveness and comfort. Additionally, consulting with an audiologist before attempting to address hearing loss with simple amplification can significantly enhance the success of your treatment journey.",
  "By entrusting your hearing health to a qualified audiologist, you benefit from comprehensive assessments, expert guidance, and ongoing support tailored to your individual circumstances. Our commitment is to empower you with the knowledge and resources needed to make informed decisions about your hearing care, ultimately improving your quality of life.",
  "In light of these considerations, we urge you to prioritize the expertise and guidance of audiologists when seeking hearing solutions. Your hearing health is too important to leave to chance or generic amplification solutions. Let us partner with you on your journey to optimal hearing, ensuring that you receive the personalized care and attention you deserve.",
];

export const Route = createFileRoute("/otc-legislation")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: HERO_PHOTO }),
  component: OtcInformation,
});

function OtcInformation() {
  const otcVideo = VIDEO_LIBRARY.find((v) => v.title.includes("OTC Legislation"));

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Information on OTC devices"
        title={
          <>
            Easily accessible hearing aids sound good —{" "}
            <span className="text-accent">until you read the fine print.</span>
          </>
        }
        lead="In recent years, the landscape of the hearing device market has undergone significant changes, with the introduction of Over-the-Counter (OTC) legislation and devices. While the concept of easily accessible hearing aids may seem appealing, it's essential to understand the potential pitfalls associated with these products."
        image={HERO_PHOTO}
        imageAlt="A profile view with a digital overlay of sound waves around the ear, suggesting hearing technology"
      />

      <Section tone="surface">
        <SectionHeading eyebrow="What we want you to know" title="Why fitting expertise matters" />
        <div className="mt-10 max-w-4xl space-y-5">
          {BODY.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-ink">
            Call us to schedule a full comprehensive hearing screening and consult
          </h3>
          <OfficeCallButtons />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="See for yourself"
          title="A brief video from Dr. Shannon Marie, and a quick comparison poster"
        />
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          {otcVideo && (
            <div className="overflow-hidden rounded-2xl border border-border bg-ink shadow-lift">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={YT_EMBED(otcVideo.id)}
                  title={otcVideo.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="p-5 text-base font-semibold text-ink-foreground">{otcVideo.title}</p>
            </div>
          )}
          <figure className="overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-soft">
            <img
              src={OTC_POSTER}
              alt="Comparison chart of OTC hearing devices and prescription hearing aids, covering fit, price, age, hearing loss determination, design, return policy, verification, device care, lifespan, reliability, training, business history, and professional care"
              loading="lazy"
              className="w-full rounded-lg object-contain"
            />
          </figure>
        </div>
      </Section>

      <CallToAction
        title="Bought an OTC device already?"
        body="Bring it in. We'll test your hearing properly and tell you honestly whether what you have can be made to work for you."
      />
    </SiteLayout>
  );
}
