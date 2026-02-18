import Link from "next/link";
import Container from "@/components/ui/Container";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-cream via-cream-dark to-cream">
      <Container className="relative z-10">
        <div className="max-w-2xl">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Lab-Grown Diamonds
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
            Brilliance,
            <br />
            <span className="text-gold">Redefined</span>
          </h1>
          <p className="text-charcoal-light text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
            Discover exquisite lab-grown diamond jewelry that combines timeless
            elegance with modern ethics. Same sparkle, conscious choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-block bg-gold text-white px-10 py-4 text-center hover:bg-gold-dark transition-colors tracking-wide uppercase text-sm"
            >
              Shop the Collection
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-charcoal text-charcoal px-10 py-4 text-center hover:bg-charcoal hover:text-cream transition-colors tracking-wide uppercase text-sm"
            >
              Our Story
            </Link>
          </div>
        </div>
      </Container>

      {/* Decorative element */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <div className="w-full h-full bg-gradient-to-l from-gold/5 to-transparent" />
      </div>
    </section>
  );
}
