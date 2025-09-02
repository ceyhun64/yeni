"use client";
import React from "react";
import AdminSideBar from "../adminSideBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  Truck,
  CheckCircle2,
  CalendarDays,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";

const orders = [
  {
    id: 1,
    company: "Yılmaz İnşaat",
    product: "Çimento (50kg torba)",
    quantity: "200 adet",
    total: "45.000 ₺",
    status: "Hazırlanıyor",
    date: "2025-09-03",
  },
  {
    id: 2,
    company: "Demirhan Yapı",
    product: "İnşaat Demiri (12mm)",
    quantity: "5 ton",
    total: "120.000 ₺",
    status: "Kargoda",
    date: "2025-09-01",
  },
  {
    id: 3,
    company: "Kaya Proje",
    product: "Tuğla",
    quantity: "10.000 adet",
    total: "60.000 ₺",
    status: "Teslim Edildi",
    date: "2025-08-28",
  },
];

export default function Orders() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sol Menü */}
      <div className="w-64 border-r bg-white shadow-sm">
        <AdminSideBar />
      </div>

      {/* Sağ İçerik */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-10 text-gray-800 tracking-tight">
          Siparişlerim
        </h1>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="shadow-lg rounded-2xl border border-gray-200 bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <CardHeader className="border-b pb-4">
                  <CardTitle className="flex justify-between items-center text-lg font-semibold text-gray-800">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-blue-600" />
                      {order.company}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <CalendarDays className="w-4 h-4" />
                      {order.date}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Package className="w-5 h-5 text-green-600" />
                    <span className="font-medium">{order.product}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-gray-700">
                    <p>
                      Miktar:{" "}
                      <span className="font-medium">{order.quantity}</span>
                    </p>
                    <p>
                      Toplam:{" "}
                      <span className="font-semibold">{order.total}</span>
                    </p>
                  </div>

                  <div>
                    <Badge
                      className="px-3 py-1 rounded-full text-sm"
                      variant={
                        order.status === "Teslim Edildi"
                          ? "default"
                          : order.status === "Kargoda"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {order.status === "Hazırlanıyor" && (
                        <Package className="w-4 h-4 mr-1 inline" />
                      )}
                      {order.status === "Kargoda" && (
                        <Truck className="w-4 h-4 mr-1 inline" />
                      )}
                      {order.status === "Teslim Edildi" && (
                        <CheckCircle2 className="w-4 h-4 mr-1 inline" />
                      )}
                      {order.status}
                    </Badge>
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
