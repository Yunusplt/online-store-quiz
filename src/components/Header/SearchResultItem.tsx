import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "@/hooks/useProducts";
import { DetailButton } from "../DetailButton";
import { useCart } from "@/context/CartContext";
import { AddToCartButton } from "../AddToCartButton";
import { toast } from "react-toastify";

type SearchResultItemProps = {
  product: Product;
  onButtonClick?: () => void;
};

const styles = {
  container:
    "flex items-center p-2 rounded-xl w-full hover:shadow-md bg-[#f4f4f4] relative my-2",
  productDiv: "flex flex-col",
  title: "font-medium",
  price: "text-sm text-gray-600",
  category: "text-xs text-gray-500",
  image: "rounded mr-2",
};

export const SearchResultItem = ({
  product,
  onButtonClick,
}: SearchResultItemProps) => {
  const router = useRouter();

  const { addItem } = useCart();

  const handleDetailsButtonClick = () => {
    router.push(`/products/${product.id}`);
    if (onButtonClick) {
      onButtonClick();
    }
  };

  const handleAddButtonClick = () => {
    addItem(product);
    toast.success("Produkt zum Warenkorb hinzugefügt");
    if (onButtonClick) {
      onButtonClick();
    }
  };
  return (
    <div className={styles.container}>
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={50}
        height={50}
        className={styles.image}
        loading="lazy"
      />
      <div className={styles.productDiv}>
        <span className={styles.title}>{product.title}</span>
        <span className={styles.price}>€{product.price}</span>
        <span className={styles.category}>{product.category}</span>
      </div>
      <div className="flex ml-auto gap-2">
        <DetailButton onClick={handleDetailsButtonClick} />
        <AddToCartButton onClick={handleAddButtonClick} />
      </div>
    </div>
  );
};
