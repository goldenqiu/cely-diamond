"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2"
      aria-label="Open cart"
    >
      <ShoppingBag size={22} className="text-charcoal" />
      {totalItems > 0 && (
        <span className="absolute -top-0.5 -right-0.5 bg-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
          {totalItems}
        </span>
      )}
    </button>
  );
}
