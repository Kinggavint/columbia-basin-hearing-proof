/**
 * Per-clinic content for the indexable location pages.
 *
 * Kept separate from LOCATIONS in content.ts, which stays a lean NAP list used by
 * the shared footer, CTA and strip components. This module carries the long-form,
 * page-level copy that only the /locations hub and the three city pages need.
 *
 * NAP here is the source of truth for those pages and must match the Google
 * Business Profile character for character — inconsistent name/address/phone is
 * the single most common local-SEO own goal.
 */

export type ClinicHours = {
  /** Rendered to the page. */
  display: { days: string; hours: string }[];
  /**
   * schema.org openingHoursSpecification. Null for an appointment-only clinic:
   * publishing walk-in hours for a site that does not keep them is worse than
   * publishing none, since Google surfaces it as an open/closed signal.
   */
  spec: { days: string[]; opens: string; closes: string }[] | null;
  /** Short line shown under the hours table. */
  note?: string;
};

/** Narrow so `to={`/${clinic.slug}`}` still satisfies the router's typed paths. */
export type ClinicSlug = "kennewick" | "west-richland" | "walla-walla";

export type Clinic = {
  slug: ClinicSlug;
  city: string;
  /** Visible H1. */
  h1: string;
  title: string;
  description: string;
  phone: string;
  tel: string;
  street: string;
  cityStateZip: string;
  mapQuery: string;
  geo: { lat: number; lng: number };
  hours: ClinicHours;
  /** Opening body copy, unique per clinic. */
  intro: string[];
  /** Communities this clinic is the practical choice for. */
  serves: string[];
  gettingHere: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
};

/**
 * Standard clinic hours supplied by the practice as a working placeholder.
 * Replace once the front desk confirms; the same object feeds both the visible
 * table and the JSON-LD so the two can never drift apart.
 */
const STANDARD_HOURS: ClinicHours = {
  display: [
    { days: "Monday to Thursday", hours: "8:00 am to 5:00 pm" },
    { days: "Friday", hours: "8:00 am to 12:00 pm" },
    { days: "Saturday and Sunday", hours: "Closed" },
  ],
  spec: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "08:00", closes: "12:00" },
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "13:00", closes: "17:00" },
    { days: ["Friday"], opens: "08:00", closes: "12:00" },
  ],
  note: "Closed for lunch from 12:00 pm to 1:00 pm, Monday through Thursday.",
};

const APPOINTMENT_ONLY: ClinicHours = {
  display: [{ days: "Monday to Friday", hours: "By appointment only" }],
  spec: null,
  note: "Call ahead to book. We schedule Walla Walla visits around the days our audiology team is in town.",
};

