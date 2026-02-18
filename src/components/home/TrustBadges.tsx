import { Shield, Leaf, Award, Truck } from "lucide-react";
import Container from "@/components/ui/Container";

const badges = [
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "Every piece is covered for life",
  },
  {
    icon: Leaf,
    title: "Ethically Created",
    description: "Sustainable lab-grown diamonds",
  },
  {
    icon: Award,
    title: "Certified Quality",
    description: "IGI-certified diamonds",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary on orders $500+",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 border-t border-cream-dark">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge) => (
            <div key={badge.title} className="text-center">
              <badge.icon
                size={32}
                className="mx-auto mb-3 text-gold"
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-base mb-1">{badge.title}</h3>
              <p className="text-charcoal-light text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
