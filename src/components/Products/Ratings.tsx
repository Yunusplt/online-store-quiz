import { Product } from "@/hooks/useProducts";
import React from "react";

const Ratings = ({ p }: { p: Product }) => {
  return (
    <div>
      {/* ⭐ Rating field */}
      <div className="flex items-center gap-2 mt-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill={i < Math.round(p.rating) ? "#facc15" : "none"} // sarı: yellow-400
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              className={`w-5 h-5 ${
                i < Math.round(p.rating) ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499c.26-.833 1.46-.833 1.72 0l1.31 4.196a1
            1 0 00.95.69h4.413c.865 0 1.226 1.104.527 1.64l-3.572 
            2.596a1 1 0 00-.364 1.118l1.31 4.196c.26.832-.683 
            1.519-1.39 1.118l-3.572-2.596a1 1 0 00-1.175 0l-3.572 
            2.596c-.707.401-1.65-.286-1.39-1.118l1.31-4.196a1 1 
            0 00-.364-1.118L2.1 10.025c-.7-.536-.338-1.64.527-1.64H7.04a1 
            1 0 00.95-.69l1.31-4.196z"
              />
            </svg>
          ))}
        </div>

        {/* Rating puanı */}
        <span className="text-sm text-gray-600">{p.rating.toFixed(1)}</span>

        {/* Review sayısı */}
        <span className="text-sm text-gray-500">
          ({p.reviews.length} reviews)
        </span>
      </div>
    </div>
  );
};

export default Ratings;
