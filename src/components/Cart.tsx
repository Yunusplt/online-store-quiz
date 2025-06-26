// src/components/Cart.tsx
"use client";
import { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCart } from "@/context/CartContext";

export function Cart() {
  const { items, removeItem, clearCart } = useCart();
  const [open, setOpen] = useState(false);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center px-2 py-1 rounded-full bg-white hover:bg-gray-200 transition"
      >
        <ShoppingCartOutlinedIcon fontSize="small" className="text-gray-600" />
        {totalCount > 0 && (
          <span className="ml-1 text-sm font-semibold text-gray-800">
            {totalCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-10">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Shopping Cart</h3>
            {items.length === 0 && (
              <p className="text-sm text-gray-500">Your cart is empty</p>
            )}
            <ul className="max-h-48 overflow-y-auto space-y-2">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center text-sm"
                >
                  <span>
                    {item.title} x {item.quantity}
                  </span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="mt-4 w-full py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
              >
                Clear Cart
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
