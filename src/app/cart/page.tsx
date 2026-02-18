"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import Container from "@/components/ui/Container";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items } = useCart();

  return (
    <section className="py-16">
      <Container>
        <h1 className="font-serif text-3xl sm:text-4xl text-center mb-12">
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag
              size={48}
              className="mx-auto mb-4 text-charcoal-light/40"
            />
            <p className="text-charcoal-light text-lg mb-6">
              Your cart is empty
            </p>
            <Link
              href="/products"
              className="inline-block bg-gold text-white px-8 py-3 hover:bg-gold-dark transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-cream-dark/50 rounded-lg p-6 sticky top-28">
                <h2 className="font-serif text-xl mb-6">Order Summary</h2>
                <CartSummary />
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
