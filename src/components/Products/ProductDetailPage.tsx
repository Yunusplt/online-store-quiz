import Image from "next/image";
import { toast } from "react-toastify";
import Ratings from "@/components/Products/Ratings";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useProduct } from "@/hooks/useProducts";
import React, { useEffect, useState } from "react";
import LocalPoliceOutlinedIcon from "@mui/icons-material/LocalPoliceOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const ProductDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);
  const { data: p, isLoading } = useProduct(Number(id));
  const { addItem } = useCart();
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState<string>(
    p?.images[0] ?? ""
  );
  useEffect(() => {
    if (p && p.images.length > 0) {
      setSelectedImage(p.images[0]);
    }
  }, [p]);

  if (isLoading) return <p>Loading…</p>;
  if (!p) return <p>Product not found</p>;

  return (
    <div>
      <button
        onClick={() => router.push("/")}
        className="mb-4 text-gray-400 hover:underline cursor-pointer transition"
      >
        &larr; zurück zur alle Produkten
      </button>
      <main className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <section className="bg-white border border-gray-200 rounded-xl ">
          <div className="w-full h-[300px] p-2 bg-gray-100 bg-white rounded-xl flex items-center justify-center ">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt={p.title}
                width={300}
                height={300}
                className="object-cover rounded-xl"
                priority
              />
            )}
          </div>
          {p.images.length !== 1 && (
            <div className="flex gap-4 mt-7 mb-4 px-4">
              {p.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded border-2 transition hover:border-blue-500 overflow-hidden cursor-pointer ${
                    selectedImage === img
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                    priority={index === 0} // İlk resim için priority
                  />
                </button>
              ))}
            </div>
          )}
        </section>
        <section className="flex flex-col max-w-[400px] mb-3">
          <p className="text-gray-500 text-sm"> {p.category}</p>
          <h1 className="text-3xl font-bold">{p.title}</h1>
          <Ratings p={p} />
          <p className="text-gray-700 ">{p.description}</p>
          <div className="flex items-center gap-4 mt-auto ">
            <div className="flex items-center gap-2">
              <LocalPoliceOutlinedIcon className="text-blue-500" />
              <span className="text-gray-600">{p.returnPolicy}</span>
            </div>
            <div className="flex items-center gap-2">
              <LocalShippingOutlinedIcon className="text-blue-500" />
              <span className="text-gray-600">{p.shippingInformation}</span>
            </div>
          </div>
          <div className="text-2xl font-semibold text-blue-600 mt-6">
            €{p.price}
          </div>
          <button
            onClick={() => {
              addItem(p);
              toast.success("Produkt zum Warenkorb hinzugefügt");
            }}
            className="flex items-center justify-center mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
          >
            <ShoppingCart className="inline mr-2" size={20} />
            Add to Cart
          </button>
        </section>
      </main>
    </div>
  );
};

export default ProductDetailPage;
