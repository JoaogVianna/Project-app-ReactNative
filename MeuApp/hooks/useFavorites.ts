// hooks/useFavorites.ts
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "../types/product";

const KEY = "FAVORITE_PRODUCTS";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Carregar favoritos ao iniciar
  useEffect(() => {
    loadFavorites();
  }, []);

  async function loadFavorites() {
    try {
      const json = await AsyncStorage.getItem(KEY);
      if (json) {
        setFavorites(JSON.parse(json));
      }
    } catch (e) {
      console.log("Erro ao carregar favoritos:", e);
    }
    setLoading(false);
  }

  async function toggleFavorite(product: Product) {
    let updated = [...favorites];

    const exists = updated.some((p) => p.id === product.id);

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

  return { favorites, toggleFavorite, isFavorite, loading };
}
