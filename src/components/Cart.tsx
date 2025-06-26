"use client";
import { useState } from "react";
import Image from "next/image";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "@/context/CartContext";

export function Cart() {
  const { items, addItem, removeItem, clearCart } = useCart();
  const [open, setOpen] = useState(false);

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center px-3 py-2 rounded-full bg-white hover:bg-gray-200 transition"
      >
        <ShoppingCartOutlinedIcon fontSize="small" className="text-gray-600" />
        {totalCount > 0 && (
          <span className="ml-1 text-sm font-semibold text-gray-800">
            {totalCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-10">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Shopping Cart</h3>
            {items.length === 0 && (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <ul className="max-h-56 overflow-y-auto space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex items-center space-x-3">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.title}</p>
                    <div className="flex items-center mt-1 space-x-2">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 bg-gray-100 rounded hover:bg-gray-200"
                      >
                        <RemoveIcon fontSize="small" />
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button
                        onClick={() => addItem(item)}
                        className="p-1 bg-gray-100 rounded hover:bg-gray-200"
                      >
                        <AddIcon fontSize="small" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="mt-6 w-full py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
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
