import { Product } from "@/hooks/useProducts";
import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { useInfiniteCategory } from "@/hooks/useInfiniteCategory";

export function CategoryColumn({
  name,
  isLast = false,
}: {
  name: string;
  isLast?: boolean;
}) {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteCategory(name);

  // Normalize the category name for display
  // Capitalize and replace dashes with spaces
  const normalizedName = name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  // flatten all pages into a single array
  const allProducts = data?.pages.flatMap((p) => p.products) || [];
  return (
    <div
      className={`flex-none w-78  space-y-4 h-full ${
        !isLast ? "border-r border-gray-200 pr-5" : ""
      }`}
    >
      <h2 className="text-xl font-semibold mb-4 capitalize text-center">
        {normalizedName}
      </h2>
      {isLoading && (
        <p className="text-gray-500 text-center">Loading {normalizedName}...</p>
      )}
      {!isLoading && allProducts.length === 0 && (
        <p className="text-gray-500 text-center">No products available</p>
      )}

      {allProducts.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          title={p.title}
          thumbnail={p.thumbnail}
        />
      ))}

      {hasNextPage && (
        <div className="mt-4 flex justify-center">
          <button
            className="border border-gray-200 text-gray-500 rounded-lg hover:shadow px-4 py-2"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading…" : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
}
