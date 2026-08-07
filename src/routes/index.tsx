import { useId } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG, LOCATIONS, PRIMARY_TEL, PROVIDERS, RATING, REVIEWS, SERVICES, STORIES } from "@/components/site/content";
import { SiteLayout } from "@/components/site/layout";
import { LocationStrip } from "@/components/site/blocks";
import { REVIEW_URL } from "@/components/site/nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Columbia Basin Hearing Center | Audiologists in the Tri-Cities" },
      {
        name: "description",
        content:
          "Doctors of Audiology in Kennewick, West Richland and Walla Walla. Comprehensive hearing evaluations, tinnitus treatment and hearing aid care for nearly 50 years.",
      },
      { property: "og:title", content: "Columbia Basin Hearing Center | Audiologists in the Tri-Cities" },
      {
        property: "og:description",
        content:
          "Doctors of Audiology in Kennewick, West Richland and Walla Walla. Comprehensive hearing evaluations, tinnitus treatment and hearing aid care for nearly 50 years.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMG.listening },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMG.listening },
    ],
  }),
  component: Index,
});

function StarIcon({ fill, size = 24 }: { fill: number; size?: number }) {
  const id = useId();
  const clipId = `${id}-clip`;
  const fillPct = Math.max(0, Math.min(100, fill));
  const starPath =
    "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width={(fillPct / 100) * 24} height={24} />
        </clipPath>
      </defs>
      <path d={starPath} fill="#ffffff" />
      <path d={starPath} fill="#facc15" clipPath={`url(#${clipId})`} />
    </svg>
  );
}

