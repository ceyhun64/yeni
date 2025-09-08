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
import { Building2, Factory, CheckCircle2, Star } from "lucide-react";
import GetAnOfferForm from "../getAnOfferForm/getAnOfferForm";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IndustrialManufacturing() {
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
      icon: <Building2 className="w-10 h-10 text-blue-500" />,
      title: "Ticari Bina İnşaatı",
      description:
        "Ofisler, mağazalar ve alışveriş merkezleri için anahtar teslim inşaat ve imalat hizmetleri.",
      details: [
        "Planlama ve tasarım",
        "Anahtar teslim inşaat",
        "Profesyonel ekip",
      ],
      image:
        "/services/insaat.jpg",
      iconColor: "text-blue-400",
    },
    {
      icon: <Factory className="w-10 h-10 text-green-500" />,
      title: "Endüstriyel Tesisler",
      description:
        "Fabrika ve üretim tesisleri için planlama, imalat ve inşaat çözümleri.",
      details: [
        "Üretim alanları tasarımı",
        "Makine entegrasyonu",
        "Proje yönetimi",
      ],
      image:
        "/services/tesis.jpg",
      iconColor: "text-green-400",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-yellow-500" />,
      title: "Kalite ve Güvence",
      description:
        "Tüm ticari ve endüstriyel projelerde kalite standartlarını garanti ediyoruz.",
      details: [
        "Standartlara uygunluk",
        "Denetim ve kontrol",
        "Süreç optimizasyonu",
      ],
      image:
        "/services/kalite.jpg",
      iconColor: "text-yellow-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/services/ticari.jpg"
            alt="Ticari ve Endüstriyel İnşaat"
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
            Ticari ve Endüstriyel İnşaat İmalatı
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">
            Fabrika, depo, ofis ve diğer ticari alanlar için profesyonel inşaat
            ve imalat hizmetleri sunuyoruz.
          </p>
          <Button
            size="lg"
            className="bg-white text-gray-800 font-bold px-12 py-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform animate-bounce"
            onClick={() =>
              handleOpenForm("Ticari ve Endüstriyel İnşaat İmalatı")
            }
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
          className="text-4xl md:text-5xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300"
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
                  <CardTitle className="flex items-center gap-3 text-2xl font-bold group-hover:text-blue-500 transition">
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
                    className="w-full font-semibold border-2 border-transparent hover:border-blue-400 hover:bg-blue-400 hover:text-gray-900 transition-transform hover:scale-105"
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
          <Image
            src="/services/ticari.jpg"
            alt="Projelerinizi Bizimle Hayata Geçirin"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 drop-shadow-lg animate-pulse">
            Projelerinizi Bizimle Hayata Geçirin
          </h2>
          <p className="mb-12 text-lg md:text-xl text-gray-100 drop-shadow-md">
            Deneyimli ekibimizle ticari ve endüstriyel projelerinizi zamanında
            ve kaliteli bir şekilde teslim ediyoruz.
          </p>
          <Button
            size="lg"
            className="px-14 py-6 text-xl font-bold bg-gradient-to-r from-white to-blue-400 text-gray-900 rounded-3xl shadow-2xl animate-bounce hover:scale-105 transition"
            onClick={() => handleOpenForm("Ticari ve Endüstriyel Projeler")}
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
