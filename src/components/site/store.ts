/**
 * Store catalog, generated from the live Squarespace store feed (2026-07-31).
 * Checkout stays on Squarespace — each product links out to its live page.
 */
export type Product = {
  slug: string;
  title: string;
  categories: string[];
  priceMin: string;
  priceMax: string;
  body: string[];
  images: string[];
  url: string;
};

export const STORE_CATEGORIES: { slug: string; name: string; blurb: string }[] = [
  {
    slug: "deafmetal",
    name: "DeafMetal",
    blurb: "Jewelry-grade safety rings, holsters, and pendants that keep hearing devices secure — and make them something you actually want to wear.",
  },
  {
    slug: "hearing-aid",
    name: "Hearing Aid",
    blurb: "Hearing devices and speech-clarity technology available directly through the clinic.",
  },
  {
    slug: "ear-care",
    name: "Ear Care",
    blurb: "Drops, sprays, gels, and wax-removal kits for keeping ears healthy and comfortable.",
  },
  {
    slug: "hearing-device-care",
    name: "Hearing Device Care",
    blurb: "Dryers, cleaning systems, wipes, and tools that extend the life of your devices.",
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "audinell-drying-cups",
    title: "Audinell Drying Cups",
    categories: ["hearing-device-care"],
    priceMin: "7.00",
    priceMax: "7.00",
    body: [
      "Individual Audinell hearing aid drying cup only for use with drying tablets.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721760483968-TKVCK8CCLOSCQG9SSDZF/Drying+Cup+-+Audinell.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/audinell-drying-cups",
  },
  {
    slug: "audinell-natural-lubricant-oil",
    title: "Audinell Natural Lubricant Oil",
    categories: ["ear-care"],
    priceMin: "7.00",
    priceMax: "7.00",
    body: [
      "This 100% natural lubricant is made from almond oil, and makes it easier to insert hearing aids while also reducing irritation.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721760395450-ACKV34UWDDOWS561LT84/Lubricating+Oil+-+Audinell.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/audinell-natural-lubricant-oil",
  },
  {
    slug: "audinell-ear-spray",
    title: "Audinell Ear Spray",
    categories: ["ear-care"],
    priceMin: "12.00",
    priceMax: "12.00",
    body: [
      "Odinell Ear Spray eliminates excessive earwax from the ear canal, helping to maintain the health of your ears and restore any hearing loss caused by excessive wax buildup. This non-aggressive and isotonic cleaning solution contains Chamomile extract, which calms and soothes the irritation of the ear canal and the ear due to daily wear of hearing aids.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721760331068-61FO1DABOQ6478TSNHVT/EarSpray+-+Audinell.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/audinell-ear-spray",
  },
  {
    slug: "audinell-disenfecting-wipes",
    title: "Audinell Disenfecting Wipes",
    categories: [],
    priceMin: "12.00",
    priceMax: "12.00",
    body: [
      "These wipes contain a moisturizing surfactant that effectively dissolves earwax without damaging the hearing aid. These wipes are a cleaning product for the maintenance of hearing aids and earmolds. They are soaked in a solution containing a moisturizing surfactant that effectively dissolves earwax without damaging the hearing aid. They increase the life of hearing systems and preserves their effectiveness. 1 (one) container of 90 wipes.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721760456240-GLRW8SSMVEKY1JTW6I7G/Cleaning+Wipes+-+Audinell.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/audinell-disenfecting-wipes",
  },
  {
    slug: "tt1k6fq2cazept6uk9q8jkthb6jv88",
    title: "Audinell Otofloss",
    categories: ["hearing-device-care"],
    priceMin: "23.00",
    priceMax: "23.00",
    body: [
      "OtoFloss makes it easy to clean & remove debris and moisture from tubing in hearing aids, personal sound amplifiers, and more. Simply insert & pull OtoFloss through the sound tubes of your devices to clean them - it's really that simple!",
      "Ideal for devices & components where a cleaning brush is not appropriate, such as miniature tubing or highly delicate components. Prevents loss of sound quality while preserving the effectiveness of hearing instruments.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721760366389-KAR3H6RZ2KCAK3H7EL80/Otofloss+-+Audinell.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/tt1k6fq2cazept6uk9q8jkthb6jv88",
  },
  {
    slug: "audinell-refill-solution-for-perfect-clean-system",
    title: "Refill Solution for PerfectClean System",
    categories: ["hearing-device-care"],
    priceMin: "17.00",
    priceMax: "17.00",
    body: [
      "Each refill cartridge lasts approximately 45 cycles",
      "When used together with the PerfectClean Hearing Aid Cleaning System, the solution helps clean & disinfect your hearing aids",
      "Helps prevent ear infections",
      "Safe to use with all hearing aids",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721760508102-QAKOW2PJX8K65X853K9H/Refill+Solution+for+PerfectClean+System.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/audinell-refill-solution-for-perfect-clean-system",
  },
  {
    slug: "audinell-skin-care-gel",
    title: "Audinell Skin-Care Gel",
    categories: ["ear-care"],
    priceMin: "7.00",
    priceMax: "7.00",
    body: [
      "This amazing ear gel relieves itchy ears, dry skin, rash, eczema, or dermatitis of the ear & lubricates the ear canal to help make it easier to insert & remove hearing aids, earmolds, earplugs, earbuds, PSAPs, in-ear monitors (IEMs), or electronic hearing protection devices.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721761483314-X7AA8HCAGO1X30W2F36B/Skin+Care+Gel+-+Audinell.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/audinell-skin-care-gel",
  },
  {
    slug: "v2vgnci9psj4urhibon4aesatxz9la",
    title: "Audinell Ultra Powerful Drying Capsules",
    categories: ["hearing-device-care"],
    priceMin: "7.00",
    priceMax: "7.00",
    body: [
      "A 2 pack of extra drying capsules / tablets for the Audinell Dry Cup. Gives you 6 months total (3 months per capsule) of additional dehumidification for your dry cup.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721761451213-UN7V1ZM93VPWVIP3MLI6/Drying+Cup+-+Audinell.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/v2vgnci9psj4urhibon4aesatxz9la",
  },
  {
    slug: "audiologists-choice-anti-itch-cream",
    title: "Audiologists Choice Anti-Itch Cream",
    categories: ["ear-care"],
    priceMin: "7.00",
    priceMax: "7.00",
    body: [
      "Stops itchy ears; won't dry ears. 1-percent hydrocortisone cream. Supports Audiology.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721761533992-LLLD7ZADLA1R10L4LK2M/Anti-Itch+Cream+-+AC.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/audiologists-choice-anti-itch-cream",
  },
  {
    slug: "audiologists-choice-wax-removal-kit",
    title: "Audiologists Choice Wax Removal Kit",
    categories: ["ear-care"],
    priceMin: "12.00",
    priceMax: "12.00",
    body: [
      "Audiologist Choice earwax removal aid Good ear hygiene is important for all hearing aid users. Excess ear wax can cause problems with hearing. It can also cause problems with your hearing aid. It can block tubes, receivers even get inside the hearing aid. Good hygiene is important for all hearing aid users and can prevent many problems with hearing aids. This kit contains: Drops 1/2 fl oz Soft rubber bulb ear syringe It is easy to use and the instructions are written on the package. Easy to Use: No More Ear Wax. Easy to Apply. Safe and Effective. For occasional use as an aid to soften, loosen and remove excessive earwax. Box comes with a 1/2 Fl. Oz. dropper bottle and an bulb style ear washer. Just tilt your head and drop a few drops of the solution into the ear. Keep your head tilted for a few minuets, or use some ear putty or cotton balls to keep the liquid from draining out of the ear. If desired after several minuets you may want to gently flush the ear with warm water.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721761575220-ABW912URRZ96LYI0QVZI/Wax+Removal+Kit+-+AC.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/audiologists-choice-wax-removal-kit",
  },
  {
    slug: "eargene-soothing-and-refreshing-ear-lotion",
    title: "Eargene Soothing and Refreshing Ear Lotion",
    categories: ["ear-care"],
    priceMin: "15.00",
    priceMax: "15.00",
    body: [
      "EarGene Ear Lotion - EarGene Ear Lotion is the ideal solution for all your ear hygiene needs. This ear lotion also provides fast-acting relief of itching ears! EarGene Ear Lotion is a soothing and refreshing ear lotion that can reduce itching and irritation. This ear lotion provides the relief hearing aid users have been searching for due to hearing aid ear irritation.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721761610702-8QP6CLZDE29Y93YOBOFV/Eargene+-+HalHen.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/eargene-soothing-and-refreshing-ear-lotion",
  },
  {
    slug: "super-dri-aid-hearing-aid-dehumidifier-single-dryer",
    title: "Super Dri Aid Hearing Aid Dehumidifier - Single Dryer",
    categories: ["hearing-device-care"],
    priceMin: "25.00",
    priceMax: "25.00",
    body: [
      "The Hal-Hen Super Dri-Aid dehumidifier quickly and effectively removes moisture from your hearing aids. Simply place the haering aid or OTC device in the jar and let it do the work! Easily rechargeable for many uses. Compact and great for travel! Trusted by hearing professionals for over 25 years!",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721761806093-LVKDFIUYM2WHCVHRLXXO/Super+Dri-Aid.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/super-dri-aid-hearing-aid-dehumidifier-single-dryer",
  },
  {
    slug: "hal-hen-mini-dri-aid",
    title: "Hal-Hen Mini Dri-Aid",
    categories: ["hearing-device-care"],
    priceMin: "18.00",
    priceMax: "18.00",
    body: [
      "Hal-Hen Mini Dri-Aid helps to secure longer life and continuous efficiency for all types of hearing aids (eyeglass, body, BTE and ITE), effectively removing daily accumulation of moisture. Before retiring for the evening, place hearing aid inside jar on top of the foam pad and close cover securely. Hal-Hen Dri-Aid starts working immediately to remove harmful moisture and humidity. Remove the next day when ready to use.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721761871287-I2D0AE9GYR1N56X3QXG3/Mini+Super+Dri-Aid++-+HalHen.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/hal-hen-mini-dri-aid",
  },
  {
    slug: "miracell-ear-drops-pro-ear",
    title: "Miracell Ear Drops Pro Ear",
    categories: ["ear-care"],
    priceMin: "16.00",
    priceMax: "16.00",
    body: [
      "Get immediate relief from otic discomforts with the help of Miracell ProEar. This product is specially formulated to soothe itchiness commonly caused by hearing aids, ear monitors, earmolds, earphones, and the like. This doctor-recommended solution for irritation loosens excess wax using natural ingredients. This itchy ear relief liquid is composed of organic plant extracts to gently provide relief. If you have pain or active drainage coming from your ear, it is advised that you see a doctor first before introducing any product into it. This 5-oz bottle of Miracell ear drops comes in a new factory-sealed bottle. It is made in the USA.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721761840285-ALJLMR2NBM01ETIK0OOM/Ear+Drops+Pro+-+Miracell.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/miracell-ear-drops-pro-ear",
  },
  {
    slug: "audiologists-choice-audiowipes",
    title: "Audiologists Choice - AudioWipes",
    categories: ["hearing-device-care"],
    priceMin: "35.00",
    priceMax: "35.00",
    body: [
      "160 towelettes packaged in a canister",
      "Designed to clean hearing aids, earmolds, earphones, headphones, and any other hard surface or object",
      "Alcohol-free, won’t harm rubber, plastic, silicone or acrylic",
      "Active ingredient Quaternary Ammonium Chloride",
      "Won’t harm patient, safe to handle",
      "Very economical, portable and convenient",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721755009206-H1YGOFP3C935PUVVQ1FQ/Audio-Wipes+Audiologists+Choice.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/audiologists-choice-audiowipes",
  },
  {
    slug: "audiologists-choice-travel-audiowipes",
    title: "Audiologists Choice - Travel AudioWipes",
    categories: ["hearing-device-care"],
    priceMin: "8.00",
    priceMax: "8.00",
    body: [
      "30 towelettes packaged in a convenient pouch or 160 towelettes packaged in a canister",
      "Designed to clean hearing aids, earmolds, earphones, headphones, and any other hard surface or object",
      "Alcohol-free, won’t harm rubber, plastic, silicone or acrylic",
      "Active ingredient Quaternary Ammonium Chloride",
      "Won’t harm patient, safe to handle",
      "Very economical, portable and convenient",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721761987413-FJXLPEZMY0BFL7OVOT5V/Audio+Wipes.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/audiologists-choice-travel-audiowipes",
  },
  {
    slug: "rayovac-battery-tester",
    title: "Rayovac Battery Tester",
    categories: ["hearing-device-care"],
    priceMin: "10.00",
    priceMax: "10.00",
    body: [
      "A portable tester to ensure your hearing aid batteries are always at an optimum level for use.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721761954611-CW170IJAKU3BTE6F98X2/HA+Battery+Tester+-+RayoVac.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/rayovac-battery-tester",
  },
  {
    slug: "rayovac-cleaning-tool",
    title: "Rayovac Cleaning Tool",
    categories: ["hearing-device-care"],
    priceMin: "15.00",
    priceMax: "15.00",
    body: [
      "Contains the five tools needed for fast, easy and effective daily hearing aid cleaning and maintenance. Works with all hearing aids",
      "Wax removal brush and wax removal pick",
      "Tube & Vent cleaner",
      "Battery door opener",
      "Battery replacement magnet",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721762013497-MZTOVRM12WOLKN5155T5/Hearing+Aid+Cleaner+-+Rayovac.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/rayovac-cleaning-tool",
  },
  {
    slug: "perfectclean-system",
    title: "PerfectClean System",
    categories: ["hearing-device-care"],
    priceMin: "140.00",
    priceMax: "140.00",
    body: [
      "PerfectClean is specially developed for safe and effective earwax removal, cleaning, and drying of all types of hearing aids and hearing systems.",
      "Simply set your hearing instrument in the PerfectClean and 1h later, they will be completely cleaned, disinfected, and dried.",
      "PerfectClean® works with a refill (about 45 cycles): an antibacterial solution that disinfects and removes ear wax.",
      "• System designed specifically for the safe removal of cerumen, cleaning and drying of RITE/RICs; may be used to remove moisture from any custom or non-custom hearing instrument model (CIC, BTE, ITE, RITE/RIC, CCA)",
      "• One-touch operation with 90-minute cycle (20-minute cleaning cycle, followed by 65-minute drying cycle, ending with 5 minute UV-C cycle)",
      "• Automatic shut off after 90 minutes or when lid opened during the cycle",
      "• When the blue indicator light is on indicates the unit is on standby mode; when flashing slowly, the unit is running a cycle",
      "• Cleaning solution automatically removes cerumen and microbial growth from RITE/RIC domes",
      "• Forced hot air fan drying system removes moisture from hearing instruments",
      "• UV-C light disinfect hearing instrument surfaces",
      "• 2-year warranty",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/1721762040380-FH0EERBL0N4SVLCYOC8G/PerfectClean+System.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/perfectclean-system",
  },
  {
    slug: "sennheiser-conversation-clear-plus",
    title: "Sennheiser Conversation Clear Plus",
    categories: ["hearing-aid"],
    priceMin: "649.95",
    priceMax: "649.95",
    body: [
      "Have you ever found yourself struggling to understand a conversation in a crowded restaurant, or generally whenever there is loud background noise? Conversation Clear Plus offers Speech Enhancement technology that ensures conversation clarity even in challenging noisy environments. Enjoy crystal-clkear conversations with this elegant hearing solution. Self-adjusting speech enhancement makes words easier to understand. Hear more of what you want—whevever you decide it’s time.",
      "*Conversation Clear Plus is not a hearing aid and not meant to treat hearing loss.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/6fbe5ee5-a31c-4f81-9885-ceaf88da8937/Product+Photo+Catalogue+with+Gradient.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/sennheiser-conversation-clear-plus",
  },
  {
    slug: "deaf-metal-transparent-holsters",
    title: "DEAFMETAL Transparent Holsters",
    categories: ["deafmetal"],
    priceMin: "13.00",
    priceMax: "13.00",
    body: [
      "DEAFMETAL Holsters are made of stretchable silicone and required for every Deafmetal jewelry for RIC, BTE or BTE CI processor jewelry. (Jewelry sold separately)",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/2494c86b-429b-43ae-9576-543f141f72db/Screenshot+2025-02-20+at+2.04.36%E2%80%AFPM.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/deaf-metal-transparent-holsters",
  },
  {
    slug: "hear-skin-sheets",
    title: "DEAFMETAL Hear Skin Sheets",
    categories: ["deafmetal"],
    priceMin: "15.00",
    priceMax: "15.00",
    body: [
      "Hear Skin Sheets fits BTE and RIC Hearing Aid Sizes. Universally Designed - Find the Best Size and Apply. Removable for Endless Customization. Celebrate You, Share with your Friends and amplify your Identity!",
      "Three designs included per sheet for a total of 30 stickers per order!",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/b81a152c-64ab-4fe8-ba0a-0ccc31f10a56/Screenshot+2025-02-20+at+1.32.25%E2%80%AFPM.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/hear-skin-sheets",
  },
  {
    slug: "deaf-metal-pendants",
    title: "DEAFMETAL Pendants",
    categories: ["deafmetal"],
    priceMin: "50.00",
    priceMax: "50.00",
    body: [
      "DEAFMETAL Pendants can be worn directly onto the holster (sold separately) or can be added to any of our safety chains or Deafmetal earrings for a layered look.",
      "The patented DEAFMETAL Holster (which is the silicone piece that stretches to attach to the back of the hearing aid/cochlear implant processor) is not included in the price, so please remember to order holsters separately. From our website, there are a variety of color choices for the holster itself.",
      "All DEAFMETAL jewelry is sold as a single price, not in pairs, as there are many people who only use one hearing aid/cochlear implant.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/bd4651b2-5f80-4f57-93a6-b30e84a737eb/Screenshot+2025-02-20+at+1.34.24%E2%80%AFPM.png", "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/c39c1020-befc-448b-ab60-be756e81395b/Screenshot+2025-02-20+at+2.14.21%E2%80%AFPM.png", "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/6fbaaa5b-b2ed-4712-8e8a-d2690f5ced79/Screenshot+2025-02-20+at+1.41.04%E2%80%AFPM.png", "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/d1725890-db30-4dcd-8ae8-6628670b46ec/Screenshot+2025-02-20+at+1.40.58%E2%80%AFPM.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/deaf-metal-pendants",
  },
  {
    slug: "25hfmwhl293q9tnpzayp9k3lyof85c",
    title: "DEAFMETAL Earrings",
    categories: ["deafmetal"],
    priceMin: "48.00",
    priceMax: "48.00",
    body: [
      "DEAFMENTAL earrings can be worn directly onto the holster (sold separately) or can be added to any of our safety chains or Deafmetal earrings for a layered look.",
      "The patented DEAFMETAL Holster (which is the silicone piece that stretches to attach to the back of the hearing aid/cochlear implant processor) is not included in the price, so please remember to order holsters separately. From our website, there are a variety of color choices for the holster itself.",
      "All DEAFMETAL jewelry is sold as a single price, not in pairs, as there are many people who only use one hearing aid/cochlear implant.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/56f2427e-269d-4a41-a7fb-f8b77c26e876/Screenshot+2025-02-20+at+1.47.28%E2%80%AFPM.png", "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/5ec23c43-8dd0-4e57-89e1-aaed0ae5c33a/Screenshot+2025-02-20+at+1.47.14%E2%80%AFPM.png", "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/eae68c2c-f255-4186-ae73-9c0064834a8b/Screenshot+2025-02-20+at+1.39.34%E2%80%AFPM.png", "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/dcd270da-24f6-4a43-8b54-1fbea1b1b105/Screenshot+2025-02-20+at+1.46.50%E2%80%AFPM.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/25hfmwhl293q9tnpzayp9k3lyof85c",
  },
  {
    slug: "deafmetal-double-safety-ring",
    title: "DEAFMETAL Safety Rings",
    categories: ["deafmetal"],
    priceMin: "50.00",
    priceMax: "60.00",
    body: [
      "Keep Hearing devices secured with extra retention - From bending over to brushing your hair, hearing aids can become dislodged. Keep hearing devices secured with our double safety rings - no piercing required!",
      "Easy to use - Simply slide our universal silicone holster over your hearing device and loop the double safety ring through the hole at the bottom of the holster. Then attach your hearing aid to your ear and gently attach the cuff to your earlobe. Cuff can be gently widened or pinched to adjust.",
      "The Patented Deafmetal USA holster is sold separately and will need to be purchased along with the safety ring in order to wear.",
      "Each Deafmetal USA jewelry is sold in one piece as some individuals only wear one hearing device.",
    ],
    images: ["https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/ae3fba87-b8e9-4569-a2bc-8095118595ed/Screenshot+2025-02-20+at+1.42.42%E2%80%AFPM.png", "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/fa905097-3f4b-4ee3-8cac-e480cdfe99c2/Screenshot+2025-02-20+at+1.43.29%E2%80%AFPM.png", "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/efd91936-6b43-41a8-be95-9d77e62b5032/Screenshot+2025-02-20+at+1.44.42%E2%80%AFPM.png", "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/4508db9c-d073-49f2-8c13-cec79818366d/Screenshot+2025-02-20+at+1.44.18%E2%80%AFPM.png"],
    url: "https://www.columbiabasinhearing.com/online-store/p/deafmetal-double-safety-ring",
  },
];

export const productsIn = (slug: string) => PRODUCTS.filter((p) => p.categories.includes(slug));
export const productBySlug = (slug: string) => PRODUCTS.find((p) => p.slug === slug);

/** "$7.00" or "$50.00 – $60.00" for variant-priced items. */
export const priceLabel = (p: Product) =>
  p.priceMax && p.priceMax !== p.priceMin ? `$${p.priceMin} – $${p.priceMax}` : `$${p.priceMin}`;
