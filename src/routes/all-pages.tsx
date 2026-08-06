import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { CallToAction, PageHero, Section, SectionHeading, pageMeta } from "@/components/site/blocks";
import { PRODUCTS, STORE_CATEGORIES } from "@/components/site/store";

const TITLE = "All pages — Columbia Basin Hearing Center";
const DESCRIPTION =
  "Every page of the Columbia Basin Hearing Center site in one index — useful for reviewing the full build.";

const GROUPS = [
  {
    heading: "Main",
    links: [
      { to: "/", label: "Home" },
      { to: "/about-us", label: "About Us" },
      { to: "/services", label: "Services" },
      { to: "/contact-us", label: "Contact Us" },
    ],
  },
  {
    heading: "Do You Have a Loss?",
    links: [
      { to: "/do-you-have-a-loss", label: "Do You Have a Loss?" },
      { to: "/online-hearing-screening", label: "Online Hearing Screening" },
      {
        to: "/effectively-communicating-with-a-hearing-loss",
        label: "Effectively Communicating With a Hearing Loss",
      },
      { to: "/otc-legislation", label: "OTC Information" },
    ],
  },
  {
    heading: "Programs & Resources",
    links: [
      { to: "/hearing-heroes", label: "Hearing Heroes" },
      { to: "/sound-shield-program", label: "Sound Shield Program" },
      { to: "/patient-ambassador-program", label: "Patient Ambassador Program" },
      { to: "/tinnitus-relief-management-program", label: "Tinnitus Relief Management Program" },
      { to: "/hearing-up", label: "Hearing UP" },
      { to: "/for-educators", label: "For Educators" },
      { to: "/third-party-payers", label: "Third Party Payers" },
      { to: "/li-extended-protection", label: "L&I Extended Protection" },
    ],
  },
  {
    heading: "Technology",
    links: [
      { to: "/lenire-from-neuromod", label: "Lenire from Neuromod" },
      { to: "/lace-ai-pro", label: "LACE AI Pro" },
      { to: "/nuance-cbhc", label: "Nuance" },
    ],
  },
  {
    heading: "Library",
    links: [
      { to: "/the-library", label: "The Library" },
      { to: "/video-library", label: "Video Library (84 videos)" },
    ],
  },
];

export const Route = createFileRoute("/all-pages")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION }),
  component: AllPages,
});

function AllPages() {
  const total =
    GROUPS.reduce((n, g) => n + g.links.length, 0) + 1 + STORE_CATEGORIES.length + PRODUCTS.length;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Site index"
        title={
          <>
            Every page, <span className="text-accent">in one place.</span>
          </>
        }
        lead={`All ${total} pages of the rebuilt site. Handy for reviewing the whole build without hunting through the menu.`}
      />

      <Section tone="surface">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group) => (
            <div key={group.heading}>
              <h2 className="eyebrow text-accent">{group.heading}</h2>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-base text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="eyebrow text-accent">Online Store</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/online-store"
                  className="text-base text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  Store home
                </Link>
              </li>
              {STORE_CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/online-store/$category"
                    params={{ category: c.slug }}
                    className="text-base text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={`${PRODUCTS.length} products`}
          title="Store products"
          lead="Every product page, with pricing and copy taken from the existing store."
        />
        <ul className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <li key={p.slug}>
              <Link
                to="/online-store/p/$slug"
                params={{ slug: p.slug }}
                className="text-base text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CallToAction />
    </SiteLayout>
  );
}
