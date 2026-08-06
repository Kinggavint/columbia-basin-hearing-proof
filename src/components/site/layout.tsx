import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { LOCATIONS, PRIMARY_PHONE, PRIMARY_TEL } from "./content";
import { NAV, PATIENT_PORTAL, type NavItem } from "./nav";

export function Wordmark({
  tone = "light",
  className = "h-8 sm:h-11",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}brand/cbhc-logo-white.webp`}
      alt="Columbia Basin Hearing Center — Better Living Through Better Hearing"
      width={1000}
      height={240}
      /* Source art is white, so invert it on light backgrounds. */
      className={`${className} w-auto shrink-0 ${tone === "light" ? "invert" : ""}`}
    />
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`size-3.5 shrink-0 ${className}`}
    >
      <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  const base =
    "flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-1.5 text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  if (!item.children) {
    return (
      <Link to={item.to} className={base} activeProps={{ className: `${base} text-primary` }}>
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link to={item.to} className={base}>
        {item.label}
        <ChevronDown className="transition-transform group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-0 top-full z-50 w-64 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="overflow-hidden rounded-xl border border-border bg-card p-2 shadow-lift">
          {item.children.map((child) => (
            <li key={child.to + child.label}>
              <Link
                to={child.to}
                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const focusable = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    // Move focus into the drawer so keyboard users aren't left behind the overlay.
    focusable()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      // Trap Tab inside the drawer while it is open.
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && (active === first || !panel?.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
      />
      <nav
        ref={panelRef}
        aria-label="Mobile"
        aria-modal="true"
        role="dialog"
        className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col overflow-y-auto bg-background shadow-lift"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <Wordmark />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <ul className="flex-1 px-4 py-4">
          {NAV.map((item) => (
            <li key={item.label} className="border-b border-border/60 py-1 last:border-0">
              <Link
                to={item.to}
                onClick={onClose}
                className="block rounded-lg px-2 py-3 text-base font-semibold text-ink transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="pb-2 pl-4">
                  {item.children.map((child) => (
                    <li key={child.to + child.label}>
                      <Link
                        to={child.to}
                        onClick={onClose}
                        className="block rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="space-y-3 border-t border-border px-6 py-6">
          <a
            href={PRIMARY_TEL}
            className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Call {PRIMARY_PHONE}
          </a>
          <a
            href={PATIENT_PORTAL}
            className="block rounded-full border border-border bg-card px-5 py-3 text-center text-sm font-semibold text-primary"
          >
            Patient Portal
          </a>
        </div>
      </nav>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" aria-label="Columbia Basin Hearing Center home" className="shrink-0">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PATIENT_PORTAL}
            className="hidden whitespace-nowrap text-sm font-semibold text-primary underline-offset-4 hover:underline xl:inline"
          >
            Patient Portal
          </a>
          <a
            href={PRIMARY_TEL}
            className="whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {PRIMARY_PHONE}
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="rounded-md p-2 text-primary transition-colors hover:bg-secondary lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Wordmark tone="dark" className="h-16" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
            Nearly 50 years of audiology care across the Columbia Basin — comprehensive diagnostics,
            tinnitus treatment, and hearing technology built around your life.
          </p>
        </div>

        <div>
          <h2 className="eyebrow text-ink-foreground/60">Locations</h2>
          <ul className="mt-5 space-y-4">
            {LOCATIONS.map((loc) => (
              <li key={loc.city}>
                <p className="text-sm font-semibold text-ink-foreground">{loc.city}</p>
                <p className="mt-0.5 text-sm text-ink-foreground/70">
                  {loc.street}
                  <br />
                  {loc.cityStateZip}
                </p>
                <a
                  href={loc.tel}
                  className="mt-1 inline-block text-sm text-ink-foreground/85 underline-offset-4 hover:text-ink-foreground hover:underline"
                >
                  {loc.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-ink-foreground/60">Quick links</h2>
          <ul className="mt-5 space-y-3">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-sm text-ink-foreground/85 transition-colors hover:text-ink-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={PATIENT_PORTAL}
                className="text-sm text-ink-foreground/85 transition-colors hover:text-ink-foreground"
              >
                Log Into Patient Portal
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-ink-foreground/15 px-6 pt-6">
        <p className="text-xs text-ink-foreground/55">
          © {new Date().getFullYear()} Columbia Basin Hearing Center. Better Living Through Better
          Hearing.
        </p>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
