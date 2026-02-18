"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
  useCallback,
} from "react";
import { CartItem, CartAction, CartContextType } from "@/types/cart";
import { Product } from "@/types/product";

const CartContext = createContext<CartContextType | undefined>(undefined);

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find(
        (item) => item.product.id === action.product.id
      );
      if (existing) {
        return state.map((item) =>
          item.product.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { product: action.product, quantity: 1 }];
    }
    case "REMOVE_ITEM":
      return state.filter((item) => item.product.id !== action.productId);
    case "UPDATE_QUANTITY":
      if (action.quantity <= 0) {
        return state.filter((item) => item.product.id !== action.productId);
      }
      return state.map((item) =>
        item.product.id === action.productId
          ? { ...item, quantity: action.quantity }
          : item
      );
    case "CLEAR_CART":
      return [];
    case "HYDRATE":
      return action.items;
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cely-cart");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        dispatch({ type: "HYDRATE", items: parsed });
      } catch {
        // ignore invalid data
      }
    }
    setHydrated(true);
  }, []);

  // Persist to localStorage
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("cely-cart", JSON.stringify(items));
    }
  }, [items, hydrated]);

  const addItem = useCallback(
    (product: Product) => {
      dispatch({ type: "ADD_ITEM", product });
      setIsCartOpen(true);
    },
    []
  );

  const removeItem = useCallback(
    (productId: string) => dispatch({ type: "REMOVE_ITEM", productId }),
    []
  );

  const updateQuantity = useCallback(
    (productId: string, quantity: number) =>
      dispatch({ type: "UPDATE_QUANTITY", productId, quantity }),
    []
  );

  const clearCart = useCallback(
    () => dispatch({ type: "CLEAR_CART" }),
    []
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: hydrated ? items : [],
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems: hydrated ? totalItems : 0,
        totalPrice: hydrated ? totalPrice : 0,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
