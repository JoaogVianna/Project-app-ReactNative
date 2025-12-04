import { useState, useEffect } from "react";

type Category = {
  id: string;
  title: string;
  image: any;
  colors: [string, string]; // gradiente
  description: string;
  tags: string[];
};

const CATEGORIES: Category[] = [
  {
    id: "salgadinho",
    title: "Salgadinho",
    image: require("../assets/imagens/icons/snack.png"),
    colors: ["#4CAF50", "#2E7D32"], // verde suave → verde profundo
    description: "Ricos em sódio e gorduras. Consumir com moderação.",
    tags: ["Sódio Alto", "Gorduroso", "Processado"],
  },
  {
    id: "biscoito-salgado",
    title: "Biscoito Salgado",
    image: require("../assets/imagens/icons/cracker.png"),
    colors: ["#66BB6A", "#43A047"], // verde vibrante
    description: "Alternativa um pouco mais leve, porém ainda processado.",
    tags: ["Carboidrato", "Processado", "Leve"],
  },
  {
    id: "chocolate",
    title: "Chocolate",
    image: require("../assets/imagens/icons/choco.png"),
    colors: ["#8D3B3B", "#C14444"], // marrom → vermelho escuro
    description: "Rico em açúcar e calorias. Preferir versões 70% cacau.",
    tags: ["Açúcar Alto", "Calórico", "Doce"],
  },
];

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Simula carregamento mais realista (UX melhor)
    const timeout = setTimeout(() => {
      setCategories(CATEGORIES);
    }, 150);

    return () => clearTimeout(timeout);
  }, []);

  return { categories };
}
