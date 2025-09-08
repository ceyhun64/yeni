"use client";
import { useState } from "react";
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
import Image from "next/image";

export default function CustomProjectConstruction() {
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
      icon: <Home className="w-10 h-10 text-purple-700" />,
      title: "Villa ve Lüks Konut",
      description:
        "Özel tasarım villalar ve lüks konut projeleri için anahtar teslim inşaat hizmetleri.",
      image: "/services/villa.jpg",
      iconColor: "text-purple-500",
    },
    {
      icon: <Building2 className="w-10 h-10 text-green-700" />,
      title: "Rezidans ve Apartman Projeleri",
      description:
        "Büyük ölçekli butik projeler ve rezidans tasarımı için inşaat ve imalat çözümleri.",
      image: "/services/residance.jpg",
      iconColor: "text-green-500",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-yellow-700" />,
      title: "Kalite ve Güvence",
      description:
        "Tüm özel projelerimizde kalite ve güvence standartlarını garanti ediyoruz.",
      image: "/services/quality.jpg",
      iconColor: "text-yellow-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-purple-900 text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/services/hero-custom.jpg"
            alt="Özel Proje İnşaat"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Özel Proje İnşaat Hizmetleri
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">
            Villa, butik projeler, rezidans ve kişiye özel konut projeleri için
            profesyonel imalat ve inşaat hizmetleri sunuyoruz.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-700 font-bold px-12 py-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform animate-bounce"
            onClick={() => handleOpenForm("Özel Proje İnşaat Hizmetleri")}
          >
            Teklif Al
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
          className="text-4xl md:text-5xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400"
        >
          Hizmetlerimiz
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
                  <CardTitle className="flex items-center gap-3 text-2xl font-bold group-hover:text-purple-500 transition">
                    {hizmet.icon} {hizmet.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-gray-700 mb-5 leading-relaxed">
                    {hizmet.description}
                  </CardDescription>

                  <Button
                    variant="outline"
                    className="w-full font-semibold border-2 border-transparent hover:border-purple-400 hover:bg-purple-400 hover:text-gray-900 transition-transform hover:scale-105"
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
      <section className="relative bg-gradient-to-r from-purple-900 to-purple-800 py-28 px-6 text-center text-white overflow-hidden rounded-t-[4rem] shadow-inner">
        <div className="absolute inset-0">
          <Image
            src="/services/cta-custom.jpg"
            alt="Projelerinizi Bizimle Hayata Geçirin"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 drop-shadow-lg animate-pulse">
            Özel Projelerinizi Bizimle Gerçekleştirin
          </h2>
          <p className="mb-12 text-lg md:text-xl text-gray-100 drop-shadow-md">
            Deneyimli ekibimizle tüm villa, rezidans ve butik projelerinizi
            zamanında ve yüksek kaliteyle teslim ediyoruz.
          </p>
          <Button
            size="lg"
            className="px-14 py-6 text-xl font-bold bg-gradient-to-r from-white to-purple-400 text-gray-900 rounded-3xl shadow-2xl animate-bounce hover:scale-105 transition"
            onClick={() => handleOpenForm("Özel Proje İnşaat Projeleri")}
          >
            ✨ Teklif Al
          </Button>
        </div>
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
