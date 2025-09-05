"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Filter } from "lucide-react";

export default function ProductFilter() {
  const [priceRange, setPriceRange] = useState([0, 2000]);

  return (
    <aside className="w-full">
      <Card className="shadow-lg border border-gray-100 rounded-3xl p-6 bg-white">
        <CardContent className="p-0 space-y-6">
          {/* Başlık */}
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-700" />
            <h2 className="text-xl font-semibold text-gray-800">
              Ürün Filtreleri
            </h2>
          </div>

          {/* Accordion Yapısı */}
          <Accordion type="multiple" className="space-y-4">
            {/* Kategoriler */}
            <AccordionItem value="kategori">
              <AccordionTrigger className="text-base font-medium text-gray-700">
                Kategoriler
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2 mt-2">
                  {["Pantolon", "Gömlek", "T-Shirt", "Ceket"].map((item) => (
                    <label
                      key={item}
                      htmlFor={item.toLowerCase()}
                      className="flex items-center gap-2 cursor-pointer hover:text-black transition-colors"
                    >
                      <Checkbox id={item.toLowerCase()} />
                      <span className="text-sm text-gray-600">{item}</span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Cinsiyet */}
            <AccordionItem value="cinsiyet">
              <AccordionTrigger className="text-base font-medium text-gray-700">
                Cinsiyet
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2 mt-2">
                  {["Kadın", "Erkek", "Unisex"].map((gender) => (
                    <label
                      key={gender}
                      htmlFor={gender.toLowerCase()}
                      className="flex items-center gap-2 cursor-pointer hover:text-black transition-colors"
                    >
                      <Checkbox id={gender.toLowerCase()} />
                      <span className="text-sm text-gray-600">{gender}</span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Özellikler */}
            <AccordionItem value="ozellikler">
              <AccordionTrigger className="text-base font-medium text-gray-700">
                Özellikler
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2 mt-2">
                  {[
                    "Ücretsiz Kargo",
                    "Yeni Gelenler",
                    "Fırsat Ürünleri",
                    "İndirimli Ürünler",
                    "Taksit Seçeneği Olanlar",
                    "Hızlı Gönderi",
                  ].map((feature) => (
                    <label
                      key={feature}
                      htmlFor={feature.toLowerCase().replace(/\s+/g, "-")}
                      className="flex items-center gap-2 cursor-pointer hover:text-black transition-colors"
                    >
                      <Checkbox
                        id={feature.toLowerCase().replace(/\s+/g, "-")}
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Fiyat Aralığı */}
            <AccordionItem value="fiyat">
              <AccordionTrigger className="text-base font-medium text-gray-700">
                Fiyat Aralığı
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-2">
                  <Slider
                    value={priceRange}
                    max={2000}
                    step={50}
                    className="w-full"
                    onValueChange={(value) => setPriceRange(value)}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>
                      {priceRange[0].toLocaleString("tr-TR", {
                        style: "currency",
                        currency: "TRY",
                      })}
                    </span>
                    <span>
                      {priceRange[1].toLocaleString("tr-TR", {
                        style: "currency",
                        currency: "TRY",
                      })}
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Buton */}
          <Button className="w-full h-11 font-semibold rounded-2xl shadow-sm bg-black text-white hover:bg-gray-900 transition-all">
            Fiyatları Filtrele
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
}
