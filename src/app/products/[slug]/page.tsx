import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Shield, Truck, RotateCcw } from "lucide-react";
import Container from "@/components/ui/Container";
import ProductSpecs from "@/components/products/ProductSpecs";
import AddToCartButton from "@/components/products/AddToCartButton";
import { products, getProductBySlug } from "@/data/products";
import { formatCurrency } from "@/lib/utils";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="py-8 sm:py-16">
      <Container>
        {/* Breadcrumb */}
        <Link
          href="/products"
          className="inline-flex items-center text-sm text-charcoal-light hover:text-gold transition-colors mb-8"
        >
          <ChevronLeft size={16} />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="aspect-square rounded-lg overflow-hidden relative bg-cream">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Details */}
          <div>
            <p className="text-xs text-charcoal-light uppercase tracking-wide mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-medium text-gold">
                {formatCurrency(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-charcoal-light line-through text-lg">
                  {formatCurrency(product.compareAtPrice)}
                </span>
              )}
            </div>

            <p className="text-charcoal-light leading-relaxed mb-8">
              {product.description}
            </p>

            <AddToCartButton product={product} />

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-cream-dark">
              <div className="text-center">
                <Truck size={20} className="mx-auto mb-2 text-gold" />
                <p className="text-xs text-charcoal-light">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield size={20} className="mx-auto mb-2 text-gold" />
                <p className="text-xs text-charcoal-light">Lifetime Warranty</p>
              </div>
              <div className="text-center">
                <RotateCcw size={20} className="mx-auto mb-2 text-gold" />
                <p className="text-xs text-charcoal-light">30-Day Returns</p>
              </div>
            </div>

            {/* Specs */}
            <div className="mt-8">
              <ProductSpecs
                specs={product.diamondSpecs}
                metalType={product.metalType}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