function StarRating({ rating = 4.9, size = 32 }: { rating?: number; size?: number }) {
  const fullStars = Math.floor(rating);
  const partial = rating - fullStars;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    let fill = 0;
    if (i < fullStars) fill = 100;
    else if (i === fullStars) fill = partial * 100;
    stars.push(<StarIcon key={i} fill={fill} size={size} />);
  }

  return (
    <span
      role="img"
      className="inline-flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
      title={`${rating} out of 5 stars`}
    >
      {stars}
    </span>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full brand-gradient opacity-[0.07] blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-14">
        <div>
          <p className="eyebrow text-accent">Get Help Hearing Better Today</p>
          <h1 className="mt-4 text-4xl font-bold uppercase leading-[1.05] text-ink sm:text-5xl lg:text-[3.4rem]">
            You&apos;ve lived with hearing frustrations for years,{" "}
            <span className="text-accent">solve them in one visit.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We know how exhausting it is to ask people to repeat themselves. By this weekend, you could
            be hearing every word. One appointment, a clear plan, and conversations you&apos;ve been missing
            becoming a thing of the past.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={PRIMARY_TEL}
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
            >
              Call to book your visit
            </a>
            <a
              href="#services"
              className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              See how we can help
            </a>
          </div>
          <dl className="mt-8 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6 sm:gap-6">
            <div>
              <dt className="font-display text-3xl font-bold text-primary">50</dt>
              <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">Years of care</dd>
            </div>
            <div>
              {/* stars scale down on narrow screens so they don't collide with the next stat */}
              <dt className="flex [&_svg]:size-4 sm:[&_svg]:size-6">
                <StarRating rating={Number(RATING.value)} size={24} />
              </dt>
              <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{RATING.count} Google reviews</dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-bold text-primary">3</dt>
              <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">Local clinics</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute inset-x-6 bottom-6 top-10 rounded-[2rem] brand-gradient opacity-90" />
          <img
            src={IMG.drShannonCutout}
            alt="Dr. Shannon Marie, Doctor of Audiology at Columbia Basin Hearing Center"
            loading="eager"
            className="relative mx-auto w-full max-w-md object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}


function Legacy() {
  return (
    <section className="border-b border-border bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={IMG.clinic}
            alt="Audiologist caring for a patient at Columbia Basin Hearing Center"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow text-accent">Our promise</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Nearly 50 years of helping people hear what they&apos;ve been missing
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            No more asking your spouse what the waiter said. No more turning the TV up until someone
            complains. Just the conversations, the movies, the grandkids&apos; voices, exactly the way you
            remember them.
          </p>
        </div>
      </div>
    </section>
  );
}


function Engage() {
  return (
    <section className="border-b border-border brand-gradient py-24 text-ink-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-ink-foreground/70">Engage packages</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-ink-foreground sm:text-4xl">
            The only reason to buy hearing aids at a big box store was price.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-foreground/80">
            That reason is gone. Our care packages match warehouse pricing, so the choice is simple: a
            membership card and a fitting kiosk, or a doctor and a team who know your name.
          </p>
          <a
            href={PRIMARY_TEL}
            className="mt-8 inline-block rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Call us to Engage Today!
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl bg-background/95 p-6 shadow-lift">
          <div className="aspect-video overflow-hidden rounded-lg bg-ink">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/4eG7Vg7K4yo"
              title="Engage Hearing Solution"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}



function Services() {
  return (
    <section id="services" className="border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="eyebrow text-accent">Services</p>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            We Can Help through a full suite of Audiological Services.
          </h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, i) => (
            <article key={service.title} className="bg-card p-8">
              <span className="font-display text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <a
            href={PRIMARY_TEL}
            className="inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

function Minimized() {
  const points = [
    { strong: "CORRECTLY", pre: "Your problem is ", post: " diagnosed." },
    { strong: "RIGHT", pre: "You receive the ", post: " kind of treatment." },
    {
      strong: "EXPERIENCED HEALTH CARE PROFESSIONALS",
      pre: "You are working together with the right team of ",
      post: " who have the skill and resolve to solving the problem.",
    },
  ];
  return (
    <section className="border-b border-border bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            The effects of hearing loss can be minimized if:
          </h2>
          <ol className="mt-10 space-y-6">
            {points.map((p, i) => (
              <li key={p.strong} className="flex gap-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <p className="pt-1.5 text-lg leading-relaxed text-muted-foreground">
                  {p.pre}
                  <strong className="font-semibold text-ink">{p.strong}</strong>
                  {p.post}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-3">
            {LOCATIONS.map((loc) => (
              <a
                key={loc.city}
                href={loc.tel}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Call our {loc.city} Office
              </a>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <img
            src={IMG.listening}
            alt="A woman holding her hand to her ear, listening carefully"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Providers() {
  return (
    <section className="border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-accent">Our team</p>
        <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
          Meet our Providers and Assistants
        </h2>
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
          {PROVIDERS.map((p) => (
            <article
              key={p.name}
              className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 shadow-soft sm:flex-row"
            >
              <img
                src={p.photo}
                alt={p.name}
                loading="lazy"
                className="aspect-[3/4] w-full shrink-0 self-start rounded-xl bg-secondary object-cover object-top sm:w-36"
              />
              <div className="min-w-0">
                <h3 className="text-lg font-semibold leading-snug text-ink sm:text-xl">{p.name}</h3>
                <p className="mt-1 text-sm font-semibold text-accent">{p.role}</p>
                <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-muted-foreground">
                  {p.bio}
                </p>
                <Link
                  to="/about-us"
                  hash="team"
                  className="mt-4 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Read full bio <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Heroes() {
  return (
    <section className="border-b border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-accent">Patient stories</p>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">We Help Heroes Everyday</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-ink shadow-lift">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/JbrwEZuYQTs"
                  title="We Help Heroes Everyday"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {STORIES.map((s) => (
              <figure
                key={s.name}
                className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <img
                  src={s.photo}
                  alt={s.name}
                  loading="lazy"
                  className="size-16 shrink-0 rounded-full bg-secondary object-cover"
                />
                <div>
                  <blockquote className="text-base leading-relaxed text-ink">{s.quote}</blockquote>
                  <figcaption className="mt-3 text-sm font-semibold text-muted-foreground">
                    {s.name}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-accent">Reviews</p>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              {RATING.value}{" "}
              <span className="text-xl font-medium text-muted-foreground">Out of 5 Stars</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Overall rating of {RATING.count} {RATING.source} reviews
            </p>
          </div>
          <a
            href={REVIEW_URL}
            className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
          >
            Leave Us Feedback
          </a>
        </div>
        <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="text-sm tracking-[0.2em] text-accent" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {r.text}
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-ink">
                {r.name} <span className="font-normal text-muted-foreground">· {r.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="border-b border-border bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-accent">Polar Plunge 2025</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Thank you for your amazing support of our team at this year&rsquo;s Polar Plunge!
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We gleefully paid in goosebumps so our community could help the Special Olympics of
            Washington!
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <img
            src={IMG.plunge}
            alt="Team members in polar bear costumes and blue shirts at the Polar Plunge"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <LocationStrip />
      <Legacy />
      <Engage />
      <Services />
      <Minimized />
      <Providers />
      <Heroes />
      <Reviews />
      <Community />
    </SiteLayout>
  );
}
