import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LocalBusinessJsonLd } from "@/components/site/structured-data";
import { SiteLayout } from "@/components/site/layout";
import { PRIMARY_PHONE, PRIMARY_TEL } from "@/components/site/content";

function NotFoundComponent() {
  const links = [
    { to: "/services", label: "Services" },
    { to: "/about-us", label: "Our team" },
    { to: "/online-store", label: "Online store" },
    { to: "/contact-us", label: "Contact us" },
  ];

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-surface">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full brand-gradient opacity-[0.07] blur-3xl"
        />
        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <p className="eyebrow text-accent">Error 404</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-ink sm:text-5xl">
            We couldn&apos;t find that page.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            The link may be out of date, or the page may have moved. Here&apos;s where most people
            are headed — or just call us and we&apos;ll point you the right way.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={PRIMARY_TEL}
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
            >
              Call {PRIMARY_PHONE}
            </a>
            <Link
              to="/"
              className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              Back to home
            </Link>
          </div>
          <ul className="mt-12 flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Columbia Basin Hearing Center | Audiologists in the Tri-Cities" },
      { name: "description", content: "Doctors of Audiology in Kennewick, West Richland and Walla Walla. Comprehensive hearing evaluations, tinnitus treatment and hearing aid care for nearly 50 years." },
      { name: "author", content: "Columbia Basin Hearing Center" },
      { property: "og:title", content: "Columbia Basin Hearing Center | Audiologists in the Tri-Cities" },
      { property: "og:description", content: "Doctors of Audiology in Kennewick, West Richland and Walla Walla. Comprehensive hearing evaluations, tinnitus treatment and hearing aid care for nearly 50 years." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Columbia Basin Hearing Center | Audiologists in the Tri-Cities" },
      { name: "twitter:description", content: "Doctors of Audiology in Kennewick, West Richland and Walla Walla. Comprehensive hearing evaluations, tinnitus treatment and hearing aid care for nearly 50 years." },
      { property: "og:image", content: "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/c8ffc0e6-4cea-45b5-9e54-e321e5970f77/Hearing+Small+Size.jpg" },
      { name: "twitter:image", content: "https://images.squarespace-cdn.com/content/v1/6627c873af0c127944582e9e/c8ffc0e6-4cea-45b5-9e54-e321e5970f77/Hearing+Small+Size.jpg" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <LocalBusinessJsonLd />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
