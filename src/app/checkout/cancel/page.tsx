import Link from "next/link";
import { XCircle } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CheckoutCancelPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <XCircle size={64} className="mx-auto mb-6 text-charcoal-light/40" />
          <h1 className="font-serif text-3xl sm:text-4xl mb-4">
            Checkout Cancelled
          </h1>
          <p className="text-charcoal-light mb-8">
            No worries! Your cart items have been saved. You can return to
            checkout whenever you&apos;re ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cart"
              className="inline-block bg-gold text-white px-8 py-3 hover:bg-gold-dark transition-colors"
            >
              Return to Cart
            </Link>
            <Link
              href="/products"
              className="inline-block border-2 border-gold text-gold px-8 py-3 hover:bg-gold hover:text-white transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
