import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProductFilter() {
  return (
    <aside>
      {/* Filtre Kartı */}
      <Card className="shadow-sm border border-gray-100 rounded-2xl p-4">
        <CardContent>
          {/* Kategoriler */}
          <h2 className="text-lg font-semibold mb-4">Kategoriler</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Checkbox id="pantolon" />
              <label htmlFor="pantolon" className="text-sm font-medium">
                Pantolon
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="gomlek" />
              <label htmlFor="gomlek" className="text-sm font-medium">
                Gömlek
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="tisort" />
              <label htmlFor="tisort" className="text-sm font-medium">
                T-Shirt
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="ceket" />
              <label htmlFor="ceket" className="text-sm font-medium">
                Ceket
              </label>
            </div>
          </div>

          <Separator className="my-6" />
          {/* Cinsiyet */}
          <h2 className="text-lg font-semibold mb-4">Cinsiyet</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Checkbox id="kadin" />
              <label htmlFor="kadin" className="text-sm font-medium">
                Kadın
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="erkek" />
              <label htmlFor="erkek" className="text-sm font-medium">
                Erkek
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="unisex" />
              <label htmlFor="unisex" className="text-sm font-medium">
                Unisex
              </label>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Sadece */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Checkbox id="kargo" />
              <label
                htmlFor="kargo"
                className="text-sm font-medium cursor-pointer"
              >
                Ücretsiz Kargo
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="yeni" />
              <label htmlFor="yeni" className="text-sm font-medium">
                Yeni Gelenler
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="firsat" />
              <label htmlFor="firsat" className="text-sm font-medium">
                Fırsat Ürünleri
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="indirimli" />
              <label htmlFor="indirimli" className="text-sm font-medium">
                İndirimli Ürünler
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="taksit" />
              <label htmlFor="taksit" className="text-sm font-medium">
                Taksit Seçeneği Olanlar
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="hizli" />
              <label htmlFor="hizli" className="text-sm font-medium">
                Hızlı Gönderi
              </label>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Fiyat Aralığı */}
          <h2 className="text-lg font-semibold mb-4">Fiyat Aralığı</h2>
          <Slider
            defaultValue={[699, 900]}
            max={1000}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>699.00 TL</span>
            <span>900.00 TL</span>
          </div>
          <Button className="mt-5 w-full font-semibold bg-black text-white hover:bg-gray-900">
            Fiyatları Filtrele
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
}
