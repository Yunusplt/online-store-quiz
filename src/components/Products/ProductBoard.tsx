"use client";
import React from "react";
import { CategoryColumn } from "./CategoryColumn";
import { PRODUCT_CATEGORIES } from "@/categoryConfig";

export function ProductBoard() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex space-x-6 overflow-x-auto pb-6 min-h-[calc(100vh-140px)]">
        {PRODUCT_CATEGORIES.map((name, index) => {
          const isLast = index === PRODUCT_CATEGORIES.length - 1;
          return <CategoryColumn key={name} name={name} isLast={isLast} />;
        })}
      </div>
    </div>
  );
}