export const CLINICS: Clinic[] = [
  {
    slug: "kennewick",
    city: "Kennewick",
    h1: "Audiologist & Hearing Aids in Kennewick, WA",
    title:
      "Audiologist in Kennewick, WA | Hearing Aids & Tinnitus Care | Columbia Basin Hearing Center",
    description:
      "Doctors of Audiology on W. Clearwater Ave in Kennewick. Comprehensive hearing evaluations, hearing aid fittings and repairs, and tinnitus treatment. Call (509) 736-4005.",
    phone: "(509) 736-4005",
    tel: "tel:15097364005",
    street: "4015 W. Clearwater Ave., Ste C",
    cityStateZip: "Kennewick, WA 99336",
    mapQuery: "4015 W Clearwater Ave Ste C, Kennewick, WA 99336",
    geo: { lat: 46.2120167, lng: -119.1750392 },
    hours: STANDARD_HOURS,
    intro: [
      "Our Kennewick clinic on West Clearwater Avenue is the practice's main location and where most Tri-Cities patients are seen. It is the office with the fullest diagnostic setup, which means a single visit can cover the whole picture: a comprehensive audiological evaluation, a conversation about what the results actually mean for your daily life, and a plan you can start on the same week.",
      "Columbia Basin Hearing Center has been caring for hearing in the Columbia Basin for close to fifty years. That length of time matters more than it sounds. It means we have followed patients through second and third sets of hearing aids, through changes in insurance, and through the point where someone finally decides that asking people to repeat themselves is not something they want to keep doing.",
      "If you are not sure whether you need an appointment yet, calling is genuinely the fastest way to find out. Our Patient Ambassadors can tell you in a few minutes whether what you are describing is worth coming in for.",
    ],
    serves: ["Kennewick", "Richland", "Pasco", "Finley", "Burbank", "Benton City"],
    gettingHere: [
      {
        heading: "Finding the office",
        body: "We are at 4015 W. Clearwater Ave., Suite C, on the Clearwater Avenue retail corridor in west Kennewick. Clearwater is the main east-west route through this part of town, so most patients arrive from either Highway 395 to the east or Columbia Center Boulevard to the west. Look for the suite letter on the door rather than the street number alone, since the building is shared.",
      },
      {
        heading: "Parking and access",
        body: "Parking is off-street in the lot serving the building, and the entrance is at ground level. If you use a walker or wheelchair, or you are bringing someone who does, mention it when you book and we will make sure the appointment is set in a room that gives you room to move.",
      },
      {
        heading: "Coming from elsewhere in the Tri-Cities",
        body: "From Richland or Pasco the drive is typically well under twenty minutes outside of rush hour. Patients travelling from Benton City, Finley or Burbank should allow a little longer. Give yourself an extra ten minutes on a first visit for paperwork.",
      },
    ],
    faqs: [
      {
        q: "Do I need a doctor's referral to be seen in Kennewick?",
        a: "In Washington you can book an appointment with an audiologist directly, so no referral is needed to come in for a hearing evaluation. Some insurance plans ask for one before they will pay, so it is worth a quick call to your plan first if you intend to claim.",
      },
      {
        q: "How long does a first appointment take?",
        a: "Plan on about an hour to ninety minutes. That covers your history, the evaluation itself, and enough time afterwards to go through the results properly rather than handing you a printout on the way out.",
      },
      {
        q: "Can you repair hearing aids you did not sell me?",
        a: "Usually, yes. We service most major manufacturers, handle cleanings and humidity treatments in-office, and can send a device back to its manufacturer when a repair needs to go beyond what we can do here. Call first with the make and model so we can tell you what is realistic.",
      },
      {
        q: "Do you test children in Kennewick?",
        a: "We provide pediatric testing from ages four through eighteen at this clinic. Testing a young child well takes a different approach than testing an adult, so let us know the age when you book and we will schedule accordingly.",
      },
      {
        q: "Which insurance do you take?",
        a: "We work with a range of plans and also handle Washington L&I extended hearing protection claims. Coverage for hearing aids in particular varies widely between plans, so call the clinic with your insurer's name and we will tell you what we can before you commit to anything.",
      },
      {
        q: "Is this the location for industrial hearing screenings?",
        a: "Yes. Our CAOHC-certified screeners run occupational hearing conservation programs for Columbia Basin employers, and Kennewick is where those are coordinated. Ask for our Practice Manager when you call.",
      },
    ],
  },
  {
    slug: "west-richland",
    city: "West Richland",
    h1: "Audiologist & Hearing Aids in West Richland, WA",
    title:
      "Audiologist in West Richland, WA | Hearing Aids & Hearing Tests | Columbia Basin Hearing Center",
    description:
      "Hearing evaluations, hearing aids, tinnitus care and repairs on Bombing Range Rd in West Richland, WA. Part of Columbia Basin Hearing Center. Call (509) 214-0330.",
    phone: "(509) 214-0330",
    tel: "tel:15092140330",
    street: "1468 Bombing Range Rd.",
    cityStateZip: "West Richland, WA 99353",
    mapQuery: "1468 Bombing Range Rd, West Richland, WA 99353",
    geo: { lat: 46.288242, lng: -119.3504331 },
    hours: STANDARD_HOURS,
    intro: [
      "Our West Richland clinic sits on Bombing Range Road, the road most of West Richland uses to get anywhere. It exists for a straightforward reason: a lot of our patients live on this side of the river and did not love the idea of crossing into Kennewick every time a hearing aid needed adjusting.",
      "The clinic handles the full range of everyday audiology care. Comprehensive hearing evaluations, hearing aid fittings and follow-up programming, cleanings and repairs, custom hearing protection, and tinnitus support are all available here. It is the same practice, the same records, and the same standard of care as our Kennewick office, in a building that is a great deal easier to get to if you live in West Richland or the western edge of Richland.",
      "Hearing aids need more attention in the first few months than most people expect. Having somewhere close by to drop in for a quick adjustment is often the difference between a device that gets worn and one that ends up in a drawer.",
    ],
    serves: ["West Richland", "Richland", "Benton City", "Prosser", "Kennewick"],
    gettingHere: [
      {
        heading: "Finding the office",
        body: "We are at 1468 Bombing Range Rd. Bombing Range Road runs north to south through the middle of West Richland and connects to Van Giesen Street at its southern end, which is how most patients arrive from Richland. The clinic is on the main road rather than tucked into a side street, so it is easy to spot on a first visit.",
      },
      {
        heading: "Parking and access",
        body: "There is off-street parking at the building and the entrance is at ground level, with no stairs to negotiate on the way in. Let us know when you book if you need extra help getting from the car to the door.",
      },
      {
        heading: "Coming from Richland or Benton City",
        body: "From central Richland the usual route is Van Giesen Street west across the river and then north onto Bombing Range Road, generally about ten to fifteen minutes. From Benton City, Highway 224 to Keene Road is the common approach. Allow a few extra minutes at school pick-up times.",
      },
    ],
    faqs: [
      {
        q: "Is West Richland a full clinic or just a satellite office?",
        a: "It is a working clinic, not a drop-box. Evaluations, fittings, programming, cleanings and repairs all happen here. A small number of specialised services are coordinated through our Kennewick office, and we will tell you plainly when booking if what you need is one of them.",
      },
      {
        q: "Can I get my hearing aids cleaned or adjusted without a full appointment?",
        a: "Call ahead and we will usually find you a short slot. Cleanings, humidity treatments, tube and dome changes and minor programming tweaks do not need a full evaluation appointment. Please do not simply turn up, as we may be with another patient.",
      },
      {
        q: "Do you fit custom hearing protection here?",
        a: "Yes. We take impressions for custom-molded protection at this clinic, which is what most hunters, shooters, musicians and people working in loud environments end up needing. Off-the-shelf plugs are a compromise; custom molds are not.",
      },
      {
        q: "What number should I call for this location?",
        a: "Call (509) 214-0330 for the West Richland clinic directly. That reaches the right calendar. If you have been given a different number from an advertisement, it will still get you to us, but the direct line is faster.",
      },
      {
        q: "I was seen in Kennewick. Can I follow up in West Richland?",
        a: "Yes, and you should choose whichever is more convenient. It is one practice with one set of patient records, so your audiologist can see your history and your device settings regardless of which clinic you are sitting in.",
      },
      {
        q: "Do you help with tinnitus at this location?",
        a: "Yes. Tinnitus assessment and management is available here, and our practice has a particular depth in it through Dr. Shannon Marie's work. If your tinnitus is the main reason you are calling, say so when you book so we can allow enough time.",
      },
    ],
  },
  {
    slug: "walla-walla",
    city: "Walla Walla",
    h1: "Audiologist & Hearing Aids in Walla Walla, WA",
    title:
      "Audiologist in Walla Walla, WA | Hearing Aids & Tinnitus Care | Columbia Basin Hearing Center",
    description:
      "Columbia Basin Hearing Center in downtown Walla Walla, WA. Hearing evaluations, hearing aids, tinnitus care and repairs by appointment. Call (509) 876-4541.",
    phone: "(509) 876-4541",
    tel: "tel:15098764541",
    street: "300 S. 2nd Ave.",
    cityStateZip: "Walla Walla, WA 99362",
    mapQuery: "300 S 2nd Ave, Walla Walla, WA 99362",
    geo: { lat: 46.063971, lng: -118.337257 },
    hours: APPOINTMENT_ONLY,
    intro: [
      "Our Walla Walla clinic is at 300 S. 2nd Ave., close to the middle of town. It runs by appointment, which means the day is built around the people who have booked rather than around a waiting room. Call ahead and we will find you a time.",
      "Walla Walla has not historically had a great deal of audiology choice, and that is precisely why we are here. Patients in the valley should not have to drive to the Tri-Cities for a hearing test, a set of hearing aids, or the follow-up appointments that make those hearing aids actually work. Evaluations, fittings, programming, repairs and tinnitus care are all available at this location.",
      "Because the clinic operates on an appointment basis, calling first is not a formality. It is the only reliable way to be sure someone is there when you arrive.",
    ],
    serves: ["Walla Walla", "College Place", "Milton-Freewater", "Dayton", "Waitsburg", "Touchet"],
    gettingHere: [
      {
        heading: "Finding the office",
        body: "We are at 300 S. 2nd Ave., in the downtown grid a short distance south of Main Street. Second Avenue runs north to south through the centre of town, so if you know downtown Walla Walla at all you will know the street.",
      },
      {
        heading: "Parking and access",
        body: "Downtown street parking is the usual option, and it is worth allowing a few minutes to find a space at busier times of day. If parking or walking any distance is difficult for you, tell us when you book and we will talk through the easiest way to arrive.",
      },
      {
        heading: "Coming from the valley",
        body: "From College Place the drive is only a few minutes. From Milton-Freewater, Dayton or Waitsburg, allow twenty to forty minutes depending on where you are starting. Because we work by appointment, let us know if you are travelling any distance and we will do our best to give you a time that makes the trip worthwhile.",
      },
    ],
    faqs: [
      {
        q: "Why is the Walla Walla clinic appointment only?",
        a: "Our audiology team covers Walla Walla alongside the Tri-Cities clinics, so the office is staffed around booked appointments rather than kept open for walk-ins. Calling first means you get a confirmed time with the right person, instead of a locked door.",
      },
      {
        q: "How far ahead do I need to book?",
        a: "It varies with how busy the schedule is. Call (509) 876-4541 and we will tell you honestly what is available. If something is urgent, such as a device that has stopped working entirely, say so and we will try to work you in sooner.",
      },
      {
        q: "Do I have to drive to Kennewick for anything?",
        a: "For the great majority of care, no. Evaluations, fittings, programming, cleanings and repairs are handled here. A small number of specialised services are coordinated from Kennewick, and we will tell you up front rather than after you have made the trip.",
      },
      {
        q: "Can you help if my hearing aids came from somewhere else?",
        a: "Usually. We service most major manufacturers and can arrange a factory repair when one is needed. Call with the make and model and we will tell you what can be done before you book.",
      },
      {
        q: "Do you see patients from Oregon?",
        a: "Yes. Milton-Freewater and the surrounding Oregon communities are a short drive, and we regularly see patients from across the state line. Insurance rules can differ, so mention your plan when you call.",
      },
      {
        q: "What should I bring to my first appointment?",
        a: "Your current hearing aids if you have any, a list of medications, your insurance details, and if at all possible someone who knows your hearing well. A spouse or adult child often notices patterns that the person with the hearing loss has stopped noticing.",
      },
    ],
  },
];

export const clinicBySlug = (slug: ClinicSlug) => CLINICS.find((c) => c.slug === slug);

/** Services offered at every clinic, phrased for a local landing page. */
export const CLINIC_SERVICES = [
  {
    title: "Comprehensive hearing evaluations",
    body: "A full diagnostic evaluation rather than a quick pass or fail screening, so you leave knowing what kind of hearing loss you have, how much of it there is, and what it means in practice.",
  },
  {
    title: "Hearing aids, fitted and programmed",
    body: "We work with the major manufacturers across a range of budgets, then program and fine-tune the device to your actual hearing and your actual life. The fitting matters more than the brand.",
  },
  {
    title: "Tinnitus evaluation and treatment",
    body: "Ringing, buzzing or hissing that will not go away is treatable far more often than people are told. Our practice has a particular depth in tinnitus care through Dr. Shannon Marie's work.",
  },
  {
    title: "Cleaning, repairs and adjustments",
    body: "In-office cleanings, humidity treatments, tube and dome changes, and manufacturer repairs when they are needed. Most devices that stop working have not actually died.",
  },
];
