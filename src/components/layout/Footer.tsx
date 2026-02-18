import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream mt-20">
      <Container className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-2xl tracking-wider mb-4">
              {SITE_NAME}
            </h3>
            <p className="text-cream/70 text-sm leading-relaxed">
              Exquisite lab-grown diamond jewelry crafted with precision and
              purpose. Ethical luxury for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>
                <Link href="/products?category=rings" className="hover:text-gold transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link href="/products?category=necklaces" className="hover:text-gold transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link href="/products?category=earrings" className="hover:text-gold transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link href="/products?category=bracelets" className="hover:text-gold transition-colors">
                  Bracelets
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  Lab-Grown Diamonds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>hello@celydiamond.com</li>
              <li>1-800-CELY-DIA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-8 text-center text-sm text-cream/50">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
