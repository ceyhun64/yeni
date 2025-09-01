"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "next/navigation";
import products from "@/seed/products";
import AdminSideBar from "../adminSideBar";
import { Label } from "@/components/ui/label";

export default function ProductUpdatePage() {
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));
  // Başlangıç state’i üründen alıyoruz
  const [formData, setFormData] = useState({
    title: product.title || "",
    description: product.description || "",
    rate: product.rate || 0,
    image: product.image || "",
    image2: product.image2 || "",
    image3: product.image3 || "",
    image4: product.image4 || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Güncellenmiş veri:", formData);
    // TODO: API isteği atılabilir
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sol Sidebar */}
      <div className="w-64 border-r bg-white">
        <AdminSideBar />
      </div>

      {/* Orta ve Sağ alan */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 p-6">
        {/* Form alanı */}
        <div className="flex-1">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Ürün Bilgilerini Güncelle
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="title">Başlık</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Ürün başlığı girin"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <Label htmlFor="description">Açıklama</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Ürün açıklaması girin"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <Label htmlFor="rate">Puan</Label>
                  <Input
                    id="rate"
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    name="rate"
                    value={formData.rate}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {["image", "image2", "image3", "image4"].map((field, idx) => (
                    <div key={idx} className="flex flex-col space-y-1">
                      <Label htmlFor={field}>Görsel {idx + 1}</Label>
                      <Input
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder="Resim URL"
                      />
                    </div>
                  ))}
                </div>

                <Button onClick={handleSave} className="w-full mt-4">
                  Kaydet
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Önizleme alanı */}
        <div className="flex-1">
          <Card className="shadow-lg bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Önizleme</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold">
                {formData.title || "Ürün Başlığı"}
              </h3>
              <p className="text-sm text-gray-600">
                {formData.description || "Ürün açıklaması burada görünecek."}
              </p>
              <p className="font-medium">
                Puan: {formData.rate ? formData.rate : "0"} ⭐
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  formData.image,
                  formData.image2,
                  formData.image3,
                  formData.image4,
                ]
                  .filter(Boolean)
                  .map((img, idx) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={idx}
                      src={img}
                      alt="Ürün görseli"
                      className="w-full h-40 object-cover rounded shadow hover:scale-105 transition-transform"
                    />
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
