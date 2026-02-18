export interface DiamondSpecs {
  carat: number;
  cut: string;
  color: string;
  clarity: string;
  shape: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number; // in cents
  compareAtPrice?: number; // in cents
  category: string;
  images: string[];
  featured: boolean;
  diamondSpecs: DiamondSpecs;
  metalType: string;
  inStock: boolean;
}
