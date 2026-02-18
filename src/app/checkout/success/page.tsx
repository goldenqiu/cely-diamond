"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import { useCart } from "@/context/CartContext";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { clearCart } = useCart();

  useEffect(() => {
    if (sessionId) {
      clearCart();
    }
  }, [sessionId, clearCart]);

  return (
    <section className="py-24">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <CheckCircle size={64} className="mx-auto mb-6 text-green-600" />
          <h1 className="font-serif text-3xl sm:text-4xl mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-charcoal-light mb-2">
            Your order has been confirmed and is being prepared with care.
          </p>
          {sessionId && (
            <p className="text-sm text-charcoal-light/60 mb-8">
              Order reference: {sessionId.slice(-8).toUpperCase()}
            </p>
          )}
          <p className="text-charcoal-light mb-8">
            You will receive an email confirmation shortly with your order
            details and tracking information.
          </p>
          <Link
            href="/products"
            className="inline-block bg-gold text-white px-8 py-3 hover:bg-gold-dark transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <section className="py-24">
          <Container>
            <div className="text-center">Loading...</div>
          </Container>
        </section>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
