"use client";
import React, { useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import ROOMS from "@/seed/rooms.json";
import {
  Bed,
  Bath,
  Ruler,
  Wallet,
  Tag,
  Sofa,
  Lamp,
  Table,
  Frame,
  FileText,
  ShoppingCart,
  DollarSign, // Eko
  Crown, // Standart
  Gem, // Pro
} from "lucide-react";

export default function GetAnOffer() {
  const params = useParams();
  const router = useRouter();
  const room = ROOMS.find((r) => r.id.toString() === params?.id);

  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [counter, setCounter] = useState("");
  const [price, setPrice] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState("standart"); // Varsayılan: "standart"

  const priceRef = useRef(null);

  if (!room)
    return (
      <div className="p-10 text-center text-lg font-medium">
        Oda bulunamadı.
      </div>
    );

  const calculatePrice = () => {
    const area = ((Number(width) || 0) * (Number(length) || 0)) / 10000; // m²
    const counterSize = Number(counter) || 0;
    const heightSize = Number(height) || 0;
    let basePrice = 0;

    switch (selectedPackage) {
      case "eko":
        basePrice = area * 1500 + counterSize * 30 + heightSize * 5;
        break;
      case "standart":
        basePrice = area * 2500 + counterSize * 50 + heightSize * 8;
        break;
      case "pro":
        basePrice = area * 3500 + counterSize * 75 + heightSize * 10;
        break;
      default:
        basePrice = 0;
    }

    setPrice(Math.round(basePrice));

    if (priceRef.current) {
      priceRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setPrice(null);
  };

  // Seçilen pakete göre dinamik olarak değişen stil ve ikonlar
  const packageStyles = {
    eko: {
      card: "bg-gray-100",
      title: "text-gray-700",
      icon: <DollarSign className="w-5 h-5 text-gray-700" />,
    },
    standart: {
      card: "bg-orange-50 shadow-md",
      title: "text-orange-600",
      icon: <Crown className="w-5 h-5 text-orange-600" />,
    },
    pro: {
      card: "bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg border border-yellow-200",
      title: "text-yellow-700",
      icon: <Gem className="w-5 h-5 text-yellow-700" />,
    },
  };

  const currentStyle = packageStyles[selectedPackage];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Oda Detayları */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2 space-y-6"
        >
          <Card className="shadow-sm rounded-3xl overflow-hidden">
            <div className="grid grid-cols-3 gap-2 p-4">
              {room.gallery?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${room.title} ${i + 1}`}
                  className="h-32 w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            {/* ejdwkşjdkewjdejdjwekdjkewhdkjwhdkjewıde */}
            {selectedImage && (
              <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                onClick={() => setSelectedImage(null)}
              >
                <button
                  className="fixed top-4 right-4 z-60 w-10 h-10 flex items-center justify-center text-black bg-white/80 rounded-full hover:bg-white/70 shadow-lg"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
                <motion.img
                  src={selectedImage}
                  alt="Selected"
                  className="max-h-[80vh] max-w-[80vw] rounded-xl shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
            <CardHeader className="px-6 pt-4">
              <CardTitle className="text-3xl font-bold flex items-center gap-3 text-gray-900">
                <Tag className="w-6 h-6 text-primary" /> {room.title}
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                {room.desc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 px-6 pb-6">
              <div className="flex flex-wrap gap-3">
                {room.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full px-4 py-1 text-sm flex items-center gap-1"
                  >
                    <Tag className="w-4 h-4" /> {tag}
                  </Badge>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
                <Feature
                  icon={<Ruler />}
                  label="Alan"
                  value={`${room.sizeM2} m²`}
                />
                <Feature icon={<Bed />} label="Yatak" value={room.beds} />
                <Feature icon={<Bath />} label="Banyo" value={room.baths} />
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Sofa className="w-5 h-5 text-primary" /> Kullanılan Ürünler
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li className="flex items-center gap-2">
                    <Sofa className="w-4 h-4" /> Modern koltuk takımı
                  </li>
                  <li className="flex items-center gap-2">
                    <Table className="w-4 h-4" /> Ahşap sehpa
                  </li>
                  <li className="flex items-center gap-2">
                    <Lamp className="w-4 h-4" /> LED aydınlatma
                  </li>
                  <li className="flex items-center gap-2">
                    <Frame className="w-4 h-4" /> Minimalist halı
                  </li>
                  <li className="flex items-center gap-2">
                    <Frame className="w-4 h-4" /> Sanat eseri duvar tablosu
                  </li>
                </ul>
              </div>
              <Separator />
              <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-primary">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" /> Tasarımcı Notu
                </h4>
                <blockquote className="italic text-gray-600">
                  Bu oda, günlük yaşamda konforu artırırken estetikten ödün
                  vermeyen kullanıcılar için hazırlandı. Doğal ışığı maksimum
                  kullanacak şekilde kurgulandı.
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Teklif Formu */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card
            className={`rounded-3xl shadow-sm p-6 space-y-6 transition-all duration-300 ${currentStyle.card}`}
          >
            <CardHeader className="px-0 pt-0">
              {/* Paket Seçim Butonları */}
              <div className="flex justify-around border-b mb-6">
                <button
                  onClick={() => handlePackageSelect("eko")}
                  className={`py-2 px-4 text-center font-medium transition-colors flex items-center gap-2 ${
                    selectedPackage === "eko"
                      ? "border-b-2 border-orange-500 text-orange-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <DollarSign className="w-4 h-4" />
                  Eko
                </button>
                <button
                  onClick={() => handlePackageSelect("standart")}
                  className={`py-2 px-4 text-center font-medium transition-colors flex items-center gap-2 ${
                    selectedPackage === "standart"
                      ? "border-b-2 border-orange-500 text-orange-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Crown className="w-4 h-4" />
                  Standart
                </button>
                <button
                  onClick={() => handlePackageSelect("pro")}
                  className={`py-2 px-4 text-center font-medium transition-colors flex items-center gap-2 ${
                    selectedPackage === "pro"
                      ? "border-b-2 border-orange-500 text-orange-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Gem className="w-4 h-4" />
                  Pro
                </button>
              </div>

              <CardTitle
                className={`text-2xl font-bold flex items-center gap-2 ${currentStyle.title}`}
              >
                Ölçülerinizi Girin
              </CardTitle>
              <CardDescription className="text-gray-600">
                Size özel fiyatlandırma için alan ölçülerini paylaşın.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-0">
              {/* TÜM PAKETLER İÇİN AYNI GİRDİLER */}
              <InputField
                label="En (cm)"
                value={width}
                onChange={setWidth}
                placeholder="örn. 400"
              />
              <InputField
                label="Boy (cm)"
                value={length}
                onChange={setLength}
                placeholder="örn. 600"
              />
              <InputField
                label="Yükseklik (cm)"
                value={height}
                onChange={setHeight}
                placeholder="örn. 280"
              />
              <InputField
                label="Tezgah Ölçüsü (cm)"
                value={counter}
                onChange={setCounter}
                placeholder="örn. 250"
              />

              <div className="grid gap-2">
                <Label htmlFor="note">Ek Notlar</Label>
                <Textarea
                  id="note"
                  placeholder="İsteklerinizi buraya yazabilirsiniz..."
                  className="rounded-xl"
                />
              </div>

              <Button
                onClick={calculatePrice}
                className="w-full mt-2 flex items-center justify-center gap-2 bg-orange-500 text-white hover:bg-orange-500"
              >
                <Wallet className="w-4 h-4" /> Hemen Hesapla
              </Button>

              <div className="text-center text-sm text-gray-500 mt-2">
                Ölçülerinizi girdikten sonra size özel teklif verilecektir.
              </div>
            </CardContent>
            <Separator />
            <Card
              ref={priceRef}
              className="mt-4 bg-gray-50 rounded-2xl p-4 text-center"
            >
              <p className="text-sm text-gray-500">Tahmini Fiyat</p>
              <p className="text-2xl font-bold text-primary mt-1">
                {price != null ? price.toLocaleString() : "-"}₺
              </p>
              <Button
                variant="outline"
                className="w-full mt-3"
                onClick={() => {
                  const roomData = {
                    title: room.title,
                    desc: room.desc,
                    style: room.style || "",
                    tags: room.tags || [],
                    gallery: room.gallery || [],
                  };
                  const query = new URLSearchParams({
                    width,
                    length,
                    height,
                    counter,
                    room: JSON.stringify(roomData),
                  }).toString();
                  router.push(`/order?${query}`);
                }}
                disabled={price === null}
              >
                <ShoppingCart className="w-4 h-4" /> Siparişe Başla
              </Button>
            </Card>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

// Feature component
const Feature = ({ icon, label, value }) => (
  <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center shadow-sm">
    {React.cloneElement(icon, { className: "w-6 h-6 text-primary mb-2" })}
    <span className="text-gray-500 text-sm">{label}</span>
    <p className="font-medium text-gray-900">{value}</p>
  </div>
);

// InputField component
const InputField = ({ label, value, onChange, placeholder }) => (
  <div className="grid gap-2">
    <Label>{label}</Label>
    <Input
      type="number"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl"
    />
  </div>
);
