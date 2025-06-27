import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images: string[];
  category: string;
  rating: number;
  reviews: { id: number; comment: string; rating: number }[];
  returnPolicy: string;
  shippingInformation: string;
  // …other fields
}

// Generic search hook
export function useProductSearch(search: string) {
  return useQuery<{ products: Product[] }, Error>({
    queryKey: ["products", search],
    queryFn: () =>
      api
        .get("/products/search", { params: { q: search } })
        .then((res) => res.data),
  });
}

export function useProduct(id: number) {
  return useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: () => api.get(`/products/${id}`).then((res) => res.data),
  });
}
