import { useProductSearch } from "@/hooks/useProducts";
import { SearchResultItem } from "./SearchResultItem";

type SearchResultsProps = {
  search: string;
  onButtonClick?: () => void;
};

const styles = {
  container:
    "absolute xl:w-120 max-h-200 overflow-y-auto p-6 bg-white z-50 rounded shadow-md top-12 left-[-20px]",
  noResults: "text-gray-500 text-center mt-4",
};

export const SearchResults = ({
  search,
  onButtonClick,
}: SearchResultsProps) => {
  const { data, isLoading, isError } = useProductSearch(search);

  if (!search) return null; // Don't render if search is empty
  if (!isLoading && !data) return null; // Don't render loading state if no data yet

  return (
    <div className={styles.container}>
      <h2>Search Results for &quot;{search}&quot;</h2>
      {!isLoading && data?.products.length === 0 && (
        <div className={styles.noResults}>
          No products found for &quot;{search}&quot;
        </div>
      )}
      {isLoading && <p>Loading results...</p>}
      {isError && <p>Error loading results</p>}
      {!isLoading &&
        data &&
        data.products.length > 0 &&
        data.products.map((product) => (
          <SearchResultItem
            key={product.id}
            product={product}
            onButtonClick={onButtonClick}
          />
        ))}
    </div>
  );
};
