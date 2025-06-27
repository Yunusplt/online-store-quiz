import { ShoppingCart } from "lucide-react";

type AddToCartButtonProps = {
  onClick: () => void;
};

export const AddToCartButton = ({ onClick }: AddToCartButtonProps) => (
  <button
    className="flex items-center text-blue-400 px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-400 hover:text-white transition cursor-pointer"
    onClick={onClick}
  >
    <ShoppingCart className="inline" size={16} />
  </button>
);
