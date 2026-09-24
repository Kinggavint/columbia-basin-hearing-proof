import { IMG, LOCATIONS, PRIMARY_PHONE, RATING } from "./content";
import type { Clinic } from "./locations";
import { canonicalUrl, SITE_ORIGIN } from "@/lib/site";

/** Verified profile for the practice. One page serves all three clinics. */
const FACEBOOK_URL = "https://www.facebook.com/columbiabasinhearing/";

/**
 * schema.org's MedicalSpecialty enumeration has no audiology member — the only
 * hearing-adjacent value is "Otolaryngologic", which is the ENT *physician*
 * specialty and not what this practice does. Rather than assert a specialty
 * that is wrong, the specialty is expressed as a named MedicalSpecialty node,
 * which is valid JSON-LD and says "Audiology" plainly.
 */
const AUDIOLOGY_SPECIALTY = { "@type": "MedicalSpecialty", name: "Audiology" };

const KNOWS_ABOUT = [
  "Audiology",
  "Hearing loss",
  "Hearing aids",
  "Tinnitus",
  "Aural rehabilitation",
  "Hearing protection",
  "Pediatric audiology",
  "Industrial hearing conservation",
];

/**
 * LocalBusiness / MedicalBusiness markup, one node per clinic.
 * Rendered once from the root so every page carries it.
 */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": LOCATIONS.map((loc) => ({
      "@type": ["MedicalBusiness", "LocalBusiness"],
      /*
       * Same @id the clinic's own location page uses, so the summary node here
       * and the detailed node there resolve to one entity rather than two
       * competing descriptions of the same clinic.
       */
      "@id": `${canonicalUrl(`/${loc.city.toLowerCase().replace(/\s+/g, "-")}`)}#clinic`,
      url: canonicalUrl(`/${loc.city.toLowerCase().replace(/\s+/g, "-")}`),
      name: `Columbia Basin Hearing Center — ${loc.city}`,
      description:
        "Doctors of Audiology in Kennewick, West Richland and Walla Walla. Comprehensive hearing evaluations, tinnitus treatment and hearing aid care for nearly 50 years.",
      medicalSpecialty: AUDIOLOGY_SPECIALTY,
      knowsAbout: KNOWS_ABOUT,
      sameAs: [FACEBOOK_URL],
      image: IMG.clinic,
      logo: IMG.logoWhite,
      telephone: loc.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.street,
        addressLocality: loc.cityStateZip.split(",")[0].trim(),
        addressRegion: "WA",
        postalCode: loc.cityStateZip.split(" ").pop(),
        addressCountry: "US",
      },
      areaServed: ["Kennewick", "Richland", "West Richland", "Pasco", "Walla Walla", "Tri-Cities"],
      slogan: "Better Living Through Better Hearing",
      /*
       * The rating comes from the Kennewick Google Business Profile, so it is only
       * claimed on that node. Asserting it for all three clinics would misrepresent
       * the two locations it was not collected from.
       */
      ...(loc.city === "Kennewick"
        ? {
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: RATING.value,
              reviewCount: String(RATING.count),
            },
          }
        : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      // Schema.org payload is built from local constants — no user input reaches it.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Product markup for a store item. */
export function ProductJsonLd({
  name,
  description,
  image,
  price,
  url,
}: {
  name: string;
  description?: string;
  image?: string;
  price: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    brand: { "@type": "Brand", name: "Columbia Basin Hearing Center" },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url,
      seller: {
        "@type": "Organization",
        name: "Columbia Basin Hearing Center",
        telephone: PRIMARY_PHONE,
      },
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

/**
 * Full LocalBusiness node for a single clinic's own page, plus an FAQPage node
 * for that page's questions.
 *
 * Deliberately carries no aggregateRating. The practice's Google rating was
 * collected on one profile, so repeating it on every clinic would assert
 * reviews those clinics did not receive — which is both untrue and the kind of
 * thing Google issues structured-data manual actions for.
 */
export function ClinicJsonLd({ clinic }: { clinic: Clinic }) {
  const url = canonicalUrl(`/${clinic.slug}`);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "@id": `${url}#clinic`,
        url,
        name: `Columbia Basin Hearing Center — ${clinic.city}`,
        description: clinic.description,
        medicalSpecialty: AUDIOLOGY_SPECIALTY,
        knowsAbout: KNOWS_ABOUT,
        image: IMG.clinic,
        logo: IMG.logoWhite,
        telephone: clinic.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: clinic.street,
          addressLocality: clinic.city,
          addressRegion: "WA",
          postalCode: clinic.cityStateZip.split(" ").pop(),
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: clinic.geo.lat,
          longitude: clinic.geo.lng,
        },
        /*
         * Omitted entirely for an appointment-only clinic. Publishing walk-in
         * hours a site does not keep would have Google telling people it is
         * open when nobody is there.
         */
        ...(clinic.hours.spec
          ? {
              openingHoursSpecification: clinic.hours.spec.map((s) => ({
                "@type": "OpeningHoursSpecification",
                dayOfWeek: s.days.map((d) => `https://schema.org/${d}`),
                opens: s.opens,
                closes: s.closes,
              })),
            }
          : {}),
        sameAs: [FACEBOOK_URL],
        areaServed: clinic.serves.map((name) => ({ "@type": "City", name })),
        parentOrganization: {
          "@type": "Organization",
          "@id": `${SITE_ORIGIN}/#organization`,
          name: "Columbia Basin Hearing Center",
          url: `${SITE_ORIGIN}/`,
        },
        slogan: "Better Living Through Better Hearing",
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: clinic.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Built from local constants — no user input reaches it.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
