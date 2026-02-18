"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Button onClick={handleAdd} size="lg" className="w-full gap-2">
      {added ? (
        <>
          <Check size={18} />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingBag size={18} />
          Add to Cart
        </>
      )}
    </Button>
  );
}
