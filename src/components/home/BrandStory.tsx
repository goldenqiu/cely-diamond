import Link from "next/link";
import Container from "@/components/ui/Container";

export default function BrandStory() {
  return (
    <section className="py-20 bg-charcoal text-cream">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Our Philosophy
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl mb-6">
            Beauty Without Compromise
          </h2>
          <p className="text-cream/70 text-lg leading-relaxed mb-8">
            At CELY Diamond, we believe that luxury should never come at the
            cost of our planet. Our lab-grown diamonds are chemically, optically,
            and physically identical to mined diamonds &mdash; delivering the same
            fire, brilliance, and scintillation without the environmental impact.
          </p>
          <Link
            href="/about"
            className="inline-block border-2 border-gold text-gold px-8 py-3 hover:bg-gold hover:text-white transition-colors tracking-wide uppercase text-sm"
          >
            Learn More
          </Link>
        </div>
      </Container>
    </section>
  );
}
