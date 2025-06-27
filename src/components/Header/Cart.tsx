"use client";
import Image from "next/image";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useCart } from "@/context/CartContext";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const styles = {
  container: "relative",
  shoppingCartButton:
    "flex items-center px-3 py-2 rounded-full bg-white hover:bg-gray-200 transition cursor-pointer",
  shoppingCartIcon: "text-gray-600",
  productCount: "ml-1 text-sm font-semibold text-gray-800",
  cartDropdown:
    "absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-10 p-4",
  dropdownHeader: "text-lg font-semibold mb-4",
  emptyCartMessage: "text-sm text-gray-500",
  dropdownItemList: "max-h-56 overflow-y-auto space-y-4",
  dropdownItem: "flex items-center space-x-3",
  dropdownItemImage: "object-cover rounded",
  dropdownItemTitle: "font-medium text-sm",
  actionButtonsWrapper: "flex items-center space-x-2 mt-1",
  icon: "p-1 bg-gray-100 rounded hover:bg-gray-200",
  clearCartButton:
    "mt-6 w-full py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm",
};

export function Cart() {
  const { items, addItem, removeItem, clearCart } = useCart();
  const [open, setOpen] = useState(false);

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={styles.shoppingCartButton}
      >
        <ShoppingCartOutlinedIcon
          fontSize="small"
          className={styles.shoppingCartIcon}
        />
        {totalCount > 0 && (
          <span className={styles.productCount}>{totalCount}</span>
        )}
      </button>

      {open && (
        <div className={styles.cartDropdown}>
          <h3 className={styles.dropdownHeader}>Shopping Cart</h3>
          {items.length === 0 && (
            <p className={styles.emptyCartMessage}>Your cart is empty.</p>
          )}
          <ul className={styles.dropdownItemList}>
            {items.map((item) => (
              <li key={item.id} className={styles.dropdownItem}>
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={56}
                  height={56}
                  className={styles.dropdownItemImage}
                />
                <div className="flex-1">
                  <p className={styles.dropdownItemTitle}>{item.title}</p>
                  <div className={styles.actionButtonsWrapper}>
                    <button
                      onClick={() => removeItem(item.id)}
                      className={styles.icon}
                    >
                      <RemoveIcon fontSize="small" />
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() => addItem(item)}
                      className={styles.icon}
                    >
                      <AddIcon fontSize="small" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {items.length > 0 && (
            <button onClick={clearCart} className={styles.clearCartButton}>
              Clear Cart
            </button>
          )}
        </div>
      )}
    </div>
  );
}
