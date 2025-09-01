"use client";
import React, { useState } from "react";
import AdminSideBar from "../adminSideBar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([null, null, null, null]);

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = file;
      setImages(newImages);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { id: Date.now(), title, description, images };
    console.log("Yeni Ürün:", newProduct);
    alert("✅ Ürün başarıyla oluşturuldu!");
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
                Yeni Ürün Oluştur
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="title">Ürün Başlığı</Label>
                  <Input
                    id="title"
                    placeholder="Ürün başlığını girin"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <Label htmlFor="description">Açıklama</Label>
                  <Textarea
                    id="description"
                    placeholder="Ürün açıklamasını girin"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {images.map((img, idx) => (
                    <div key={idx} className="flex flex-col space-y-1">
                      <Label>Görsel {idx + 1}</Label>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, idx)}
                      />
                    </div>
                  ))}
                </div>

                <Button type="submit" className="w-full mt-4">
                  Ürünü Oluştur
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
              <h2 className="text-xl font-semibold">
                {title || "Ürün Başlığı"}
              </h2>
              <p className="text-gray-600">
                {description || "Ürün açıklaması burada görünecek."}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {images.map((img, idx) =>
                  img ? (
                    <img
                      key={idx}
                      src={URL.createObjectURL(img)}
                      alt={`Görsel ${idx + 1}`}
                      className="w-full h-40 object-cover rounded shadow hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div
                      key={idx}
                      className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-400 rounded"
                    >
                      Görsel {idx + 1}
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
