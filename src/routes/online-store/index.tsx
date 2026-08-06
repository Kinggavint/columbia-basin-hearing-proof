import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { CallToAction, PageHero, Section, SectionHeading, pageMeta } from "@/components/site/blocks";
import { IMG } from "@/components/site/content";
import { ProductGrid } from "@/components/site/product-card";
import { PRODUCTS, STORE_CATEGORIES, productsIn } from "@/components/site/store";

const TITLE = "Online Hearing Supplies — Columbia Basin Hearing Center";
const DESCRIPTION =
  "We offer the best in hearing supplies to our dedicated audiences, ensuring an excellent experience and product, everytime!";

export const Route = createFileRoute("/online-store/")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, image: IMG.storeGraphic }),
  component: OnlineStore,
});

function OnlineStore() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Online store"
        title={
          <>
            Your one stop shop for hearing accessories,{" "}
            <span className="text-accent">programs and more.</span>
          </>
        }
        lead="Get ready for an effortless shopping experience with Columbia Basin Hearing Center's store! Whether you prefer to pick up your purchase at our front desk for ultimate convenience or have it shipped directly to your doorstep, we've got you covered. Just find your desired product, add it to your cart, and place your order. Shop with us today and enjoy the ultimate in convenience and service!"
        image={IMG.storeGraphic}
        imageAlt="A team member smiling while holding a small box in front of the Columbia Basin Hearing Center online store sign"
      />

      <Section tone="surface">
        <SectionHeading eyebrow="Browse" title="Shop by category" />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {STORE_CATEGORIES.map((cat) => {
            const count = productsIn(cat.slug).length;
            return (
              <li key={cat.slug}>
                <Link
                  to="/online-store/$category"
                  params={{ category: cat.slug }}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <h3 className="text-xl font-semibold text-ink">{cat.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent">
                    {count} {count === 1 ? "product" : "products"}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {cat.blurb}
                  </p>
                  <span className="mt-6 text-sm font-semibold text-primary">
                    Shop {cat.name} <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section id="all">
        <SectionHeading
          eyebrow={`${PRODUCTS.length} products`}
          title="Columbia Basin Hearing Center Online Store"
        />
        <ProductGrid products={PRODUCTS} />
      </Section>

      <CallToAction
        title="Not sure which supply you need?"
        body="Call the clinic and describe your device — we'll tell you exactly what fits, and often we have it behind the front desk."
      />
    </SiteLayout>
  );
}
