import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="w-full flex justify-center">
      <Card className="">
        <CardContent className="p-3">
          <div className=" rounded-md bg-gray-100 mb-2">
            <div className="relative w-full aspect-square rounded-md bg-gray-100 mb-2">
              <Image
                src={product.image}
                alt={product.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <CardTitle className="text-sm mb-1">{product.title}</CardTitle>
          <CardDescription className="text-xs mb-2">
            {product.description.length > 60
              ? product.description.slice(0, 60) + "..."
              : product.description}
          </CardDescription>

          <div className="flex items-center space-x-1 mb-2">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <StarIcon
                  key={star}
                  className="h-3 w-3 fill-yellow-400 text-yellow-400"
                />
              ))}
              <StarIcon className="h-3 w-3 text-gray-300" />
            </div>
            <span className="text-xs text-muted-foreground">
              {product.rate}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">{product.price}TL</span>
            <Button size="sm" className="text-xs px-2 py-1 h-7">
              Ekle
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
