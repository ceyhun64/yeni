"use client";
import React, { useState } from "react";
import UserSideBar from "../userSideBar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  MapPin,
  Truck,
  CreditCard,
} from "lucide-react";

export default function MyOffers() {
  const [offers] = useState([
    {
      id: 1,
      type: "Hizmet",
      buyer: "ABC İnşaat Ltd.",
      projectName: "Mutfak Yenileme",
      projectNumber: "PRJ-2025-001",
      address: "İstanbul, Kadıköy",
      requestDate: "2025-08-20",
      deliveryDate: "2025-08-30",
      shipping: "Dahil",
      payment: "Havale",
      price: "45.000 ₺",
      status: "Beklemede",
    },
    {
      id: 2,
      type: "Malzeme",
      buyer: "XYZ Yapı A.Ş.",
      projectName: "Ofis Bölme Duvar Yapımı",
      projectNumber: "PRJ-2025-002",
      address: "Ankara, Çankaya",
      requestDate: "2025-08-18",
      deliveryDate: "2025-08-28",
      shipping: "Hariç",
      payment: "Cari",
      price: "28.000 ₺",
      status: "Kabul Edildi",
    },
    {
      id: 3,
      type: "Kiralama",
      buyer: "Delta Proje",
      projectName: "Banyo Tadilatı",
      projectNumber: "PRJ-2025-003",
      address: "İzmir, Karşıyaka",
      requestDate: "2025-08-15",
      deliveryDate: "2025-08-25",
      shipping: "Dahil",
      payment: "Kart",
      price: "32.500 ₺",
      status: "Reddedildi",
    },
  ]);

  const statusColor = (status) => {
    switch (status) {
      case "Kabul Edildi":
        return "bg-green-100 text-green-700 border border-green-300";
      case "Reddedildi":
        return "bg-red-100 text-red-700 border border-red-300";
      default:
        return "bg-yellow-100 text-yellow-700 border border-yellow-300";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sol Menü */}
      <div className="w-64 border-r bg-white">
        <UserSideBar />
      </div>

      {/* Sağ Kısım */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-8 text-gray-800">
          Gelen Tekliflerim
        </h1>

        {offers.length === 0 && (
          <p className="text-gray-500">Henüz teklif bulunmamaktadır.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="flex flex-col rounded-xl border border-gray-200 shadow-sm bg-white hover:shadow-md transition-all duration-200">
                <CardHeader className="flex flex-col items-start space-y-2">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {offer.projectName}
                  </CardTitle>
                  <Badge className={statusColor(offer.status)}>
                    {offer.status}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-3 text-sm text-gray-700">
                  <div className="font-bold text-xl text-indigo-600">
                    {offer.price}
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gray-500" />
                    <span>{offer.buyer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-gray-500" />
                    <span>
                      {offer.requestDate} → {offer.deliveryDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{offer.address}</span>
                  </div>
                </CardContent>

                {/* Accordion Detaylar */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="details">
                    <AccordionTrigger className="px-4 text-sm text-gray-600">
                      Detaylar
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 space-y-2 text-sm text-gray-600">
                      <p>
                        <strong>Talep Türü:</strong> {offer.type}
                      </p>
                      <p>
                        <strong>Proje No:</strong> {offer.projectNumber}
                      </p>
                      <p>
                        <strong>Nakliye:</strong> {offer.shipping}
                      </p>
                      <p className="flex items-center gap-1">
                        <CreditCard className="w-4 h-4 text-gray-500" />
                        <span>Ödeme Şekli: {offer.payment}</span>
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <CardFooter className="flex gap-2 justify-end p-4">
               

                  <Button
                    size="sm"
                    className={`rounded-lg bg-green-600 text-white hover:bg-green-700 ${
                      offer.status !== "Beklemede"
                        ? "opacity-50 cursor-not-allowed hover:bg-green-600"
                        : ""
                    }`}
                    disabled={offer.status !== "Beklemede"}
                  >
                    Kabul Et
                  </Button>

                  <Button
                    size="sm"
                    className={`rounded-lg bg-red-600 text-white hover:bg-red-700 ${
                      offer.status !== "Beklemede"
                        ? "opacity-50 cursor-not-allowed hover:bg-red-600"
                        : ""
                    }`}
                    disabled={offer.status !== "Beklemede"}
                  >
                    Reddet
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
