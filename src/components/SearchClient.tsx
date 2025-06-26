"use client";
import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import Link from "next/link";

export default function SearchClient() {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useProducts(search);

  return (
    <div className="p-6">
      <input
        className="mb-4 p-2 border rounded w-full max-w-md"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isLoading && <p>Loading…</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.products.map((p) => (
          <div key={p.id} className="border rounded overflow-hidden shadow">
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold">{p.title}</h2>
              <Link
                href={`/products/${p.id}`}
                className="inline-block mt-4 px-3 py-1 bg-blue-500 text-white rounded"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
