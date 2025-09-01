"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

/**
 * Beklenen item formatı:
 * { id, name, qty, image }
 */
export default function CartSummary({
  items: initialItems = [
    {
      id: 1,
      name: "Çimento - 50kg Torba",
      qty: 3,
      image: "/products/cimento.png",
    },
    {
      id: 2,
      name: "Dış Cephe Boyası - 15L",
      qty: 1,
      image: "/products/boya.png",
    },
    {
      id: 3,
      name: "Seramik Karo Yapıştırıcısı",
      qty: 5,
      image: "/products/alet.jpg",
    },
    {
      id: 4,
      name: "Çimento - 50kg Torba",
      qty: 3,
      image: "/products/cimento.png",
    },
    {
      id: 5,
      name: "Dış Cephe Boyası - 15L",
      qty: 1,
      image: "/products/boya.png",
    },
    {
      id: 6,
      name: "Seramik Karo Yapıştırıcısı",
      qty: 5,
      image: "/products/alet.jpg",
    },
    {
      id: 7,
      name: "Çimento - 50kg Torba",
      qty: 3,
      image: "/products/cimento.png",
    },
    {
      id: 8,
      name: "Dış Cephe Boyası - 15L",
      qty: 1,
      image: "/products/boya.png",
    },
    {
      id: 9,
      name: "Seramik Karo Yapıştırıcısı",
      qty: 5,
      image: "/products/alet.jpg",
    },
    {
      id: 10,
      name: "Çimento - 50kg Torba",
      qty: 3,
      image: "/products/cimento.png",
    },
    {
      id: 11,
      name: "Dış Cephe Boyası - 15L",
      qty: 1,
      image: "/products/boya.png",
    },
    {
      id: 12,
      name: "Seramik Karo Yapıştırıcısı",
      qty: 5,
      image: "/products/alet.jpg",
    },
  ],
}) {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
      )
    );
  };

  const totalQty = items.reduce((sum, i) => sum + (i.qty || 0), 0);

  return (
    <Card className="w-full max-w-xl">
      <CardHeader className="pb-3 sticky top-0 bg-white z-10">
        <CardTitle className="flex items-center justify-between">
          <span>Sepet Özeti</span>
          <span className="text-sm font-normal text-muted-foreground">
            Toplam Adet: <b>{totalQty}</b>
          </span>
        </CardTitle>
      </CardHeader>

      <Separator />

      <CardContent className="p-0  max-h-[570px] overflow-y-auto">
        {items.length === 0 ? (
          <div className="p-6 text-sm text-muted-foreground">
            Sepetiniz boş.
          </div>
        ) : (
          <ul className="divide-y">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-4 p-4">
                {/* Görsel */}
                <div className="relative h-14 w-14 overflow-hidden rounded-lg ring-1 ring-border">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* İsim */}
                <div className="flex-1 min-w-0">
                  <p className="truncate font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    Ürün Kodu / Detay (opsiyonel)
                  </p>
                </div>

                {/* Adet + - */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQty(item.id, -1)}
                    disabled={item.qty === 0}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{item.qty}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQty(item.id, 1)}
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
