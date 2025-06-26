"use client";
import { SearchIcon } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { SearchResults } from "./SearchResults";
import { SearchOverlay } from "./SearchOverlay";

// Debounce hook
function useDebounce<T>(
  value: T,
  delay = 600
): {
  debounced: T;
  clearDebounce: () => void;
} {
  const [debounced, setDebounced] = useState(value);

  const clearDebounce = () => {
    setDebounced(value);
  };

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return { debounced, clearDebounce };
}

export const Search = () => {
  const [search, setSearch] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { debounced: debouncedSearch, clearDebounce: clearDebounceSearch } =
    useDebounce(search);

  const isActive = isHovered || isFocused || search.length > 0;

  const handleOverlayClick = useCallback(() => {
    setSearch("");
    clearDebounceSearch();
    setIsFocused(false);
    setIsHovered(false);
  }, []);

  const handleClear = useCallback(() => setSearch(""), []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`flex items-center relative ${
        isActive
          ? "w-[300px] rounded-full bg-white shadow-sm"
          : "w-12 rounded-xl"
      } max-w-md h-10 focus-within:border focus-within:border-blue-500 transition-all duration-200`}
    >
      <SearchIcon
        className={`absolute left-3 text-gray-500 ${
          isActive ? "my-auto" : "top-1/2 transform -translate-y-1/2"
        }`}
        size={20}
      />

      {isActive && (
        <>
          <input
            className="ml-5 p-2 pl-5 pr-6 w-full outline-none"
            placeholder="Search products..."
            value={search}
            onChange={handleChange}
          />
          {search && (
            <button
              onClick={handleClear}
              className="absolute right-3 text-red-400 hover:text-red-700 cursor-pointer text-lg"
            >
              &times;
            </button>
          )}
        </>
      )}

      {/* Overlay when focused or has input */}
      {(isFocused || search.length > 0) && (
        <SearchOverlay onClose={handleOverlayClick} />
      )}

      {/* Show results when debounced input is present */}
      {debouncedSearch && (
        <SearchResults
          search={debouncedSearch}
          onButtonClick={handleOverlayClick}
        />
      )}
    </div>
  );
};
