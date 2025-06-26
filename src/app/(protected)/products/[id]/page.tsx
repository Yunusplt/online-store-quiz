"use client";
import { useProduct } from "@/hooks/useProducts";
import React from "react";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function ProductDetailPage({ params }: PageProps) {
  const { id } = React.use(params);
  const { data: p, isLoading } = useProduct(Number(id));

  if (isLoading) return <p>Loading…</p>;
  if (!p) return <p>Product not found</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img
        src={p.thumbnail}
        alt={p.title}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-3xl font-bold my-4">{p.title}</h1>
      <p className="mb-4">{p.description}</p>
      <p className="text-xl font-semibold">€{p.price}</p>
    </div>
  );
}
