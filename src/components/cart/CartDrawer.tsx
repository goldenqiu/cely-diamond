"use client";

import { X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-cream-dark">
          <h2 className="font-serif text-xl">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-charcoal-light mb-2">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gold hover:text-gold-dark text-sm underline"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Summary */}
        {items.length > 0 && (
          <div className="border-t border-cream-dark p-6">
            <CartSummary compact />
          </div>
        )}
      </div>
    </>
  );
}
