import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import {
  CallToAction,
  PageHero,
  Section,
  SectionHeading,
  TextLink,
  pageMeta,
} from "@/components/site/blocks";
import { PRIMARY_PHONE, PRIMARY_TEL } from "@/components/site/content";
import { DOC_GROUPS, FINANCIAL_RESOURCES, LIBRARY_HERO } from "@/components/site/library";

const TITLE = "The Library | Discover Hearing Resources Today — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Explore resources, guides, and support for hearing health at Columbia Basin Hearing Center. Access helpful documents, hearing tips, and patient information easily.";

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5 shrink-0 text-accent">
      <path
        d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export const Route = createFileRoute("/the-library")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: LIBRARY_HERO }),
  component: TheLibrary,
});

function TheLibrary() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Library"
        title={
          <>
            Welcome to <span className="text-accent">the Library.</span>
          </>
        }
        lead="Please browse our selection of documents for prospective, new and current patients to our clinic."
        image={LIBRARY_HERO}
        imageAlt="Interior of a grand historic library with vaulted ceilings and rows of wooden bookshelves"
      />

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-2">
          {DOC_GROUPS.map((group) => (
            <div key={group.heading}>
              <h2 className="text-xl font-semibold leading-snug text-ink">{group.heading}</h2>
              <ul className="mt-6 space-y-3">
                {group.docs.map((doc) => (
                  <li key={doc.href}>
                    <a
                      href={doc.href}
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-0.5"
                    >
                      <DocIcon />
                      <span className="flex-1 text-base font-medium text-ink">{doc.title}</span>
                      <span className="text-sm font-semibold text-primary">Download PDF</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-border bg-surface p-7">
          <h2 className="text-base font-semibold text-ink">Available on request</h2>
          <ul className="mt-3 space-y-1 text-base leading-relaxed text-muted-foreground">
            <li>CBHC Insurance Billing Policy Letter — 2023 (current)</li>
            <li>CBHC On-Line Intake Sheet</li>
          </ul>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Call{" "}
            <a href={PRIMARY_TEL} className="font-semibold text-primary hover:underline">
              {PRIMARY_PHONE}
            </a>{" "}
            and a Patient Ambassador will send either one over.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Financial resources"
          title="Links to Important Financial Resources"
        />
        <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
          {FINANCIAL_RESOURCES.map((res) => (
            <a
              key={res.title}
              href={res.href}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <div className="flex h-20 items-center">
                <img
                  src={res.logo}
                  alt={res.logoAlt}
                  loading="lazy"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-ink">{res.title}</h3>
              <span className="mt-3 text-sm font-semibold text-primary">
                Open <span aria-hidden="true">&rarr;</span>
              </span>
            </a>
          ))}
        </div>
        <p className="mt-10 text-base leading-relaxed text-muted-foreground">
          Prefer to watch instead of read? Our{" "}
          <TextLink to="/video-library">Video Library</TextLink> covers device care, patient stories,
          and dozens of short answers to the questions we hear most.
        </p>
      </Section>

      <CallToAction />
    </SiteLayout>
  );
}
