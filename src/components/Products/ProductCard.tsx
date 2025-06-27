import Image from "next/image";
import React from "react";
import { DetailButton } from "../DetailButton";
import { useCart } from "@/context/CartContext";
import { useProduct } from "@/hooks/useProducts";
import { useRouter } from "next/navigation";
import { AddToCartButton } from "../AddToCartButton";
import { toast } from "react-toastify";

type ProductCardProps = {
  id: number;
  title: string;
  thumbnail: string;
};

export const ProductCard = ({ id, title, thumbnail }: ProductCardProps) => {
  const { addItem } = useCart();
  const { data } = useProduct(Number(id));
  const router = useRouter();

  return (
    <div className="flex relative group items-center p-2 rounded-xl w-full hover:shadow-md bg-[#f4f4f4] relative">
      <Image
        src={thumbnail}
        alt={title}
        width={100}
        height={100}
        className="rounded mr-2"
        priority
      />
      <div className="flex flex-col h-full">
        <span className="font-medium ">{title}</span>
        <div className="absolute bottom-1.5 right-1.5 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <DetailButton
            onClick={() => {
              router.push(`/products/${id}`);
            }}
          />
          <AddToCartButton
            onClick={() => {
              if (data) {
                addItem(data);
                toast.success("Produkt zum Warenkorb hinzugefügt");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
