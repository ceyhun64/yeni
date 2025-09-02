"use client";
import React, { useState } from "react";
import UserSideBar from "../userSideBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MyOrders() {
  // Örnek siparişler
  const [orders] = useState([
    {
      id: 1,
      orderNo: "ORD-1001",
      date: "2025-08-20",
      total: "1.250 ₺",
      status: "Hazırlanıyor",
    },
    {
      id: 2,
      orderNo: "ORD-1002",
      date: "2025-08-22",
      total: "3.500 ₺",
      status: "Kargoya Verildi",
    },
    {
      id: 3,
      orderNo: "ORD-1003",
      date: "2025-08-28",
      total: "750 ₺",
      status: "Tamamlandı",
    },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sol Menü */}
      <div className="w-64">
        <UserSideBar />
      </div>

      {/* Sağ taraf: Siparişler listesi */}
      <div className="flex-1 p-8 space-y-4">
        <h1 className="text-2xl font-semibold mb-6">Siparişlerim</h1>

        {orders.length === 0 && (
          <p className="text-gray-500">Henüz siparişiniz bulunmamaktadır.</p>
        )}

        <div className="space-y-3">
          {orders.map((order) => (
            <Card
              key={order.id}
              className="p-4 flex justify-between items-center hover:shadow-md transition-shadow"
            >
              {/* Sol: Sipariş Bilgileri */}
              <div>
                <p className="font-medium text-gray-800">
                  Sipariş No: {order.orderNo}
                </p>
                <p className="text-sm text-gray-500">
                  Tarih: {order.date} | Tutar: {order.total}
                </p>
              </div>

              {/* Sağ: Durum ve Detay Butonu */}
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === "Tamamlandı"
                      ? "bg-green-100 text-green-800"
                      : order.status === "Kargoya Verildi"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {order.status}
                </span>
                <Link href={`/user-panel/orders/${order.id}`}>
                  <Button size="sm" variant="outline">
                    Detay
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
