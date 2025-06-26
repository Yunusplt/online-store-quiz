import Link from "next/link";
import Image from "next/image";
import React from "react";

type ProductCardProps = {
  id: number;
  title: string;
  thumbnail: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  thumbnail,
}) => {
  return (
    <Link
      href={`/products/${id}`}
      className="flex items-center p-2 rounded-xl w-full hover:shadow-md bg-[#f4f4f4] relative"
    >
      <Image
        src={thumbnail}
        alt={title}
        width={100}
        height={100}
        className="rounded mr-2"
      />
      <span className="font-medium">{title}</span>
    </Link>
  );
};
