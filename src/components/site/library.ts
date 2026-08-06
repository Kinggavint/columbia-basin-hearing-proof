const CDN = "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e";
const FILES = "https://www.columbiabasinhearing.com/s";

export type Doc = { title: string; href: string };

/** Documents published in The Library, grouped exactly as the live site groups them. */
export const DOC_GROUPS: { heading: string; blurb?: string; docs: Doc[] }[] = [
  {
    heading: "Useful Documents and Guides for the Care and Maintenance of your Hearing Devices",
    docs: [
      {
        title: "Adapting to your Hearing Aids — Tips and Tricks",
        href: `${FILES}/Adapting-to-your-Hearing-Aids-Tips-for-Success.pdf`,
      },
      { title: "CBHC Bluetooth Rescue Sheet", href: `${FILES}/CBHC-Bluetooth-Rescue-Sheet.pdf` },
      {
        title: "Sound Therapy and Tinnitus Habituation",
        href: `${FILES}/CBHC-Sound-Therapy-and-Tinnitus-Habituation-Sheet-031824-1.pdf`,
      },
    ],
  },
  {
    heading: "Legal and Important Practice Documents for Patients",
    docs: [
      { title: "HIPAA Notice — 2024", href: `${FILES}/HIPAA-Notice-2024.pdf` },
      {
        title: "Assignment of Patient Designee Form — 2024",
        href: `${FILES}/Assignment-of-Patient-Designee-Form-2-13-2024.pdf`,
      },
      {
        title: "Revocation of Authorization of Patient Designee Form — 2024",
        href: `${FILES}/Revocation-of-Authorization-of-Patient-Designee-Form-2-13-2024.pdf`,
      },
      { title: "Patient Intake Form — 2024 (current)", href: `${FILES}/CBHC-Intake-Form-c3g4.pdf` },
    ],
  },
];

/** Financial resources, each with a partner logo. */
export const FINANCIAL_RESOURCES = [
  {
    title: "Care Credit Application",
    href: "https://www.carecredit.com/",
    logo: `${CDN}/556ce1e4-7c27-4038-ac84-eb15142b2789/Care+Credit.png`,
    logoAlt: "CareCredit logo with stylized green and blue sails",
  },
  {
    title: "Starkey Neighbors in Need PDF 2022",
    href: `${FILES}/Neighbors-in-Need-Program-Starkey.pdf`,
    logo: `${CDN}/f9c7960d-16e7-43b5-ac66-6e07a2c24b2e/Starkey.png`,
    logoAlt: "Starkey Hearing Technologies logo with a yellow star and blue text",
  },
];

export const LIBRARY_HERO = `${CDN}/1715358011491-4W8A0YBQ6I9LBSTF1OO2/image-asset.jpeg`;
