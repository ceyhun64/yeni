"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
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

const projects = [
  {
    id: "proj001",
    title: "Lüks Villa - Bodrum",
    location: "Bodrum, Muğla",
    status: "Tamamlandı",
    completedAt: "Haziran 2023",
    cost: "2.500.000₺",
    desc: "Ege kıyısında lüks villa projesi, modern mimari ve geniş bahçe ile.",
    image: "/completed-projects/luks-villa.jpg",
  },
  {
    id: "proj002",
    title: "Modern Apartman Kompleksi",
    location: "İstanbul, Kadıköy",
    status: "Tamamlandı",
    completedAt: "Aralık 2022",
    cost: "8.750.000₺",
    desc: "Kadıköy merkezde modern apartman kompleksi, konforlu ve minimal tasarım.",
    image: "/completed-projects/modern-apartment.jpg",
  },
  {
    id: "proj003",
    title: "Ofis Binası Yenileme",
    location: "Ankara, Çankaya",
    status: "Tamamlandı",
    completedAt: "Mart 2023",
    cost: "1.200.000₺",
    desc: "Çankaya’da ofis binası yenileme projesi, sürdürülebilir malzemeler kullanıldı.",
    image: "/completed-projects/office.jpg",
  },
  {
    id: "proj004",
    title: "Alışveriş Merkezi İnşaatı",
    location: "İzmir, Konak",
    status: "Tamamlandı",
    completedAt: "Eylül 2023",
    cost: "15.000.000₺",
    desc: "Konak’ta modern alışveriş merkezi, geniş alan ve minimal iç tasarım.",
    image: "/completed-projects/mall.jpg",
  },
];

export default function CompletedProjects() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Tamamlanan Projelerimiz
        </h1>
        <Separator className="mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
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
                    <CardDescription className="text-gray-600">
                      <MapPin className="inline w-4 h-4 mr-1 text-gray-500" />
                      {project.location}
                    </CardDescription>
                  </CardHeader>

                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="default" className="px-3 py-1 rounded-full">
                      {project.status}
                    </Badge>
                    <Badge variant="outline" className="px-3 py-1 rounded-full">
                      <CalendarDays className="inline w-4 h-4 mr-1 text-gray-500" />
                      {project.completedAt}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="px-3 py-1 rounded-full"
                    >
                      <DollarSign className="inline w-4 h-4 mr-1 text-gray-500" />
                      {project.cost}
                    </Badge>
                  </div>

                  <p className="text-gray-700 mt-2 text-sm">{project.desc}</p>
                </CardContent>

                {/* Accordion ile detay ekleyelim */}
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
                        <strong>Tamamlanma Tarihi:</strong>{" "}
                        {project.completedAt}
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
