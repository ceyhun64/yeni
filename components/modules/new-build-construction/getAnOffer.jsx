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
import PROJECTS from "@/seed/projects.json";
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
  Calendar,
  Home,
  DollarSign, // Eko
  Crown, // Standart
  Gem, // Lüks
} from "lucide-react";

export default function GetAnOffer() {
  const params = useParams();
  const router = useRouter();
  const project = PROJECTS.find((p) => p.id.toString() === params?.id);

  // Girdiler
  const [temelEn, setTemelEn] = useState("");
  const [temelBoy, setTemelBoy] = useState("");
  const [daireYukseklik, setDaireYukseklik] = useState("");
  const [tezgah, setTezgah] = useState("");
  const [katSayisi, setKatSayisi] = useState("");

  const [price, setPrice] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState("standart"); // Varsayılan: Standart

  const priceRef = useRef(null);

  if (!project)
    return (
      <div className="p-10 text-center text-lg font-medium">
        Proje bulunamadı.
      </div>
    );

  const calculatePrice = () => {
    const area =
      ((Number(temelEn) || 0) * (Number(temelBoy) || 0) * (Number(katSayisi) || 1)) /
      10000; // m²
    const counterSize = Number(tezgah) || 0;
    const heightSize = Number(daireYukseklik) || 0;

    let basePrice = 0;
    switch (selectedPackage) {
      case "eko":
        basePrice = area * 1500 + counterSize * 30 + heightSize * 5;
        break;
      case "standart":
        basePrice = area * 2500 + counterSize * 50 + heightSize * 8;
        break;
      case "lux":
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
    lux: {
      card: "bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg border border-yellow-200",
      title: "text-yellow-700",
      icon: <Gem className="w-5 h-5 text-yellow-700" />,
    },
  };

  const currentStyle = packageStyles[selectedPackage ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Proje Detayları */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2 space-y-6"
        >
          <Card className="shadow-sm rounded-3xl overflow-hidden">
            {/* Galeri */}
            <div className="grid grid-cols-3 gap-2 p-4">
              {project.gallery?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  className="h-32 w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
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
                <Home className="w-6 h-6 text-primary" /> {project.title}
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                {project.desc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 px-6 pb-6">
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
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
                <Feature icon={<Ruler />} label="Alan" value={`${project.sizeM2} m²`} />
                <Feature icon={<Bed />} label="Yatak Odası" value={project.beds} />
                <Feature icon={<Bath />} label="Banyo" value={project.baths} />
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Sofa className="w-5 h-5 text-primary" /> Ev Özellikleri
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li className="flex items-center gap-2">
                    <Sofa className="w-4 h-4" /> Modern koltuk takımı
                  </li>
                  <li className="flex items-center gap-2">
                    <Table className="w-4 h-4" /> Ahşap mobilyalar
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
                  Bu proje, modern yaşam alanları için estetik ve fonksiyonelliği bir araya getirir. Doğal ışık ve ferah tasarım ön plandadır.
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Teklif Formu */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
          <Card className={`rounded-3xl shadow-sm p-6 space-y-6 transition-all duration-300 ${currentStyle.card}`}>
            <CardHeader className="px-0 pt-0">
              {/* Paket Seçimi */}
              <div className="flex justify-around border-b mb-6">
                <button
                  onClick={() => handlePackageSelect("eko")}
                  className={`py-2 px-4 font-medium flex items-center gap-2 ${
                    selectedPackage === "eko" ? "border-b-2 border-orange-500 text-orange-500" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <DollarSign className="w-4 h-4" /> Eko
                </button>
                <button
                  onClick={() => handlePackageSelect("standart")}
                  className={`py-2 px-4 font-medium flex items-center gap-2 ${
                    selectedPackage === "standart" ? "border-b-2 border-orange-500 text-orange-500" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Crown className="w-4 h-4" /> Standart
                </button>
                <button
                  onClick={() => handlePackageSelect("lux")}
                  className={`py-2 px-4 font-medium flex items-center gap-2 ${
                    selectedPackage === "lux" ? "border-b-2 border-orange-500 text-orange-500" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Gem className="w-4 h-4" /> Lüks
                </button>
              </div>

              <CardTitle className={`text-2xl font-bold flex items-center gap-2 ${currentStyle.title}`}>
                {currentStyle.icon} Alan Ölçüleri
              </CardTitle>
              <CardDescription className="text-gray-600">
                Projeye özel fiyatlandırma için alan ölçülerini girin.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-0">
              <InputField label="Temel En (cm)" value={temelEn} onChange={setTemelEn} placeholder="örn. 400" />
              <InputField label="Temel Boy (cm)" value={temelBoy} onChange={setTemelBoy} placeholder="örn. 600" />
              <InputField label="Daire Yükseklik (cm)" value={daireYukseklik} onChange={setDaireYukseklik} placeholder="örn. 280" />
              <InputField label="Tezgah Uzunluğu (cm)" value={tezgah} onChange={setTezgah} placeholder="örn. 250" />
              <div className="grid gap-2">
                <Label>Bodrum + Kaç Kat ?</Label>
                <Input
                  type="number"
                  value={katSayisi}
                  onChange={(e) => setKatSayisi(e.target.value)}
                  placeholder="örn. 3"
                  className="rounded-xl"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="note">Ek Notlar</Label>
                <Textarea id="note" placeholder="İsteklerinizi buraya yazabilirsiniz..." className="rounded-xl" />
              </div>
              <Button onClick={calculatePrice} className="w-full mt-2 flex items-center justify-center gap-2 bg-orange-500 text-white hover:bg-orange-500">
                <Wallet className="w-4 h-4" /> Hemen Hesapla
              </Button>
            </CardContent>
            <Separator />
            <Card ref={priceRef} className="mt-4 bg-gray-50 rounded-2xl p-4 text-center">
              <p className="text-sm text-gray-500">Tahmini Fiyat</p>
              <p className="text-2xl font-bold text-primary mt-1">{price != null ? price.toLocaleString() : "-"}₺</p>
              <Button
                variant="outline"
                className="w-full mt-3"
                onClick={() => {
                  const projectData = {
                    title: project.title,
                    desc: project.desc,
                    style: project.style || "",
                    tags: project.tags || [],
                    gallery: project.gallery || [],
                  };
                  const query = new URLSearchParams({
                    temelEn,
                    temelBoy,
                    daireYukseklik,
                    tezgah,
                    katSayisi,
                    package: selectedPackage,
                    project: JSON.stringify(projectData),
                  }).toString();
                  router.push(`/reservation/construction?${query}`);
                }}
                disabled={price === null}
              >
                <Calendar className="w-4 h-4" /> Keşif İçin Rezervasyon Al
              </Button>
            </Card>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

const Feature = ({ icon, label, value }) => (
  <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center shadow-sm">
    {React.cloneElement(icon, { className: "w-6 h-6 text-primary mb-2" })}
    <span className="text-gray-500 text-sm">{label}</span>
    <p className="font-medium text-gray-900">{value}</p>
  </div>
);

const InputField = ({ label, value, onChange, placeholder }) => (
  <div className="grid gap-2">
    <Label>{label}</Label>
    <Input type="number" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} className="rounded-xl" />
  </div>
);
