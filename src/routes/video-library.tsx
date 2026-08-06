import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { CallToAction, PageHero, Section, SectionHeading, pageMeta } from "@/components/site/blocks";
import { VideoGrid } from "@/components/site/video-grid";
import { VIDEO_LIBRARY, VIDEO_SECTIONS } from "@/components/site/videos";

const TITLE = "Video Library | Enhance Hearing Today - Watch Now — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Explore Columbia Basin Hearing Center's Video Library for resources on hearing health, tinnitus relief, communication strategies, and patient success stories.";

/** Anchor id for a section name, e.g. "PATIENT STORIES" -> "patient-stories". */
const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const Route = createFileRoute("/video-library")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION }),
  component: VideoLibrary,
});

function VideoLibrary() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Video Library"
        title={
          <>
            {VIDEO_LIBRARY.length} short videos on{" "}
            <span className="text-accent">hearing, devices, and real patients.</span>
          </>
        }
        lead="Device care walkthroughs, patient stories, clinic history, and our Hear 4U news segments — all in one place, free to watch."
      >
        <nav aria-label="Video categories" className="mt-8 flex flex-wrap gap-3">
          {VIDEO_SECTIONS.map((section) => (
            <a
              key={section.name}
              href={`#${slugify(section.name)}`}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              {section.name}
              <span className="ml-2 text-muted-foreground">{section.videos.length}</span>
            </a>
          ))}
        </nav>
      </PageHero>

      {VIDEO_SECTIONS.map((section, i) => (
        <Section
          key={section.name}
          id={slugify(section.name)}
          tone={i % 2 === 0 ? "surface" : "background"}
        >
          <SectionHeading
            eyebrow={`${section.videos.length} video${section.videos.length === 1 ? "" : "s"}`}
            title={section.name}
          />
          <VideoGrid videos={section.videos} />
        </Section>
      ))}

      <CallToAction
        title="Questions the videos didn't answer?"
        body="Call the clinic nearest you — a real person picks up, and the first conversation is free."
      />
    </SiteLayout>
  );
}
