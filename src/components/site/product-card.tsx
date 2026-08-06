import { Link } from "@tanstack/react-router";
import { priceLabel, type Product } from "./store";

export function ProductCard({ product }: { product: Product }) {
  return (
    <li className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1">
      <Link
        to="/online-store/p/$slug"
        params={{ slug: product.slug }}
        className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <div className="aspect-square overflow-hidden bg-secondary">
          {product.images[0] ? (
            <img
              src={product.images[0]}
              alt={product.title}
              loading="lazy"
              className="h-full w-full object-contain p-6"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              No image
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-base font-semibold leading-snug text-ink">{product.title}</h3>
          <p className="mt-auto pt-4 font-display text-lg font-bold text-primary">
            {priceLabel(product)}
          </p>
        </div>
      </Link>
    </li>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </ul>
  );
}
