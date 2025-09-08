"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Map, Truck, Loader, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GetAnOfferForm from "../getAnOfferForm/getAnOfferForm";
import { motion } from "framer-motion";

export default function LiftingAndTransport() {
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
      icon: <Loader className="w-10 h-10 text-blue-500" />,
      title: "Kaldırma Hizmeti",
      description:
        "Ağır yüklerin güvenli bir şekilde kaldırılması için modern vinçler ve deneyimli operatörler ile hizmet sunuyoruz.",
      details: [
        "Ağır ekipman kaldırma",
        "Prefabrik ve konteyner taşımacılığı",
        "Yüklerin güvenli ve zamanında kaldırılması",
      ],
      image: "/services/lifting.webp",
      gradient: "from-blue-100 to-blue-50",
      iconColor: "text-blue-400",
    },
    {
      icon: <Truck className="w-10 h-10 text-green-500" />,
      title: "Taşıma Hizmeti",
      description:
        "Malzemelerinizi güvenli bir şekilde hedef noktaya ulaştırıyoruz. Profesyonel araç ve ekip ile süreç yönetimi sağlıyoruz.",
      details: [
        "Şantiye içi ve dışı taşımacılık",
        "Konteyner ve malzeme taşımaları",
        "Zamanında teslim ve güvenli yükleme",
      ],
      image: "/services/transport.jpg",
      gradient: "from-green-100 to-green-50",
      iconColor: "text-green-400",
    },
    {
      icon: <Map className="w-10 h-10 text-purple-500" />,
      title: "Planlama ve Lojistik",
      description:
        "Projeleriniz için kaldırma ve taşıma süreçlerini detaylı şekilde planlıyor ve koordinasyonu sağlıyoruz.",
      details: [
        "Yük ve araç optimizasyonu",
        "Rota planlaması ve zaman yönetimi",
        "Risk analizi ve süreç kontrolü",
      ],
      image: "/services/planning2.jpg",
      gradient: "from-purple-100 to-purple-50",
      iconColor: "text-purple-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/lifting.jpg"
            alt="Kaldırma ve Taşıma Hizmetleri"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-green-600/20" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-white drop-shadow-xl animate-[text-focus-in_1s]">
            Kaldırma ve Taşıma Hizmetleri
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md text-gray-100">
            Ağır yüklerin kaldırılması ve güvenli taşınması için modern ekipman
            ve deneyimli kadromuz ile hizmet veriyoruz.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold px-12 py-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform animate-bounce"
            onClick={() => handleOpenForm("Kaldırma ve Taşıma Hizmetleri")}
          >
            🚀 Hemen Teklif Al
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
          className="text-4xl md:text-5xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-300"
        >
          Size Sunacaklarımız
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
                  <CardTitle className="flex items-center gap-3 text-2xl font-bold group-hover:text-green-500 transition">
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
      <section className="relative bg-gradient-to-r from-green-800 to-green-700 py-28 px-6 text-center text-white overflow-hidden rounded-t-[4rem] shadow-inner">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80"
            alt="Projelerinizi Bizimle Hayata Geçirin"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-green-700/50" />
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
            Deneyimli ekibimizle projelerinizi zamanında ve yüksek kaliteyle
            teslim ediyoruz.
          </p>
          <Button
            size="lg"
            className="px-14 py-6 text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-3xl shadow-2xl animate-bounce hover:scale-105 transition"
            onClick={() => handleOpenForm("Kaldırma ve Taşıma Hizmetleri")}
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
