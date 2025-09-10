"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { CalendarDays, MapPin, DollarSign } from "lucide-react";

// Devam eden projeler
const ongoingProjects = [
  {
    id: "proj104",
    title: "Alışveriş Merkezi İnşaatı",
    location: "İzmir, Konak",
    status: "Devam Ediyor",
    expectedCompletion: "Eylül 2025",
    cost: "15.000.000₺",
    desc: "Konak’ta alışveriş merkezi yapımı sürüyor, modern ve minimal iç tasarım odaklı.",
    image: "/completed-projects/mall.jpg",
  },
  {
    id: "proj101",
    title: "Lüks Villa - Bodrum",
    location: "Bodrum, Muğla",
    status: "Devam Ediyor",
    expectedCompletion: "Haziran 2025",
    cost: "2.500.000₺",
    desc: "Ege kıyısında lüks villa yapımı devam ediyor, modern mimari ve geniş bahçe ile.",
    image: "/completed-projects/luks-villa.jpg",
  },
  {
    id: "proj102",
    title: "Modern Apartman Kompleksi",
    location: "İstanbul, Kadıköy",
    status: "Devam Ediyor",
    expectedCompletion: "Aralık 2024",
    cost: "8.750.000₺",
    desc: "Kadıköy merkezde modern apartman kompleksi inşaatı sürüyor, minimal tasarım odaklı.",
    image: "/completed-projects/modern-apartment.jpg",
  },
  {
    id: "proj103",
    title: "Ofis Binası Yenileme",
    location: "Ankara, Çankaya",
    status: "Devam Ediyor",
    expectedCompletion: "Mart 2025",
    cost: "1.200.000₺",
    desc: "Çankaya’da ofis binası yenileme çalışmaları devam ediyor, sürdürülebilir malzemeler kullanılıyor.",
    image: "/completed-projects/office.jpg",
  },
];

export default function OngoingProjects() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Devam Eden Projelerimiz
        </h1>
        <Separator className="mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ongoingProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="transition-transform"
            >
              <Card className="rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                <CardContent className="p-4 space-y-2">
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      {project.location}
                    </CardDescription>
                  </CardHeader>

                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge
                      variant="secondary"
                      className="px-3 py-1 rounded-full"
                    >
                      {project.status}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      <CalendarDays className="w-4 h-4 text-gray-500" />
                      Tahmini Bitirme: {project.expectedCompletion}
                    </Badge>
                    <Badge
                      variant="default"
                      className="px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      <DollarSign className="w-4 h-4 text-gray-500" />
                      {project.cost}
                    </Badge>
                  </div>

                  <p className="text-gray-700 mt-2 text-sm">{project.desc}</p>
                </CardContent>

                {/* Accordion ile detaylar */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="details">
                    <AccordionTrigger className="px-4 text-sm text-gray-600">
                      Daha Fazla Detay
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-gray-600 text-sm space-y-1">
                      <p>
                        <strong>Proje Başlığı:</strong> {project.title}
                      </p>
                      <p>
                        <strong>Konum:</strong> {project.location}
                      </p>
                      <p>
                        <strong>Maliyet:</strong> {project.cost}
                      </p>
                      <p>
                        <strong>Tahmini Bitirme:</strong>{" "}
                        {project.expectedCompletion}
                      </p>
                      <p>{project.desc}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

              
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
