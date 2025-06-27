"use client";
import React from "react";
import ProductDetailPage from "@/components/Products/ProductDetailPage";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function ProductDetail({ params }: PageProps) {
  return (
    <main>
      <ProductDetailPage params={params} />
    </main>
  );
}
