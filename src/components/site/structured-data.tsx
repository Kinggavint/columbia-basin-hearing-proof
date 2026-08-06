import { IMG, LOCATIONS, PRIMARY_PHONE, RATING } from "./content";

/**
 * LocalBusiness / MedicalBusiness markup, one node per clinic.
 * Rendered once from the root so every page carries it.
 */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": LOCATIONS.map((loc) => ({
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": `#clinic-${loc.city.toLowerCase().replace(/\s+/g, "-")}`,
      name: `Columbia Basin Hearing Center — ${loc.city}`,
      description:
        "Doctors of Audiology in Kennewick, West Richland and Walla Walla. Comprehensive hearing evaluations, tinnitus treatment and hearing aid care for nearly 50 years.",
      medicalSpecialty: "Otolaryngologic",
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
