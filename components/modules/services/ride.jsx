"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Car, ShipWheel, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GetAnOfferForm from "../getAnOfferForm/getAnOfferForm";
import { motion } from "framer-motion";

export default function CarRental() {
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
      icon: <Car className="w-10 h-10 text-blue-500" />,
      title: "Ekonomik Araç Kiralama",
      description:
        "Günlük, haftalık veya aylık kiralama seçenekleri ile bütçenize uygun araçlar.",
      details: [
        "Düşük yakıt tüketimi ve ekonomik modeller",
        "Kısa ve uzun dönem kiralama opsiyonları",
        "Sigorta ve yol yardımı dahil",
      ],
      image: "/services/rentacar2.jpg",
      iconColor: "text-blue-400",
    },
    {
      icon: <ShipWheel className="w-10 h-10 text-green-500" />,
      title: "Lüks ve VIP Araçlar",
      description:
        "Özel günleriniz veya iş seyahatleriniz için premium araç seçenekleri.",
      details: [
        "Yüksek konforlu lüks araçlar",
        "Şoförlü ve şoförsüz seçenekler",
        "Özel paketler ve hizmetler",
      ],
      image: "/services/rentacar3.jpg",
      iconColor: "text-green-400",
    },
    {
      icon: <Calendar className="w-10 h-10 text-purple-500" />,
      title: "Esnek Rezervasyon ve Planlama",
      description: "Araç kiralama sürecinizi kolay ve hızlı şekilde planlayın.",
      details: [
        "Online rezervasyon imkanı",
        "Araç değişim ve iptal kolaylığı",
        "Kişiye özel kiralama planları",
      ],
      image: "/services/rentacar4.jpg",
      iconColor: "text-purple-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/rentacar.jpg"
            alt="Binek Araç Kiralama Hizmetleri"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-600/20" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white drop-shadow-xl animate-[text-focus-in_1s]">
            Binek Araç Kiralama Hizmetleri
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md text-gray-100">
            Geniş araç filomuz ve esnek kiralama seçeneklerimiz ile
            ihtiyaçlarınıza uygun araçları kolayca kiralayabilirsiniz.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold px-12 py-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform animate-bounce"
            onClick={() => handleOpenForm("Binek Araç Kiralama")}
          >
            🚗 Hemen Kirala
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
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-700 py-28 px-6 text-center text-white overflow-hidden rounded-t-[4rem] shadow-inner">
        <div className="absolute inset-0">
          <img
            src="/services/rentacar.jpg"
            alt="Hemen Araç Kiralayın"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-700/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white drop-shadow-lg animate-pulse">
            Araçlarınızı Hemen Kiralayın
          </h2>
          <p className="mb-12 text-lg md:text-xl text-gray-100 drop-shadow-md">
            Filomuzdaki araçlarla konforlu, güvenli ve uygun fiyatlı bir
            yolculuk sizi bekliyor.
          </p>
          <Button
            size="lg"
            className="px-14 py-6 text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-3xl shadow-2xl animate-bounce hover:scale-105 transition"
            onClick={() => handleOpenForm("Binek Araç Kiralama")}
          >
            ✨ Şimdi Kirala
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
