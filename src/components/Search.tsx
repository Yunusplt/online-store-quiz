"use client";
import { SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { SearchResults } from "./SearchResults";
import { SearchOverlay } from "./SearchOverlay";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Update debouncedSearch after a delay when search changes
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 600);
    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const isActive = isHovered || isFocused || search.length > 0;

  const handleOverlayClick = () => {
    setSearch("");
    setDebouncedSearch("");
    setIsHovered(false);
    setIsFocused(false);
  };

  const handleClearSearch = () => {
    setSearch("");
    setDebouncedSearch("");
  };

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
      {isActive ? (
        <>
          <SearchIcon
            className="absolute left-3 my-auto text-gray-500"
            size={20}
          />
          <input
            className="ml-5 p-2 pl-5 pr-6 w-full focus-within:border-none outline-none"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              className="absolute right-3 text-red-400 hover:text-red-700 cursor-pointer text-lg"
              onClick={() => handleClearSearch()}
            >
              &times;
            </button>
          )}
        </>
      ) : (
        <SearchIcon className="absolute left-3 text-gray-500" size={20} />
      )}
      {/* Show overlay when search is focused */}
      {(isFocused || search) && <SearchOverlay onClose={handleOverlayClick} />}

      {/* Show overlay and results based on debouncedSearch */}
      {debouncedSearch && (
        <SearchResults
          search={debouncedSearch}
          onButtonClick={handleOverlayClick}
        />
      )}
    </div>
  );
};
