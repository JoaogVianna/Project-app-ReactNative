import { useState, useEffect } from "react";

const CATEGORIES = [
  {
    id: "salgadinho",
    title: "Salgadinho",
    color: "#4CAF50",
    image: require("../assets/imagens/icons/snack.png"),
  },
  {
    id: "biscoito-salgado",
    title: "Biscoito Salgado",
    color: "#2E8B57",
    image: require("../assets/imagens/icons/cracker.png"),
  },
  {
    id: "chocolate",
    title: "Chocolate",
    color: "#C14444",
    image: require("../assets/imagens/icons/choco.png"),
  },
];

export function useCategories() {
  const [categories, setCategories] = useState<typeof CATEGORIES>([]);

  useEffect(() => {
    setCategories(CATEGORIES);
  }, []);

  return { categories };
}
