import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductGrid from "@/components/products/ProductGrid";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Featured Pieces"
          subtitle="Handpicked selections from our latest collection, each a testament to exceptional craftsmanship."
        />
        <ProductGrid products={featured} />
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block border-2 border-gold text-gold px-8 py-3 hover:bg-gold hover:text-white transition-colors tracking-wide uppercase text-sm"
          >
            View All Jewelry
          </Link>
        </div>
      </Container>
    </section>
  );
}
