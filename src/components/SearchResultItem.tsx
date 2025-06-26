import { EyeIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Product } from "@/hooks/useProducts";

export const SearchResultItem = ({
  product,
  onButtonClick,
}: {
  product: Product;
  onButtonClick?: () => void;
}) => {
  const router = useRouter();

  const { addItem } = useCart();

  const handleDetailsButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
      router.push(`/products/${product.id}`);
    }
  };
  return (
    <div className="flex items-center p-2 rounded-xl w-full hover:shadow-md bg-[#f4f4f4] relative my-2">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={50}
        height={50}
        className="rounded mr-2"
      />
      <div className="flex flex-col">
        <span className="font-medium">{product.title}</span>
        <span className="text-sm text-gray-600">€{product.price}</span>
        <span className="text-xs text-gray-500">{product.category}</span>
      </div>
      <button
        className="ml-auto text-blue-500 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition"
        onClick={handleDetailsButtonClick}
      >
        <EyeIcon className="inline mr-1" size={16} />
      </button>
      <button
        className="text-blue-500 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition"
        onClick={() => {
          addItem(product);
          if (onButtonClick) {
            onButtonClick();
          }
        }}
      >
        <ShoppingCart className="inline mr-1" size={16} />
      </button>
    </div>
  );
};
