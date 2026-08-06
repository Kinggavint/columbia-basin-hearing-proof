import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { CallToAction, PageHero, Section, TextLink, pageMeta } from "@/components/site/blocks";
import { ProductGrid } from "@/components/site/product-card";
import { STORE_CATEGORIES, productsIn } from "@/components/site/store";

export const Route = createFileRoute("/online-store/$category")({
  loader: ({ params }) => {
    const category = STORE_CATEGORIES.find((c) => c.slug === params.category);
    if (!category) throw notFound();
    return { category, products: productsIn(category.slug) };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.category.name ?? "Online Store";
    return pageMeta({
      title: `${name} — Online Hearing Supplies — Columbia Basin Hearing Center`,
      description:
        loaderData?.category.blurb ??
        "We offer the best in hearing supplies to our dedicated audiences, ensuring an excellent experience and product, everytime!",
      image: loaderData?.products[0]?.images[0],
    });
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, products } = Route.useLoaderData();

  return (
    <SiteLayout>
      <PageHero eyebrow="Online store" title={category.name} lead={category.blurb}>
        <p className="mt-6 text-sm font-semibold text-accent">
          {products.length} {products.length === 1 ? "product" : "products"}
        </p>
      </PageHero>

      <Section tone="surface">
        <ProductGrid products={products} />
        <p className="mt-12 text-base text-muted-foreground">
          <TextLink to="/online-store">&larr; Back to the full store</TextLink>
        </p>
      </Section>

      <CallToAction
        title="Questions about a product?"
        body="Call the clinic — we stock most of these at the front desk and can tell you what actually fits your device."
      />
    </SiteLayout>
  );
}
