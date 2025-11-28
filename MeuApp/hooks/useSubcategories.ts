import { useState, useEffect } from "react";

const SUBCATEGORIES: Record<string, any[]> = {
  salgadinho: [
    { id: "doritos", title: "Doritos" },
    { id: "ruffles", title: "Ruffles" },
    { id: "cheetos", title: "Cheetos" },
  ],

  "biscoito-salgado": [
    { id: "cream-cracker", title: "Cream Cracker" },
    { id: "club-social", title: "Club Social" },
  ],

  chocolate: [
    { id: "bis", title: "BIS" },
    { id: "kitkat", title: "KitKat" },
    { id: "lacta", title: "Lacta" },
  ],
};

export function useSubcategories(categoryId: string) {
  const [subcategories, setSubcategories] = useState<any[]>([]);

  useEffect(() => {
    if (categoryId) {
      setSubcategories(SUBCATEGORIES[categoryId] || []);
    }
  }, [categoryId]);

  return { subcategories };
}
