"use client";

import { Hammer, Package, Ruler, Headphones } from "lucide-react";

export default function Services() {
  const features = [
    {
      icon: Hammer,
      title: "Ustalık Hizmetleri",
      desc: "Deneyimli ustalarımızla kaliteli ve güvenilir işçilik.",
    },
    {
      icon: Package,
      title: "Malzeme Tedariki",
      desc: "İnşaat için gerekli tüm malzemeler hızlı ve uygun fiyatla.",
    },
    {
      icon: Ruler,
      title: "Proje & Danışmanlık",
      desc: "Mimari ve mühendislik çözümleriyle profesyonel proje desteği.",
    },
    {
      icon: Headphones,
      title: "7/24 Destek",
      desc: "İhtiyacınız olan her an yanınızda teknik destek ve müşteri hizmetleri.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white via-orange-50 to-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-4 transition-transform hover:scale-105"
            >
              <Icon className="w-12 h-12 text-orange-700" />
              <h5 className="text-orange-700 text-lg font-semibold">
                {item.title}
              </h5>
              <p className="text-gray-600 text-sm max-w-xs">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
