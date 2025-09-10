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
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export default function MyOffers() {
  const [offers] = useState([
    {
      id: 1,
      requestTitle: "Mutfak Yenileme",
      price: "45.000 ₺",
      date: "2025-08-30",
      status: "Beklemede",
    },
    {
      id: 2,
      requestTitle: "Ofis Bölme Duvar Yapımı",
      price: "28.000 ₺",
      date: "2025-08-28",
      status: "Kabul Edildi",
    },
    {
      id: 3,
      requestTitle: "Banyo Tadilatı",
      price: "32.500 ₺",
      date: "2025-08-25",
      status: "Reddedildi",
    },
  ]);

  const statusColor = (status) => {
    switch (status) {
      case "Kabul Edildi":
        return "bg-gradient-to-r from-green-400 to-emerald-600 text-white";
      case "Reddedildi":
        return "bg-gradient-to-r from-red-400 to-rose-600 text-white";
      default:
        return "bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900";
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      {/* Sol Menü */}
      <div className="w-64 border-r bg-white/80 backdrop-blur-md shadow-lg">
        <UserSideBar />
      </div>

      {/* Sağ Kısım */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
          Tekliflerim
        </h1>

        {offers.length === 0 && (
          <p className="text-gray-500">Henüz teklif bulunmamaktadır.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="flex flex-col justify-between rounded-2xl border border-gray-200 shadow-xl bg-white/70 backdrop-blur-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-800">
                    {offer.requestTitle}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="text-2xl font-extrabold text-blue-600">
                    {offer.price}
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <CalendarDays className="w-4 h-4 text-blue-500" />
                    <span>{offer.date}</span>
                  </div>

                  <Badge
                    className={`px-3 py-1 text-xs font-semibold rounded-full shadow-md ${statusColor(
                      offer.status
                    )}`}
                  >
                    {offer.status}
                  </Badge>
                </CardContent>

                <CardFooter className="flex gap-2 justify-end">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-xl border-gray-300 hover:bg-gray-100"
                  >
                    Detay
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-xl bg-gradient-to-r from-green-400 to-emerald-600 text-white shadow-lg hover:opacity-90"
                  >
                    Kabul Et
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-xl bg-gradient-to-r from-red-400 to-rose-600 text-white shadow-lg hover:opacity-90"
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
