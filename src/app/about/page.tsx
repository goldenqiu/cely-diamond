import { Metadata } from "next";
import Link from "next/link";
import { Gem, Leaf, Sparkles, Heart } from "lucide-react";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About CELY Diamond",
  description:
    "Learn about our commitment to creating exquisite lab-grown diamond jewelry with ethics and sustainability at its core.",
};

const values = [
  {
    icon: Gem,
    title: "Identical Brilliance",
    description:
      "Lab-grown diamonds are chemically, optically, and physically identical to mined diamonds. The same crystal structure, the same fire, the same hardness of 10 on the Mohs scale.",
  },
  {
    icon: Leaf,
    title: "Sustainable Luxury",
    description:
      "Our diamonds are created using advanced technology that requires significantly less energy and resources than traditional mining, with zero displacement of communities or ecosystems.",
  },
  {
    icon: Sparkles,
    title: "Expert Craftsmanship",
    description:
      "Each CELY piece is designed and crafted by master jewelers with decades of experience. We use only the finest precious metals and hand-select every diamond for exceptional quality.",
  },
  {
    icon: Heart,
    title: "Transparent Pricing",
    description:
      "By eliminating the traditional mining supply chain, we offer diamonds of the same quality at a fraction of the cost. Our pricing is transparent with no hidden markups.",
  },
];

export default function AboutPage() {
  return (
    <section className="py-16">
      <Container>
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl mb-6">
            Reimagining Diamond Jewelry
          </h1>
          <p className="text-charcoal-light text-lg leading-relaxed">
            CELY Diamond was founded with a singular vision: to create jewelry of
            extraordinary beauty while respecting our planet. We harness
            cutting-edge technology to grow diamonds that are indistinguishable
            from those formed deep within the earth &mdash; identical in every way
            that matters.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {values.map((value) => (
            <div key={value.title} className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <value.icon size={24} className="text-gold" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">{value.title}</h3>
                <p className="text-charcoal-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lab-grown education */}
        <div className="bg-charcoal text-cream rounded-lg p-10 sm:p-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-6">
            What Are Lab-Grown Diamonds?
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-cream/80 leading-relaxed">
            <p>
              Lab-grown diamonds are real diamonds created in controlled
              laboratory environments using advanced technological processes that
              replicate the conditions under which diamonds naturally form beneath
              the Earth&apos;s surface.
            </p>
            <p>
              Using either High Pressure High Temperature (HPHT) or Chemical
              Vapor Deposition (CVD) methods, a tiny diamond seed grows into a
              full-sized diamond over several weeks. The result is a genuine
              diamond with the same physical, chemical, and optical properties as
              a mined diamond.
            </p>
            <p>
              Every CELY diamond is independently certified by the International
              Gemological Institute (IGI), graded on the same 4Cs scale as mined
              diamonds: Cut, Color, Clarity, and Carat weight.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-block mt-8 bg-gold text-white px-10 py-4 hover:bg-gold-dark transition-colors tracking-wide uppercase text-sm"
          >
            Explore Our Collection
          </Link>
        </div>
      </Container>
    </section>
  );
}
