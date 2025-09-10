"use client";

import React, { useState, Suspense } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ShoppingCart,
  Tag,
  RefreshCcw,
  Wallet,
  Sparkles,
  User,
  MapPin,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import cities from "@/seed/cities.json";
import districts from "@/seed/districts.json";

function ReservationContent() {
  const searchParams = useSearchParams();
  const steps = ["Adres Bilgileri"];
  const [currentStep, setCurrentStep] = useState(0);

  const projectParam = searchParams.get("project");
  const project = projectParam ? JSON.parse(projectParam) : null;

  const [formData, setFormData] = useState({
    width: searchParams.get("width") || "",
    length: searchParams.get("length") || "",
    height: searchParams.get("height") || "",
    counter: searchParams.get("counter") || "",
    note: "",
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    district: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  if (!project) {
    return <div className="p-10 text-center text-lg">Yapı bulunamadı.</div>;
  }
  function calculateConstructionPrice(data) {
    const en = Number(data.temelEn) || 0;
    const boy = Number(data.temelBoy) || 0;
    const yukseklik = Number(data.daireYukseklik) || 0;
    const tezgah = Number(data.tezgah) || 0;
    const katlar = Number(data.katSayisi?.split("+")[1]) || 1; // örn. "1+3"

    // Basit alan x yükseklik x kat çarpanı + tezgah fiyatı
    const alan = (en * boy) / 10000; // m²
    const basePrice = alan * yukseklik * katlar * 2000 + tezgah * 50;

    return Math.round(basePrice);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Sol taraf: Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="rounded-3xl shadow-sm p-6">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl font-bold">
                {steps[currentStep]}
              </CardTitle>
              <CardDescription>
                Kişisel bilgilerinizi ve adres bilgilerinizi girin.
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="space-y-4 px-0 ">
              {/* Kişisel Bilgiler */}
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" /> Kişisel Bilgiler
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">İsim</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="rounded-xl"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Soyisim</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="rounded-xl"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-xl"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">E-posta</Label>
                  <Input
                    id="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    className="rounded-xl"
                  />
                </div>
              </div>

              <Separator className={"px-4"} />

              {/* Adres Bilgileri */}
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" /> Adres Bilgileri
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Adres */}
                <div className="grid gap-2 md:col-span-2">
                  <Label htmlFor="address">Adres</Label>
                  <Textarea
                    id="address"
                    value={formData.address || ""}
                    onChange={handleChange}
                    className="rounded-xl w-full"
                    rows={3}
                  />
                </div>

                {/* İl */}
                <div className="grid gap-2">
                  <Label htmlFor="city">İl</Label>
                  <Select
                    value={formData.city}
                    onValueChange={(value) =>
                      setFormData({
                        ...formData,
                        city: value,
                        district: "",
                      })
                    }
                  >
                    <SelectTrigger id="city" className="rounded-xl w-full">
                      <SelectValue placeholder="Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city.sehir_id} value={city.sehir_adi}>
                          {city.sehir_adi}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* İlçe */}
                <div className="grid gap-2">
                  <Label htmlFor="district">İlçe</Label>
                  <Select
                    value={formData.district}
                    onValueChange={(value) =>
                      setFormData({ ...formData, district: value })
                    }
                    disabled={!formData.city}
                  >
                    <SelectTrigger id="district" className="rounded-xl w-full">
                      <SelectValue placeholder="Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      {districts
                        .filter((d) => d.sehir_adi === formData.city)
                        .map((district) => (
                          <SelectItem
                            key={district.ilce_id}
                            value={district.ilce_adi}
                          >
                            {district.ilce_adi}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Bina No */}
                <div className="grid gap-2">
                  <Label htmlFor="buildingNo">Bina No</Label>
                  <Input
                    id="buildingNo"
                    value={formData.buildingNo || ""}
                    onChange={handleChange}
                    className="rounded-xl"
                  />
                </div>

                {/* Kat No */}
                <div className="grid gap-2">
                  <Label htmlFor="floorNo">Kat No</Label>
                  <Input
                    id="floorNo"
                    value={formData.floorNo || ""}
                    onChange={handleChange}
                    className="rounded-xl"
                  />
                </div>

                {/* Ek Not */}
                <div className="grid gap-2 md:col-span-2">
                  <Label htmlFor="note">Ek Notlar</Label>
                  <Textarea
                    id="note"
                    value={formData.note}
                    onChange={handleChange}
                    className="rounded-xl w-full"
                    rows={3}
                  />
                </div>
              </div>

              {/* Navigasyon Butonları */}
              <div className="flex justify-end mt-4">
                <Button
                  className="flex items-center justify-center gap-2 bg-orange-500 text-white hover:bg-orange-600"
                  onClick={() => alert("Rezervasyonunuz alındı!")}
                >
                  Rezervasyon Al
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sağ taraf: Özet ve düzenleme */}
        <div className="space-y-6">
          <Card className="rounded-3xl shadow-sm overflow-hidden p-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-primary" /> Sipariş Özeti
            </h2>
            <Separator className="my-2" />

            <h3 className="text-xl font-semibold flex items-center gap-2 mt-2">
              <Tag className="w-5 h-5 text-primary" /> {project.title}
            </h3>
            <p className="text-gray-600 mb-2">{project.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-200 rounded-full text-sm flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" /> {tag}
                </span>
              ))}
            </div>

            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Label className="flex items-center gap-1">TEMEL EN (cm)</Label>
                <Input
                  value={formData.temelEn || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, temelEn: e.target.value })
                  }
                  className="rounded-xl"
                  type="number"
                  id="temelEn"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Label className="flex items-center gap-1">
                  TEMEL BOY (cm)
                </Label>
                <Input
                  value={formData.temelBoy || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, temelBoy: e.target.value })
                  }
                  className="rounded-xl"
                  type="number"
                  id="temelBoy"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Label className="flex items-center gap-1">
                  DAİRE YÜKSEKLİK (cm)
                </Label>
                <Input
                  value={formData.daireYukseklik || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, daireYukseklik: e.target.value })
                  }
                  className="rounded-xl"
                  type="number"
                  id="daireYukseklik"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Label className="flex items-center gap-1">
                  Tezgah Uzunluğu (cm)
                </Label>
                <Input
                  value={formData.tezgah || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, tezgah: e.target.value })
                  }
                  className="rounded-xl"
                  type="number"
                  id="tezgah"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Label className="flex items-center gap-1">
                  Bodrum + Kaç Kat?
                </Label>
                <Input
                  value={formData.katSayisi || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, katSayisi: e.target.value })
                  }
                  className="rounded-xl"
                  type="text"
                  id="katSayisi"
                  placeholder="örn. 1+3"
                />
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => alert("Ölçüler güncellendi!")}
              >
                <RefreshCcw className="w-4 h-4" /> Güncelle
              </Button>
            </div>

            <Separator className="my-4" />

            <div className="text-center flex flex-col items-center gap-2">
              <Wallet className="w-6 h-6 text-primary" />
              {/* Fiyat hesaplamasını basit bir formülle ekleyebiliriz */}
              <p className="text-2xl font-bold text-primary">
                {calculateConstructionPrice(formData).toLocaleString()}₺
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function ReservationPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Yükleniyor...</div>}>
      <ReservationContent />
    </Suspense>
  );
}
