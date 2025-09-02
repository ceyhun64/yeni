"use client";

import React from "react";
import AdminSideBar from "../adminSideBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Building2, Package, CalendarDays } from "lucide-react";

const requests = [
  {
    id: 1,
    company: "Yılmaz İnşaat",
    date: "2025-09-01",
    product: "Çimento (50kg torba)",
    quantity: "200 adet",
  },
  {
    id: 2,
    company: "Demirhan Yapı",
    date: "2025-08-29",
    product: "İnşaat Demiri (12mm)",
    quantity: "5 ton",
  },
  {
    id: 3,
    company: "Kaya Proje",
    date: "2025-08-25",
    product: "Tuğla",
    quantity: "10.000 adet",
  },
];

export default function Requests() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sol Menü */}
      <div className="w-64 border-r bg-white shadow-sm">
        <AdminSideBar />
      </div>

      {/* Sağ İçerik */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 tracking-tight">
          Gelen Malzeme Talepleri
        </h1>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {requests.map((req, index) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="shadow-lg rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition">
                <CardHeader className="border-b pb-4">
                  <CardTitle className="flex justify-between items-center text-lg font-semibold text-gray-800">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-blue-600" />
                      <span>{req.company}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <CalendarDays className="w-4 h-4" />
                      {req.date}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-3 flex items-center gap-2 text-gray-700">
                    <Package className="w-5 h-5 text-green-600" />
                    <span className="font-medium">{req.product}</span>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Miktar:{" "}
                    <span className="font-semibold">{req.quantity}</span>
                  </p>
                  <div className="flex gap-3">
                    <Button className="rounded-xl px-6" variant="default">
                      Teklif Gönder
                    </Button>
                    <Button className="rounded-xl px-6" variant="destructive">
                      Reddet
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
