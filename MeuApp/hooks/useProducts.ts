// hooks/useProducts.ts
import { useEffect, useState } from "react";
import { getAllProducts, getProductsByCategory } from "../services/products";
import { Product } from "../types/product";

export function useProducts(categoryId?: string) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId).then(setProducts);
    } else {
      getAllProducts().then(setProducts);
    }
  }, [categoryId]);

  return { products };
}
