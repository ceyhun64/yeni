"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Package,
  Wrench,
  Truck,
  CreditCard,
  Banknote,
  FileText,
  User,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CartSummary from "./cartSummary";

export default function RequestForm() {
  const [formData, setFormData] = useState({
    talepTuru: "",
    projeAdi: "",
    projeNumarasi: "",
    adres: "",
    talepTarihi: "",
    teslimTarihi: "",
    nakliyeDurumu: "",
    odemeSekli: "",
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Sol: Sepet Özeti */}
        <CartSummary />

        {/* Sağ: Talep Formu */}
        <Card className="w-full max-w-3xl mx-auto shadow-lg rounded-2xl border">
          <CardHeader >
            <CardTitle className="text-xl font-semibold">
              Müşteri Talep Formu
            </CardTitle>
          </CardHeader>
          <Separator />

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Talep Türü */}
              <div className="space-y-2 ">
                <Label>Talep Türü</Label>
                <Select onValueChange={(v) => handleChange("talepTuru", v)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seçiniz" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="malzeme">
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-muted-foreground" />
                        <span>Malzeme</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="hizmet">
                      <div className="flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-muted-foreground" />
                        <span>Hizmet</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="kiralama">
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-muted-foreground" />
                        <span>Kiralama</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Proje Bilgileri */}
              <div className="space-y-2">
                <Label>Proje Adı</Label>
                <Input
                  placeholder="Proje adını giriniz"
                  value={formData.projeAdi}
                  onChange={(e) => handleChange("projeAdi", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Proje Numarası</Label>
                <Input
                  placeholder="Proje numarasını giriniz"
                  value={formData.projeNumarasi}
                  onChange={(e) =>
                    handleChange("projeNumarasi", e.target.value)
                  }
                />
              </div>

              {/* Adres */}
              <div className="space-y-2">
                <Label>Ürün Teslim Adresi</Label>
                <Input
                  placeholder="Adres giriniz"
                  value={formData.adres}
                  onChange={(e) => handleChange("adres", e.target.value)}
                />
              </div>

              {/* Tarihler */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Talep Tarihi</Label>
                  <Input
                    type="date"
                    value={formData.talepTarihi}
                    onChange={(e) =>
                      handleChange("talepTarihi", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Teslim Tarihi</Label>
                  <Input
                    type="date"
                    value={formData.teslimTarihi}
                    onChange={(e) =>
                      handleChange("teslimTarihi", e.target.value)
                    }
                  />
                </div>
              </div>

              {/* Nakliye Durumu */}
              <div className="space-y-2">
                <Label>Nakliye Durumu</Label>
                <RadioGroup
                  onValueChange={(v) => handleChange("nakliyeDurumu", v)}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dahil" id="dahil" />
                    <Label htmlFor="dahil">Dahil</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="haric" id="haric" />
                    <Label htmlFor="haric">Hariç</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Ödeme Şekli */}
              <div className="space-y-2">
                <Label>Ödeme Şekli</Label>
                <Select onValueChange={(v) => handleChange("odemeSekli", v)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seçiniz" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kart">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <span>Kart</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="havale">
                      <div className="flex items-center gap-2">
                        <Banknote className="h-4 w-4 text-muted-foreground" />
                        <span>Havale</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="cek">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Çek</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="cari">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>Cari</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full">
                Gönder
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
