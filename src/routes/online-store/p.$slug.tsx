import { useState } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { CallToAction, Section, SectionHeading, TextLink, pageMeta } from "@/components/site/blocks";
import { PRIMARY_PHONE, PRIMARY_TEL } from "@/components/site/content";
import { ProductGrid } from "@/components/site/product-card";
import { ProductJsonLd } from "@/components/site/structured-data";
import {
  PRODUCTS,
  STORE_CATEGORIES,
  priceLabel,
  productBySlug,
  productsIn,
} from "@/components/site/store";

export const Route = createFileRoute("/online-store/p/$slug")({
  loader: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    const siblings = (
      product.categories.length ? productsIn(product.categories[0]) : PRODUCTS
    )
      .filter((p) => p.slug !== product.slug)
      .slice(0, 4);
    return { product, siblings };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    return pageMeta({
      title: `${p?.title ?? "Product"} — Columbia Basin Hearing Center`,
      description: p?.body[0] ?? "Hearing supplies from Columbia Basin Hearing Center.",
      image: p?.images[0],
    });
  },
  component: ProductPage,
});

/**
 * Product copy from the store feed sometimes arrives as one long line of
 * bullet-separated specs. Split those into a real list.
 */
function splitBullets(line: string): string[] | null {
  if (!line.includes("•")) return null;
  return line
    .split("•")
    .map((s) => s.trim())
    .filter(Boolean);
}

function ProductPage() {
  const { product, siblings } = Route.useLoaderData();
  const [activeImage, setActiveImage] = useState(0);

  const categoryName = STORE_CATEGORIES.find((c) => c.slug === product.categories[0])?.name;

  return (
    <SiteLayout>
      <ProductJsonLd
        name={product.title}
        description={product.body[0]}
        image={product.images[0]}
        price={product.priceMin}
        url={product.url}
      />
      <Section tone="surface">
        <nav aria-label="Breadcrumb" className="mb-10 text-sm text-muted-foreground">
          <TextLink to="/online-store">Online Store</TextLink>
          {categoryName && (
            <>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <TextLink to={`/online-store/${product.categories[0]}`}>{categoryName}</TextLink>
            </>
          )}
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-ink">{product.title}</span>
        </nav>

        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              {product.images[activeImage] ? (
                <img
                  src={product.images[activeImage]}
                  alt={product.title}
                  className="aspect-square w-full object-contain p-10"
                />
              ) : (
                <div className="flex aspect-square items-center justify-center text-sm text-muted-foreground">
                  No image available
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <ul className="mt-4 flex flex-wrap gap-3">
                {product.images.map((img, i) => (
                  <li key={img}>
                    <button
                      type="button"
                      onClick={() => setActiveImage(i)}
                      aria-label={`View image ${i + 1} of ${product.images.length}`}
                      aria-current={i === activeImage}
                      className={`size-20 overflow-hidden rounded-xl border bg-card p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        i === activeImage ? "border-accent" : "border-border hover:border-accent/50"
                      }`}
                    >
                      <img src={img} alt="" className="h-full w-full object-contain" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            {categoryName && <p className="eyebrow text-accent">{categoryName}</p>}
            <h1 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              {product.title}
            </h1>
            <p className="mt-4 font-display text-3xl font-bold text-primary">
              {priceLabel(product)}
            </p>

            <div className="mt-8 space-y-4">
              {product.body.map((line, i) => {
                const bullets = splitBullets(line);
                if (bullets) {
                  return (
                    <ul key={i} className="space-y-3">
                      {bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-base leading-relaxed text-muted-foreground">
                    {line}
                  </p>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-card p-7 shadow-soft">
              <a
                href={product.url}
                className="block rounded-full bg-primary px-7 py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
              >
                Buy now
              </a>
              <a
                href={PRIMARY_TEL}
                className="mt-3 block rounded-full border border-border px-7 py-3.5 text-center text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Or call {PRIMARY_PHONE}
              </a>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Checkout is handled on our secure store. Pick up at the front desk or have it shipped
                to your door.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {siblings.length > 0 && (
        <Section>
          <SectionHeading eyebrow="You might also need" title="More from the store" />
          <ProductGrid products={siblings} />
        </Section>
      )}

      <CallToAction
        title="Not sure this is the right fit?"
        body="Bring your device in or call us — we'll tell you what actually works with it before you spend anything."
      />
    </SiteLayout>
  );
}
