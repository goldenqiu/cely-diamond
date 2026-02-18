import { Product } from "../types/product";

export const products: Product[] = [
  // Rings
  {
    id: "ring-001",
    slug: "eternal-solitaire-ring",
    name: "Eternal Solitaire Ring",
    description:
      "A timeless solitaire ring featuring a brilliant round-cut lab-grown diamond set in 18K white gold. The classic four-prong setting allows maximum light to enter the stone, creating exceptional brilliance and fire. Perfect for engagements or as a statement piece.",
    shortDescription: "Classic round-cut solitaire in 18K white gold",
    price: 289500,
    category: "rings",
    images: ["/images/products/ring-001.jpg"],
    featured: true,
    diamondSpecs: {
      carat: 1.5,
      cut: "Excellent",
      color: "E",
      clarity: "VS1",
      shape: "Round",
    },
    metalType: "18K White Gold",
    inStock: true,
  },
  {
    id: "ring-002",
    slug: "aurora-halo-ring",
    name: "Aurora Halo Ring",
    description:
      "A stunning halo engagement ring with a cushion-cut center stone surrounded by a delicate halo of smaller diamonds. Set in 18K rose gold for a warm, romantic aesthetic. The pavé band adds extra sparkle from every angle.",
    shortDescription: "Cushion-cut halo ring in 18K rose gold",
    price: 345000,
    compareAtPrice: 395000,
    category: "rings",
    images: ["/images/products/ring-002.jpg"],
    featured: false,
    diamondSpecs: {
      carat: 1.2,
      cut: "Excellent",
      color: "F",
      clarity: "VS2",
      shape: "Cushion",
    },
    metalType: "18K Rose Gold",
    inStock: true,
  },
  {
    id: "ring-003",
    slug: "celestial-three-stone-ring",
    name: "Celestial Three-Stone Ring",
    description:
      "An elegant three-stone ring symbolizing past, present, and future. The emerald-cut center stone is flanked by two trapezoid side stones, all set in platinum for enduring beauty. A meaningful choice for milestone moments.",
    shortDescription: "Emerald-cut three-stone ring in platinum",
    price: 425000,
    category: "rings",
    images: ["/images/products/ring-003.jpg"],
    featured: true,
    diamondSpecs: {
      carat: 2.0,
      cut: "Excellent",
      color: "D",
      clarity: "VVS2",
      shape: "Emerald",
    },
    metalType: "Platinum",
    inStock: true,
  },

  // Necklaces
  {
    id: "necklace-001",
    slug: "lumiere-pendant-necklace",
    name: "Lumière Pendant Necklace",
    description:
      "A breathtaking pendant featuring a pear-shaped lab-grown diamond suspended from a delicate 18K white gold chain. The bezel setting provides a sleek, modern look while securely holding the stone. An everyday luxury piece.",
    shortDescription: "Pear-shaped diamond pendant in 18K white gold",
    price: 189500,
    category: "necklaces",
    images: ["/images/products/necklace-001.jpg"],
    featured: true,
    diamondSpecs: {
      carat: 0.75,
      cut: "Excellent",
      color: "E",
      clarity: "VS1",
      shape: "Pear",
    },
    metalType: "18K White Gold",
    inStock: true,
  },
  {
    id: "necklace-002",
    slug: "infinity-diamond-necklace",
    name: "Infinity Diamond Necklace",
    description:
      "A graceful station necklace featuring five graduated round-cut lab-grown diamonds connected by a fine 18K yellow gold chain. The floating diamond design creates an effortlessly elegant look for any occasion.",
    shortDescription: "Five-diamond station necklace in 18K yellow gold",
    price: 265000,
    category: "necklaces",
    images: ["/images/products/necklace-002.jpg"],
    featured: false,
    diamondSpecs: {
      carat: 1.0,
      cut: "Excellent",
      color: "F",
      clarity: "VS2",
      shape: "Round",
    },
    metalType: "18K Yellow Gold",
    inStock: true,
  },
  {
    id: "necklace-003",
    slug: "grace-riviere-necklace",
    name: "Grace Rivière Necklace",
    description:
      "A magnificent rivière necklace with graduated round-cut diamonds set in a continuous line of platinum. This showstopping piece transitions seamlessly from day to evening wear, making it the ultimate statement of refined luxury.",
    shortDescription: "Graduated diamond rivière in platinum",
    price: 785000,
    category: "necklaces",
    images: ["/images/products/necklace-003.jpg"],
    featured: false,
    diamondSpecs: {
      carat: 5.0,
      cut: "Excellent",
      color: "D",
      clarity: "VS1",
      shape: "Round",
    },
    metalType: "Platinum",
    inStock: true,
  },

  // Earrings
  {
    id: "earring-001",
    slug: "classic-stud-earrings",
    name: "Classic Stud Earrings",
    description:
      "Timeless round brilliant-cut diamond stud earrings set in 18K white gold with secure screw-back closures. These versatile studs are the perfect foundation for any jewelry collection, offering effortless elegance for everyday wear.",
    shortDescription: "Round brilliant studs in 18K white gold",
    price: 159500,
    category: "earrings",
    images: ["/images/products/earring-001.jpg"],
    featured: true,
    diamondSpecs: {
      carat: 1.0,
      cut: "Excellent",
      color: "E",
      clarity: "VS1",
      shape: "Round",
    },
    metalType: "18K White Gold",
    inStock: true,
  },
  {
    id: "earring-002",
    slug: "cascade-drop-earrings",
    name: "Cascade Drop Earrings",
    description:
      "Elegant drop earrings featuring marquise-cut diamonds that cascade gracefully. Set in 18K rose gold, these earrings create beautiful movement and catch the light with every turn. Ideal for special occasions and evening events.",
    shortDescription: "Marquise-cut drop earrings in 18K rose gold",
    price: 215000,
    category: "earrings",
    images: ["/images/products/earring-002.jpg"],
    featured: false,
    diamondSpecs: {
      carat: 0.8,
      cut: "Excellent",
      color: "F",
      clarity: "VS2",
      shape: "Marquise",
    },
    metalType: "18K Rose Gold",
    inStock: true,
  },
  {
    id: "earring-003",
    slug: "nova-hoop-earrings",
    name: "Nova Hoop Earrings",
    description:
      "Modern inside-out diamond hoop earrings set in 18K yellow gold. The continuous row of round brilliant-cut diamonds creates a stunning circle of light. Hinged snap-back closures ensure secure and comfortable wear.",
    shortDescription: "Diamond inside-out hoops in 18K yellow gold",
    price: 325000,
    category: "earrings",
    images: ["/images/products/earring-003.jpg"],
    featured: false,
    diamondSpecs: {
      carat: 2.0,
      cut: "Excellent",
      color: "E",
      clarity: "VS1",
      shape: "Round",
    },
    metalType: "18K Yellow Gold",
    inStock: true,
  },

  // Bracelets
  {
    id: "bracelet-001",
    slug: "eternity-tennis-bracelet",
    name: "Eternity Tennis Bracelet",
    description:
      "A classic tennis bracelet featuring a continuous line of round brilliant-cut lab-grown diamonds set in 18K white gold. The four-prong settings maximize brilliance while maintaining a sleek profile. A timeless essential for the modern woman.",
    shortDescription: "Classic tennis bracelet in 18K white gold",
    price: 395000,
    category: "bracelets",
    images: ["/images/products/bracelet-001.jpg"],
    featured: false,
    diamondSpecs: {
      carat: 3.0,
      cut: "Excellent",
      color: "E",
      clarity: "VS1",
      shape: "Round",
    },
    metalType: "18K White Gold",
    inStock: true,
  },
  {
    id: "bracelet-002",
    slug: "whisper-bangle",
    name: "Whisper Diamond Bangle",
    description:
      "A delicate bangle bracelet with a single row of pavé-set diamonds across the top half, crafted in 18K rose gold. The hinged design with push-button clasp ensures easy on-and-off while maintaining a seamless look.",
    shortDescription: "Pavé diamond bangle in 18K rose gold",
    price: 245000,
    compareAtPrice: 289000,
    category: "bracelets",
    images: ["/images/products/bracelet-002.jpg"],
    featured: false,
    diamondSpecs: {
      carat: 1.5,
      cut: "Excellent",
      color: "F",
      clarity: "VS2",
      shape: "Round",
    },
    metalType: "18K Rose Gold",
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
