"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/types/cart";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/utils";

export default function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4">
      {/* Image */}
      <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden relative bg-cream">
        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-serif text-sm truncate">{item.product.name}</h3>
        <p className="text-charcoal-light text-xs mt-0.5">
          {item.product.metalType}
        </p>
        <p className="text-gold font-medium text-sm mt-1">
          {formatCurrency(item.product.price)}
        </p>

        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center border border-cream-dark rounded">
            <button
              onClick={() =>
                updateQuantity(item.product.id, item.quantity - 1)
              }
              className="p-1 hover:text-gold transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className="px-2 text-sm">{item.quantity}</span>
            <button
              onClick={() =>
                updateQuantity(item.product.id, item.quantity + 1)
              }
              className="p-1 hover:text-gold transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>
          <button
            onClick={() => removeItem(item.product.id)}
            className="text-charcoal-light hover:text-red-500 transition-colors"
            aria-label="Remove item"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
