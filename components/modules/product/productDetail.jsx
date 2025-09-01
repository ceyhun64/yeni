"use client";
import { useState } from "react";
import Image from "next/image";
import products from "@/seed/products.json";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product.image);

  const fullStars = Math.floor(product.rate);
  const halfStar = product.rate % 1 >= 0.5;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col lg:flex-row gap-12 p-8 lg:p-16">
      {/* Sol taraf: görseller */}
      <div className="flex flex-col lg:flex-row gap-4 flex-1">
        {/* Thumbnail'ler */}
        <div className="flex lg:flex-col gap-4">
          {[product.image, product.image2, product.image3, product.image4]
            .filter(Boolean)
            .map((img, i) => (
              <button
                key={i}
                className={`relative w-20 h-20 border rounded-lg overflow-hidden ${
                  mainImage === img ? "ring-2 ring-orange-500" : ""
                }`}
                onClick={() => setMainImage(img)}
              >
                <Image
                  src={img}
                  alt={product.title}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </button>
            ))}
        </div>

        {/* Büyük ana görsel */}
        <div className="relative flex-1 rounded-2xl overflow-hidden shadow">
          <Image
            src={mainImage}
            alt={product.title}
            width={600} // İstediğin genişlik
            height={600} // Yükseklik genişliğe göre
            className="object-contain w-full h-auto"
          />
        </div>
      </div>

      {/* Sağ taraf: bilgiler */}
      <div className="flex-1 flex flex-col justify-start">
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

        <p className="mb-4 text-gray-700">{product.description}</p>

        <p className="mb-2">
          <span className="font-semibold">Stok:</span> {product.stok} adet
        </p>

        <div className="flex items-center mb-6">
          {[...Array(fullStars)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">
              ★
            </span>
          ))}
          {halfStar && <span className="text-yellow-400 text-xl">☆</span>}
          {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
            <span key={i} className="text-gray-300 text-xl">
              ★
            </span>
          ))}
          <span className="ml-2 text-gray-600">{product.rate} / 5</span>
        </div>

        <Button>Sepete Ekle</Button>
      </div>
    </div>
  );
}
