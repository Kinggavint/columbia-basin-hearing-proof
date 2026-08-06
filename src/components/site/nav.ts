/** Site navigation, mirroring the original columbiabasinhearing.com menu structure. */

export type NavChild = { label: string; to: string; external?: boolean };
export type NavItem = { label: string; to: string; external?: boolean; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  {
    label: "Do You Have a Loss?",
    to: "/do-you-have-a-loss",
    children: [
      { label: "Do You Have a Loss?", to: "/do-you-have-a-loss" },
      { label: "Online Hearing Screening", to: "/online-hearing-screening" },
      { label: "Effectively Communicating", to: "/effectively-communicating-with-a-hearing-loss" },
      { label: "OTC Information", to: "/otc-legislation" },
    ],
  },
  {
    label: "Resources",
    to: "/the-library",
    children: [
      { label: "Hearing Heroes", to: "/hearing-heroes" },
      { label: "Sound Shield Program", to: "/sound-shield-program" },
      { label: "Patient Ambassador Program", to: "/patient-ambassador-program" },
      { label: "Tinnitus Relief Management", to: "/tinnitus-relief-management-program" },
      { label: "Hearing UP", to: "/hearing-up" },
      { label: "For Educators", to: "/for-educators" },
      { label: "Third Party Payers", to: "/third-party-payers" },
      { label: "L&I Extended Protection", to: "/li-extended-protection" },
      { label: "Lenire from Neuromod", to: "/lenire-from-neuromod" },
      { label: "LACE AI Pro", to: "/lace-ai-pro" },
      { label: "Nuance", to: "/nuance-cbhc" },
    ],
  },
  {
    label: "The Library",
    to: "/the-library",
    children: [
      { label: "The Library", to: "/the-library" },
      { label: "Video Library", to: "/video-library" },
    ],
  },
  { label: "Online Store", to: "/online-store" },
  { label: "Contact Us", to: "/contact-us" },
];

export const PATIENT_PORTAL = "http://www.hearinghealthportal.com/";
export const REVIEW_URL = "https://app.gatherup.com/f-110096";
