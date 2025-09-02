"use client";
import React, { useState } from "react";
import UserSideBar from "../userSideBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProfileInformation() {
  const [formData, setFormData] = useState({
    name: "Ceyhun Türkmen",
    email: "ceyhun@example.com",
    phone: "0554 149 6377",
    address: "Istanbul, Turkey",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Burada API çağrısı ile veriyi güncelleyebilirsin
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sol sidebar */}
      <div className="w-64">
        <UserSideBar />
      </div>

      {/* Sağ taraf: Profil düzenleme */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Profil Bilgilerini Düzenle</h1>
        <Card className="p-6 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="name">Ad Soyad</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Adınızı girin"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <Label htmlFor="email">E-posta</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-posta adresinizi girin"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon numaranızı girin"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <Label htmlFor="address">Adres</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Adresinizi girin"
              />
            </div>

            <Separator className="my-4" />

            <Button type="submit" className="w-full">
              Kaydet
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
