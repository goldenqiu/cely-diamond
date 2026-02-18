"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import Container from "@/components/ui/Container";
import CartIcon from "@/components/cart/CartIcon";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-cream-dark">
      <Container>
        <nav className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile menu button */}
          <button
            className="sm:hidden p-2 -ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop nav links */}
          <div className="hidden sm:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-charcoal-light hover:text-gold transition-colors text-sm tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-wider text-charcoal">
              {SITE_NAME}
            </span>
          </Link>

          {/* Cart */}
          <CartIcon />
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-cream border-t border-cream-dark">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-charcoal-light hover:text-gold transition-colors text-sm tracking-wide uppercase py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
