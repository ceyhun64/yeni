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
import { CalendarDays, MapPin, CreditCard } from "lucide-react";
import Link from "next/link";

export default function MyRequests() {
  const [requests, setRequests] = useState([
    {
      id: "req301",
      tarih: "06.09.2025",
      talepTur: "Malzeme Talebi",
      kategori: "MALZEME",
      urunAdi: "İnşaat Demiri 12mm",
      marka: "BrandX",
      miktar: 100,
      birim: "Adet",
      urunKullanimSektor: "İnşaat",
      il: "İstanbul",
      ilce: "Kadıköy",
      firmaKod: "FRM123",
      altKategori: "İnşaat Demiri",
      nakliyeDurumu: "dahil",
      termin: "15.09.2025",
      odeme: "kart",
    },
    {
      id: "req302",
      tarih: "07.09.2025",
      talepTur: "Hizmet Talebi",
      kategori: "HİZMET",
      urunAdi: "Banyo Yenileme",
      marka: "Renovex",
      miktar: 1,
      birim: "Proje",
      urunKullanimSektor: "Tadilat",
      il: "Ankara",
      ilce: "Çankaya",
      firmaKod: "FRM456",
      altKategori: "Banyo Tadilat",
      nakliyeDurumu: "hariç",
      termin: "20.09.2025",
      odeme: "havale",
    },
    {
      id: "req303",
      tarih: "08.09.2025",
      talepTur: "Kiralama Talebi",
      kategori: "KİRALAMA",
      urunAdi: "Ekskavatör ZX200",
      marka: "Hitachi",
      miktar: 2,
      birim: "Adet",
      urunKullanimSektor: "İnşaat",
      il: "İzmir",
      ilce: "Bornova",
      firmaKod: "FRM789",
      altKategori: "Kazı ve Yükleme",
      nakliyeDurumu: "dahil",
      termin: "25.09.2025",
      odeme: "çek",
    },
  ]);

  const handleDelete = (id) => {
    if (confirm("Bu talebi silmek istediğinizden emin misiniz?")) {
      setRequests((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const badgeColor = (type) => {
    switch (type) {
      case "Malzeme Talebi":
        return "bg-blue-100 text-blue-700";
      case "Hizmet Talebi":
        return "bg-purple-100 text-purple-700";
      case "Kiralama Talebi":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 border-r bg-white">
        <UserSideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-8 text-gray-800">Taleplerim</h1>

        {requests.length === 0 ? (
          <p className="text-gray-500">Henüz oluşturulmuş talep yok.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {requests.map((req, i) => (
              <motion.div
                key={req.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="flex flex-col rounded-xl border border-gray-200 shadow-sm bg-white hover:shadow-md transition-all duration-200">
                  <CardHeader className="flex flex-col items-start space-y-2">
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {req.urunAdi}
                    </CardTitle>
                    <Badge className={badgeColor(req.talepTur)}>
                      {req.talepTur}
                    </Badge>
                  </CardHeader>

                  <CardContent className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-gray-500" />
                      <span>Talep Tarihi: {req.tarih}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>
                        {req.il} / {req.ilce}
                      </span>
                    </div>
                  </CardContent>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="details">
                      <AccordionTrigger className="px-4 text-sm text-gray-600">
                        Detaylar
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 space-y-1 text-sm text-gray-600">
                        <p>
                          <strong>Kategori:</strong> {req.kategori} (
                          {req.altKategori})
                        </p>
                        <p>
                          <strong>Marka:</strong> {req.marka}
                        </p>
                        <p>
                          <strong>Miktar:</strong> {req.miktar} {req.birim}
                        </p>
                        <p>
                          <strong>Termin:</strong> {req.termin}
                        </p>
                        <p className="flex items-center gap-1">
                          <CreditCard className="w-4 h-4 text-gray-500" />
                          <span>Ödeme: {req.odeme}</span>
                        </p>
                        <p>
                          <strong>Nakliye:</strong> {req.nakliyeDurumu}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <CardFooter className="flex gap-2 justify-end p-4">
                
                    <Link href={`/user-panel/request/edit-request/${req.id}`}>
                      <Button
                        size="sm"
                        className="bg-indigo-600 text-white hover:bg-indigo-700"
                      >
                        Düzenle
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      className="bg-red-600 text-white hover:bg-red-700"
                      onClick={() => handleDelete(req.id)}
                    >
                      Sil
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
