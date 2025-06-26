import { useInfiniteQuery } from "@tanstack/react-query";
import { api } from "../utils/api";
import type { Product } from "./useProducts";
import { PRODUCT_CATEGORY_PAGE_SIZE } from "@/categoryConfig";

export function useInfiniteCategory(category: string) {
  return useInfiniteQuery<{ products: Product[]; total: number }, Error>({
    queryKey: ["category", category],
    queryFn: ({ pageParam = 0 }) =>
      api
        .get(`/products/category/${category}`, {
          params: { limit: PRODUCT_CATEGORY_PAGE_SIZE, skip: pageParam },
        })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPages) => {
      const loaded = allPages.reduce((sum, p) => sum + p.products.length, 0);
      return loaded < lastPage.total ? loaded : undefined;
    },
    initialPageParam: 0,
  });
}
