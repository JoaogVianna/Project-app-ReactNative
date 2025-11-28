import { useState, useEffect } from "react";

const PRODUCTS: Record<string, any[]> = {
  doritos: [
    { id: "doritos-queijo", title: "Queijo Nacho", price: 7.99 },
    { id: "doritos-pimenta", title: "Pimenta Chipotle", price: 8.49 },
  ],

  bis: [
    { id: "bis-leite", title: "BIS Chocolate ao Leite", price: 5.49 },
    { id: "bis-branco", title: "BIS Branco", price: 5.99 },
  ],

  kitkat: [
    { id: "kitkat-classic", title: "KitKat Tradicional", price: 4.99 },
  ],
};

export function useProducts(subcategoryId: string) {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    if (subcategoryId) {
      setProducts(PRODUCTS[subcategoryId] || []);
    }
  }, [subcategoryId]);

  return { products };
}
