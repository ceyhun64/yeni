"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Map, ToolCase, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GetAnOfferForm from "../getAnOfferForm/getAnOfferForm";
import { motion } from "framer-motion";

export default function ConcreteAndRoad() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenForm = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleCloseForm = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
  };

  const hizmetler = [
    {
      icon: <ToolCase className="w-10 h-10 text-gray-700" />,
      title: "Beton Hizmeti",
      description:
        "Projeleriniz için dayanıklı ve kaliteli beton çözümleri sunuyoruz. Modern ekipman ve uzman ekip ile hizmet veriyoruz.",
      details: [
        "Hazır beton temini ve dökümü",
        "Temel, döşeme ve kolon betonları",
        "Kalite kontrol ve dayanıklılık testleri",
      ],
      image: "/services/concrete.jpg",
      iconColor: "text-gray-500",
    },
    {
      icon: <Truck className="w-10 h-10 text-yellow-500" />,
      title: "Yol Yapım Hizmeti",
      description:
        "Kamu ve özel projeler için güvenli ve dayanıklı yollar inşa ediyoruz. Planlı ve kaliteli bir yol yapımı süreci sunuyoruz.",
      details: [
        "Asfalt ve beton yol dökümü",
        "Zemin hazırlığı ve sıkıştırma",
        "Kaldırım ve altyapı entegrasyonu",
      ],
      image: "/services/road.jpg",
      iconColor: "text-yellow-400",
    },
    {
      icon: <Map className="w-10 h-10 text-purple-500" />,
      title: "Planlama ve Lojistik",
      description:
        "Projeleriniz için beton ve yol yapım süreçlerini detaylı şekilde planlıyor ve lojistik koordinasyon sağlıyoruz.",
      details: [
        "Proje başlangıç planlaması",
        "Ekipman ve iş gücü koordinasyonu",
        "Zaman ve maliyet optimizasyonu",
      ],
      image: "/services/planning2.jpg",
      iconColor: "text-purple-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/concrete2.jpg"
            alt="Beton ve Yol Hizmetleri"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-gray-700/20" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white drop-shadow-xl animate-[text-focus-in_1s]">
            Beton ve Yol Hizmetleri
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md text-gray-100">
            Projeleriniz için kaliteli beton ve güvenli yol çözümleri sunuyoruz.
            Modern ekipman ve deneyimli kadromuz ile her aşamada yanınızdayız.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold px-12 py-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform animate-bounce"
            onClick={() => handleOpenForm("Beton ve Yol Hizmetleri")}
          >
            🏗️ Teklif Al
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-300"
        >
          Sunduğumuz Hizmetler
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-3">
          {hizmetler.map((hizmet, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: idx * 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="group rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative w-full h-52 overflow-hidden rounded-t-3xl">
                  <Image
                    src={hizmet.image}
                    alt={hizmet.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl font-bold group-hover:text-gray-700 transition">
                    {hizmet.icon} {hizmet.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-gray-700 mb-5 leading-relaxed">
                    {hizmet.description}
                  </CardDescription>

                  <ul className="space-y-3 mb-6">
                    {hizmet.details.map((detail, dIdx) => (
                      <motion.li
                        key={dIdx}
                        whileHover={{ scale: 1.08, x: 8 }}
                        className="flex items-center gap-3 bg-white/10 rounded-xl p-3 shadow-md hover:bg-white/20 transition"
                      >
                        <Star className={`w-5 h-5 ${hizmet.iconColor}`} />
                        <span className="text-black font-medium">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full font-semibold border-2 border-transparent hover:border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-transform hover:scale-105"
                    onClick={() => handleOpenForm(hizmet.title)}
                  >
                    Teklif Al
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-700 py-28 px-6 text-center text-white overflow-hidden rounded-t-[4rem] shadow-inner">
        <div className="absolute inset-0">
          <img
            src="/services/road.jpg"
            alt="Hemen Teklif Alın"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-700/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white drop-shadow-lg animate-pulse">
            Projeniz İçin Teklif Alın
          </h2>
          <p className="mb-12 text-lg md:text-xl text-gray-100 drop-shadow-md">
            Beton ve yol hizmetlerimizle projenizi güvenle ve zamanında
            tamamlayın.
          </p>
          <Button
            size="lg"
            className="px-14 py-6 text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-3xl shadow-2xl animate-bounce hover:scale-105 transition"
            onClick={() => handleOpenForm("Beton ve Yol Hizmetleri")}
          >
            ✨ Teklif Al
          </Button>
        </motion.div>
      </section>

      {/* Teklif Formu */}
      <GetAnOfferForm
        selectedRequest={selectedRequest}
        isOpen={isModalOpen}
        onClose={handleCloseForm}
      />
    </div>
  );
}
