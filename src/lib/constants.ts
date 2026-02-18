export const SITE_NAME = "Maison Dorais";
export const SITE_DESCRIPTION =
  "Exquisite lab-grown diamond jewelry crafted with precision and purpose.";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "About", href: "/about" },
] as const;

export const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Rings", value: "rings" },
  { label: "Necklaces", value: "necklaces" },
  { label: "Earrings", value: "earrings" },
  { label: "Bracelets", value: "bracelets" },
] as const;

export const ANNOUNCEMENT_TEXT =
  "Complimentary shipping on orders over $500 | Lab-grown diamonds, real brilliance";
