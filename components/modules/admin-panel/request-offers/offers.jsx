"use client";
import React from "react";
import AdminSideBar from "../adminSideBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Building2, Package, CalendarDays, DollarSign } from "lucide-react";

const offers = [
  {
    id: 1,
    company: "Yılmaz İnşaat",
    product: "Çimento (50kg torba)",
    quantity: "200 adet",
    price: "45.000 ₺",
    status: "Onaylandı",
    date: "2025-09-01",
  },
  {
    id: 2,
    company: "Demirhan Yapı",
    product: "İnşaat Demiri (12mm)",
    quantity: "5 ton",
    price: "120.000 ₺",
    status: "Beklemede",
    date: "2025-08-29",
  },
  {
    id: 3,
    company: "Kaya Proje",
    product: "Tuğla",
    quantity: "10.000 adet",
    price: "60.000 ₺",
    status: "Reddedildi",
    date: "2025-08-25",
  },
];

export default function Offers() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sol Menü */}
      <div className="w-64 border-r bg-white shadow-sm">
        <AdminSideBar />
      </div>

      {/* Sağ İçerik */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 tracking-tight">
          Verilen Tekliflerim
        </h1>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="shadow-lg rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition">
                <CardHeader className="border-b pb-4">
                  <CardTitle className="flex justify-between items-center text-lg font-semibold text-gray-800">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-blue-600" />
                      <span>{offer.company}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <CalendarDays className="w-4 h-4" />
                      {offer.date}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2 text-gray-700">
                    <Package className="w-5 h-5 text-green-600" />
                    <span className="font-medium">{offer.product}</span>
                  </div>
                  <p className="text-gray-700 mb-1">
                    Miktar:{" "}
                    <span className="font-medium">{offer.quantity}</span>
                  </p>
                  <div className="flex items-center gap-2 mb-4 text-gray-700">
                    <DollarSign className="w-5 h-5 text-yellow-600" />
                    <span className="font-semibold">{offer.price}</span>
                  </div>
                  <Badge
                    className="px-3 py-1 rounded-full text-sm"
                    variant={
                      offer.status === "Onaylandı"
                        ? "default"
                        : offer.status === "Beklemede"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {offer.status}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
