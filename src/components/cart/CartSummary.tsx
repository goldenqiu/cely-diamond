"use client";

import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function CartSummary({ compact = false }: { compact?: boolean }) {
  const { items, totalPrice, setIsCartOpen } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            id: item.product.id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            image: item.product.images[0],
          })),
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-charcoal-light">Subtotal</span>
        <span className="font-serif text-lg">{formatCurrency(totalPrice)}</span>
      </div>
      {!compact && totalPrice >= 50000 && (
        <p className="text-sm text-green-700 mb-4">
          You qualify for complimentary shipping!
        </p>
      )}
      <Button
        onClick={handleCheckout}
        disabled={loading || items.length === 0}
        className="w-full"
        size={compact ? "md" : "lg"}
      >
        {loading ? (
          <Loader2 size={18} className="animate-spin mr-2" />
        ) : null}
        {loading ? "Redirecting..." : "Checkout"}
      </Button>
      {compact && (
        <Link
          href="/cart"
          onClick={() => setIsCartOpen(false)}
          className="block text-center text-sm text-charcoal-light hover:text-gold mt-3 underline"
        >
          View full cart
        </Link>
      )}
    </div>
  );
}
