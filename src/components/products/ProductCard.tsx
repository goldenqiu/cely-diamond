import Link from "next/link";
import { Diamond } from "lucide-react";
import { Product } from "@/types/product";
import { formatCurrency } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
    >
      {/* Image */}
      <div className="aspect-square product-image-placeholder rounded-lg overflow-hidden mb-4 relative">
        <Diamond
          size={48}
          className="text-gold/40 group-hover:text-gold/60 transition-colors"
        />
        {product.compareAtPrice && (
          <span className="absolute top-3 left-3 bg-gold text-white text-xs px-2 py-1 rounded">
            Sale
          </span>
        )}
      </div>

      {/* Info */}
      <div>
        <p className="text-xs text-charcoal-light uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="font-serif text-lg group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-charcoal-light text-sm mt-1 line-clamp-1">
          {product.shortDescription}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-medium text-gold">
            {formatCurrency(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-charcoal-light text-sm line-through">
              {formatCurrency(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
