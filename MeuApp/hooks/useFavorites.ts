import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@meus_favoritos";

export default function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Carregar favoritos ao iniciar o app
  useEffect(() => {
    loadFavorites();
  }, []);

  // Carrega do AsyncStorage
  async function loadFavorites() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) {
        setFavorites(JSON.parse(data));
      }
    } catch (error) {
      console.log("Erro ao carregar favoritos:", error);
    }
  }

  // Salva no AsyncStorage
  async function saveFavorites(list: string[]) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (error) {
      console.log("Erro ao salvar favoritos:", error);
    }
  }

  // Adicionar favorito
  async function addFavorite(id: string) {
    if (!favorites.includes(id)) {
      const updated = [...favorites, id];
      setFavorites(updated);
      await saveFavorites(updated);
    }
  }

  // Remover favorito
  async function removeFavorite(id: string) {
    const updated = favorites.filter(item => item !== id);
    setFavorites(updated);
    await saveFavorites(updated);
  }

  // Alternar (caso queira usar com um botão)
  async function toggleFavorite(id: string) {
    if (favorites.includes(id)) {
      await removeFavorite(id);
    } else {
      await addFavorite(id);
    }
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
  };
}
