"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function ProductFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const handleFilter = (value: string) => {
    if (value === "all") {
      router.push("/products");
    } else {
      router.push(`/products?category=${value}`);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.value}
          onClick={() => handleFilter(cat.value)}
          className={cn(
            "px-5 py-2 text-sm tracking-wide uppercase transition-all border rounded-full",
            activeCategory === cat.value
              ? "bg-gold text-white border-gold"
              : "border-cream-dark text-charcoal-light hover:border-gold hover:text-gold"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
