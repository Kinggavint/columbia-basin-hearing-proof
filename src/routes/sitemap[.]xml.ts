import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// TODO: set this to the production origin once the domain is pointed at this site.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

/** Every content page, in rough order of importance. */
const CONTENT_PATHS = [
  "/about-us",
  "/services",
  "/do-you-have-a-loss",
  "/contact-us",
  "/online-hearing-screening",
  "/effectively-communicating-with-a-hearing-loss",
  "/otc-legislation",
  "/hearing-heroes",
  "/sound-shield-program",
  "/patient-ambassador-program",
  "/tinnitus-relief-management-program",
  "/hearing-up",
  "/for-educators",
  "/third-party-payers",
  "/li-extended-protection",
  "/lenire-from-neuromod",
  "/lace-ai-pro",
  "/nuance-cbhc",
  "/the-library",
  "/video-library",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          ...CONTENT_PATHS.map((path) => ({
            path,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
