// hooks/useFavorites.ts
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "../types/product";

const KEY = "FAVORITE_PRODUCTS";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Product[]>([]);

  // Carrega favoritos
  useEffect(() => {
    loadFavorites();
  }, []);

  async function loadFavorites() {
    const json = await AsyncStorage.getItem(KEY);
    if (json) setFavorites(JSON.parse(json));
  }

  async function toggleFavorite(product: Product) {
    let updated = [...favorites];

    const exists = updated.find((p) => p.id === product.id);

    if (exists) {
      updated = updated.filter((p) => p.id !== product.id);
    } else {
      updated.push(product);
    }

    setFavorites(updated);
    await AsyncStorage.setItem(KEY, JSON.stringify(updated));
  }

  function isFavorite(id: string) {
    return favorites.some((p) => p.id === id);
  }

  return { favorites, toggleFavorite, isFavorite };
}
