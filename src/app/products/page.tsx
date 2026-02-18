import { Suspense } from "react";
import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductFilter from "@/components/products/ProductFilter";
import ProductGrid from "@/components/products/ProductGrid";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop Lab-Grown Diamond Jewelry",
  description:
    "Browse our collection of exquisite lab-grown diamond rings, necklaces, earrings, and bracelets.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category = "all" } = await searchParams;
  const products = getProductsByCategory(category);

  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          title="Our Collection"
          subtitle="Each piece is crafted with ethically created lab-grown diamonds, offering the same brilliance and beauty as mined diamonds."
        />
        <Suspense fallback={null}>
          <ProductFilter />
        </Suspense>
        <ProductGrid products={products} />
      </Container>
    </section>
  );
}
