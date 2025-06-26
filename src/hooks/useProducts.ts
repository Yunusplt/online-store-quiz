// src/hooks/useProducts.ts
import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images: string[];
  // …other fields
}

export function useProducts(search: string) {
  return useQuery<{ products: Product[] }, Error>({
    queryKey: ["products", search],
    queryFn: () =>
      api.get("/products", { params: { q: search } }).then((res) => res.data),
  });
}

export function useProduct(id: number) {
  return useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: () => api.get(`/products/${id}`).then((res) => res.data),
  });
}
