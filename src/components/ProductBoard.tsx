"use client";
import React from "react";
import { CategoryColumn } from "./CategoryColumn";
import { PRODUCT_CATEGORIES } from "@/categoryConfig";

export function ProductBoard() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex space-x-6 overflow-x-auto pb-6 min-h-[calc(100vh-140px)] h-100">
        {PRODUCT_CATEGORIES.map((name, index) => {
          const isLast = index === PRODUCT_CATEGORIES.length - 1;
          return <CategoryColumn key={name} name={name} isLast={isLast} />;
        })}
      </div>
    </div>
  );
}

{
  /* <input
        className="mb-6 p-2 border rounded w-full max-w-md"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /> */
}

{
  /* {search && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Search Results</h2>
          {searchQuery.isLoading ? (
            <p>Loading search results…</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {searchQuery.data?.products.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  thumbnail={p.thumbnail}
                />
              ))}
            </div>
          )}
        </section>
      )} */
}
