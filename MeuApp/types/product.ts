// types/product.ts

export interface Product {
  id: string;
  name: string;
  score: number;
  image: any; // require(...)
  categoryId: string;
}
