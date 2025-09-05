"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Package,
  Wrench,
  Truck,
  CreditCard,
  Banknote,
  FileText,
  User,
  Plus,
  Minus,
  Search,
  ShoppingCart,
  MapPin,
  Calendar,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import cartItems from "@/seed/cartItems.json";
import products from "@/seed/products.json";

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

  const [items, setItems] = useState(cartItems);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
      )
    );
  };

  const addToCart = (product) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        return [
          ...prev,
          {
            id: product.id,
            name: product.title,
            image: product.image,
            qty: 1,
          },
        ];
      }
    });
    setSearchTerm("");
    setShowResults(false);
  };

  const totalQty = items.reduce((sum, i) => sum + (i.qty || 0), 0);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-start justify-center p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Sağ: Talep Formu */}
        <Card className="w-full max-w-3xl mx-auto shadow-xl rounded-2xl border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Müşteri Talep Formu
            </CardTitle>
          </CardHeader>
          <Separator />

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Talep Türü */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  Talep Türü
                </Label>
                <Select onValueChange={(v) => handleChange("talepTuru", v)}>
                  <SelectTrigger className="w-full rounded-xl">
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
                <Label className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  Proje Adı
                </Label>
                <Input
                  className="rounded-xl"
                  placeholder="Proje adını giriniz"
                  value={formData.projeAdi}
                  onChange={(e) => handleChange("projeAdi", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  Proje Numarası
                </Label>
                <Input
                  className="rounded-xl"
                  placeholder="Proje numarasını giriniz"
                  value={formData.projeNumarasi}
                  onChange={(e) =>
                    handleChange("projeNumarasi", e.target.value)
                  }
                />
              </div>

              {/* Adres */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  Ürün Teslim Adresi
                </Label>
                <Input
                  className="rounded-xl"
                  placeholder="Adres giriniz"
                  value={formData.adres}
                  onChange={(e) => handleChange("adres", e.target.value)}
                />
              </div>

              {/* Tarihler */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    Talep Tarihi
                  </Label>
                  <Input
                    type="date"
                    className="rounded-xl"
                    value={formData.talepTarihi}
                    onChange={(e) =>
                      handleChange("talepTarihi", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    Teslim Tarihi
                  </Label>
                  <Input
                    type="date"
                    className="rounded-xl"
                    value={formData.teslimTarihi}
                    onChange={(e) =>
                      handleChange("teslimTarihi", e.target.value)
                    }
                  />
                </div>
              </div>

              {/* Nakliye Durumu */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-muted-foreground" />
                  Nakliye Durumu
                </Label>
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
                <Label className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  Ödeme Şekli
                </Label>
                <Select onValueChange={(v) => handleChange("odemeSekli", v)}>
                  <SelectTrigger className="w-full rounded-xl">
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
              <Button
                type="submit"
                className="w-full rounded-xl text-base bg-orange-500 hover:bg-orange-600"
              >
                Teklif Al
              </Button>
            </form>
          </CardContent>
        </Card>
        {/* Sol: Sepet Özeti */}
        <Card className="w-full max-w-xl shadow-xl rounded-2xl border">
          <CardHeader className="pb-3 sticky top-0 bg-white z-10">
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-lg font-semibold">
                <ShoppingCart className="h-5 w-5 text-primary" />
                Sepet Özeti
              </span>
              <span className="text-sm font-normal text-muted-foreground">
                Toplam Adet:{" "}
                <b className="text-primary font-semibold">{totalQty}</b>
              </span>
            </CardTitle>
          </CardHeader>

          {/* Ürün Ekleme Inputu */}
          <div className="px-4 pb-3 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                className="pl-9 rounded-xl"
                placeholder="Sepetine yeni ürünler ekle..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
              />
            </div>
            {showResults && searchTerm && (
              <div className="mt-2 border rounded-xl bg-white shadow-lg max-h-64 overflow-y-auto z-20 absolute w-full">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer transition-all"
                      onClick={() => addToCart(p)}
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-10 w-10 rounded-lg object-cover shadow-sm"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{p.title}</p>
                        <p className="text-xs text-muted-foreground truncate">
                          {p.description}
                        </p>
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="p-3 text-sm text-muted-foreground">
                    Sonuç bulunamadı
                  </div>
                )}
              </div>
            )}
          </div>

          <Separator />

          <CardContent className="p-0 max-h-[500px] overflow-y-auto">
            {items.length === 0 ? (
              <div className="p-6 text-sm text-muted-foreground">
                Sepetiniz boş.
              </div>
            ) : (
              <ul className="divide-y">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-all"
                  >
                    {/* Görsel */}
                    <div className="relative h-14 w-14 overflow-hidden rounded-xl ring-1 ring-border shadow-sm">
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
                        className="rounded-full"
                        onClick={() => updateQty(item.id, -1)}
                        disabled={item.qty === 0}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.qty}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        onClick={() => updateQty(item.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
