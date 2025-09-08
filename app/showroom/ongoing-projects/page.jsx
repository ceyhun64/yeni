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
import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// Örnek devam eden projeler
const ongoingProjects = [
  {
    id: "proj101",
    title: "Luxury Villa - Bodrum",
    location: "Bodrum, Muğla",
    status: "Devam Ediyor",
    expectedCompletion: "Haziran 2025",
    cost: "2.500.000₺",
    desc: "Ege kıyısında lüks villa yapımı devam ediyor, modern mimari ve geniş bahçe ile.",
    image: "/projects/villa-bodrum.jpg",
  },
  {
    id: "proj102",
    title: "Modern Apartment Complex",
    location: "İstanbul, Kadıköy",
    status: "Devam Ediyor",
    expectedCompletion: "Aralık 2024",
    cost: "8.750.000₺",
    desc: "Kadıköy merkezde modern apartman kompleksi inşaatı sürüyor, minimal tasarım odaklı.",
    image: "/projects/apartment-istanbul.jpg",
  },
  {
    id: "proj103",
    title: "Office Building Renovation",
    location: "Ankara, Çankaya",
    status: "Devam Ediyor",
    expectedCompletion: "Mart 2025",
    cost: "1.200.000₺",
    desc: "Çankaya’da ofis binası yenileme çalışmaları devam ediyor, sürdürülebilir malzemeler kullanılıyor.",
    image: "/projects/office-ankara.jpg",
  },
  {
    id: "proj104",
    title: "Shopping Mall Construction",
    location: "İzmir, Konak",
    status: "Devam Ediyor",
    expectedCompletion: "Eylül 2025",
    cost: "15.000.000₺",
    desc: "Konak’ta alışveriş merkezi yapımı sürüyor, modern ve minimal iç tasarım odaklı.",
    image: "/projects/mall-izmir.jpg",
  },
];

export default function OngoingProjects() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12 px-30">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Devam Eden Projelerimiz
        </h1>
        <Separator className="mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ongoingProjects.map((project) => (
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
                    <Badge variant="outline" className="px-3 py-1 rounded-full">
                      Tahmini Bitirme: {project.expectedCompletion}
                    </Badge>
                    <Badge variant="default" className="px-3 py-1 rounded-full">
                      {project.cost}
                    </Badge>
                  </div>

                  <p className="text-gray-700 mt-2 text-sm">{project.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
