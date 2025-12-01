// services/products.ts
import { Product } from "../types/product";
import { api } from "./api";

export const PRODUCTS: Product[] = [
  {
    id: "doritos-nacho",
    name: "Doritos Queijo Nacho",
    score: 4.7,
    image: require("../assets/imagens/icons/doritos.png"),
    categoryId: "salgadinho",
  },
  {
    id: "doritos-pimenta",
    name: "Doritos Pimenta",
    score: 4.4,
    image: require("../assets/imagens/icons/doritos.png"),
    categoryId: "salgadinho",
  },
  {
    id: "bis-leite",
    name: "BIS Chocolate ao Leite",
    score: 4.8,
    image: require("../assets/imagens/icons/bis.png"),
    categoryId: "chocolate",
  },
  {
    id: "kitkat-classic",
    name: "KitKat Tradicional",
    score: 4.6,
    image: require("../assets/imagens/icons/kitkat.png"),
    categoryId: "chocolate",
  },
];

export async function getAllProducts() {
  return api.get<Product[]>(PRODUCTS);
}

export async function getProductsByCategory(categoryId: string) {
  return api.get<Product[]>(PRODUCTS.filter(p => p.categoryId === categoryId));
}

export async function getProductById(id: string) {
  return api.get<Product | undefined>(PRODUCTS.find(p => p.id === id));
}
