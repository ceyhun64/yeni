import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="w-full flex justify-center">
      <Card className="w-full max-w-xs rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
        <CardContent className="p-4">
          {/* Ürün görseli */}
          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 mb-3 group">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            {/* Badge */}
            {product.badge && (
              <Badge className="absolute top-2 left-2 bg-black text-white rounded-md text-[10px] px-2 py-0.5">
                {product.badge}
              </Badge>
            )}
          </div>

          {/* Başlık & Açıklama */}
          <CardTitle className="text-sm font-medium text-gray-900 mb-1 line-clamp-1">
            {product.title}
          </CardTitle>
          <CardDescription className="text-xs text-gray-500 mb-3 line-clamp-2">
            {product.description}
          </CardDescription>

          {/* Fiyat + Rating + CTA */}
          <div className="space-y-2">
            {/* Fiyat */}
            <div className="flex items-center gap-2">
              {product.oldPrice && (
                <span className="text-xs text-gray-400 line-through">
                  {product.oldPrice}₺
                </span>
              )}
              <span className="text-sm font-semibold text-gray-900">
                {product.price}₺
              </span>
            </div>

            <div className="flex items-center justify-between">
              {/* Rating */}
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <StarIcon
                      key={star}
                      className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <StarIcon className="h-3.5 w-3.5 text-gray-300" />
                </div>
                <span className="text-xs text-gray-500">{product.rate}</span>
              </div>

              {/* CTA */}
              <Button
                size="sm"
                className="h-8 px-3 text-xs font-medium rounded-lg bg-black text-white hover:bg-gray-900 transition-transform hover:scale-95"
              >
                 Detaylar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
