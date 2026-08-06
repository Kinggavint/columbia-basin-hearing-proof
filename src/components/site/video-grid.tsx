import { useState } from "react";
import { YT_EMBED, YT_THUMB, type Video } from "./videos";

/**
 * Click-to-load video grid. Renders lightweight thumbnails and only mounts the
 * YouTube iframe once a card is activated — 84 eager iframes would tank the page.
 */
export function VideoGrid({ videos, numbered = false }: { videos: Video[]; numbered?: boolean }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <ul className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {videos.map((video, i) => (
        <li
          key={video.id}
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
        >
          <div className="relative aspect-video bg-ink">
            {active === video.id ? (
              <iframe
                className="h-full w-full"
                src={`${YT_EMBED(video.id)}?autoplay=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setActive(video.id)}
                className="group relative block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`Play video: ${video.title}`}
              >
                <img
                  src={YT_THUMB(video.id)}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-opacity group-hover:opacity-80"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="flex size-16 items-center justify-center rounded-full bg-background/90 shadow-lift transition-transform group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="ml-1 size-7 fill-primary">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </button>
            )}
          </div>
          <div className="p-5">
            {numbered && (
              <span className="font-display text-xs font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
            )}
            <h3 className="mt-1 text-base font-semibold leading-snug text-ink">{video.title}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
}
