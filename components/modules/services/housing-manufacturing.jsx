"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, CheckCircle2, Star } from "lucide-react";
import GetAnOfferForm from "../getAnOfferForm/getAnOfferForm";
import { motion } from "framer-motion";

export default function HousingManufacturing() {
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

  const services = [
    {
      icon: <Home size={32} className="text-blue-600" />,
      title: "Konut İnşaatı",
      desc: "Bireysel konut projeleriniz için anahtar teslim inşaat ve imalat hizmetleri.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      details: [
        "Anahtar teslim projeler",
        "Modern mimari çözümler",
        "Zamanında teslim ve kalite garantisi",
      ],
      gradient: "from-blue-100 to-blue-50",
      iconColor: "text-blue-400",
    },
    {
      icon: <Building2 size={32} className="text-green-600" />,
      title: "Toplu Konut Projeleri",
      desc: "Büyük ölçekli toplu konut projeleri için planlama, inşaat ve imalat çözümleri.",
      img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
      details: [
        "Planlama ve proje yönetimi",
        "Maliyet optimizasyonu",
        "Kalite ve güvence standartları",
      ],
      gradient: "from-green-100 to-green-50",
      iconColor: "text-green-400",
    },
    {
      icon: <CheckCircle2 size={32} className="text-yellow-600" />,
      title: "Kalite ve Güvence",
      desc: "Tüm projelerimizde kalite standartlarını garanti ediyoruz. Profesyonel ve güvenilir hizmet.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80",
      details: [
        "Sertifikalı malzemeler",
        "Saha denetimleri",
        "Müşteri memnuniyeti odaklı süreçler",
      ],
      gradient: "from-yellow-100 to-yellow-50",
      iconColor: "text-yellow-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?auto=format&fit=crop&w=1470&q=80"
            alt="Modern Konut İnşaatı"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/70" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white drop-shadow-xl animate-[text-focus-in_1s]">
            Konut ve Toplu Konut İnşaat İmalatı
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md text-gray-100">
            Modern, güvenli ve sürdürülebilir konut projeleri için profesyonel
            imalat ve inşaat hizmetleri sunuyoruz.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold px-12 py-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform animate-bounce"
            onClick={() =>
              handleOpenForm("Konut ve Toplu Konut İnşaat İmalatı")
            }
          >
            🚀 Hemen Teklif Al
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-28 px-6 max-w-7xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300"
        >
          Size Sunacaklarımız
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: idx * 0.3 }}
              viewport={{ once: true }}
            >
              <Card
                className={`group rounded-3xl overflow-hidden border-0 shadow-2xl`}
              >
                {/* Görsel + hover efekt */}
                <div className="relative w-full h-52 overflow-hidden rounded-t-3xl">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl font-bold group-hover:text-blue-500 transition">
                    {service.icon} {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-gray-700 mb-5 leading-relaxed">
                    {service.desc}
                  </CardDescription>

                  {/* Detaylar */}
                  <ul className="space-y-3 mb-6">
                    {service.details.map((detail, dIdx) => (
                      <motion.li
                        key={dIdx}
                        whileHover={{ scale: 1.08, x: 8 }}
                        className="flex items-center gap-3 bg-white/10 rounded-xl p-3 shadow-md hover:bg-white/20 transition"
                      >
                        <Star className={`w-5 h-5 ${service.iconColor}`} />
                        <span className="text-black font-medium">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full font-semibold border-2 border-transparent hover:border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-transform hover:scale-105"
                    onClick={() => handleOpenForm(service.title)}
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
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-700 py-28 px-6 text-center text-white overflow-hidden rounded-t-[4rem] shadow-inner">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80"
            alt="Projelerinizi Bizimle Hayata Geçirin"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/70" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white drop-shadow-lg animate-pulse">
            Projelerinizi Bizimle Hayata Geçirin
          </h2>
          <p className="mb-12 text-lg md:text-xl text-gray-100 drop-shadow-md">
            Deneyimli ekibimizle konut ve toplu konut projelerinizi zamanında ve
            yüksek kaliteyle teslim ediyoruz.
          </p>
          <Button
            size="lg"
            className="px-14 py-6 text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-3xl shadow-2xl animate-bounce hover:scale-105 transition"
            onClick={() => handleOpenForm("Konut ve Toplu Konut Projeleri")}
          >
            ✨ Şimdi Teklif Al
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
