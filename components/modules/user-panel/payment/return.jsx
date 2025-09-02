"use client";
import React, { useState } from "react";
import UserSideBar from "../userSideBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Edit, Trash, Eye } from "lucide-react";

export default function Return() {
  const [returns, setReturns] = useState([
    {
      id: 1,
      product: "Kompresör Model X",
      type: "İade",
      date: "2025-08-20",
      status: "Onaylandı",
      img: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      product: "Hava Filtresi",
      type: "İptal",
      date: "2025-08-28",
      status: "Beklemede",
      img: "https://via.placeholder.com/80",
    },
    {
      id: 3,
      product: "Motor Parçası",
      type: "İade",
      date: "2025-08-15",
      status: "Reddedildi",
      img: "https://via.placeholder.com/80",
    },
  ]);

  const handleDelete = (id) => {
    if (confirm("Bu talebi silmek istediğinize emin misiniz?")) {
      setReturns((prev) => prev.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 ">
      {/* Sol Menü */}
      <div className="w-64">
        <UserSideBar />
      </div>

      {/* Sağ taraf: İade/İptal talepleri */}
      <div className="flex-1 p-8 space-y-4">
        <h1 className="text-2xl font-semibold mb-6">İade & İptal Taleplerim</h1>

        {returns.length === 0 && (
          <p className="text-gray-500">Henüz talep oluşturulmamış.</p>
        )}

        <div className="space-y-3">
          {returns.map((req) => (
            <Card
              key={req.id}
              className="p-4 flex items-center justify-between hover:shadow-md transition"
            >
              {/* Sol: Ürün görseli */}
              <div className="w-20 h-20 rounded-md overflow-hidden border">
                <img
                  src={req.img}
                  alt={req.product}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Orta: Ürün bilgisi */}
              <div className="flex-1 ml-4">
                <p className="font-medium text-gray-800">{req.product}</p>
                <p className="text-sm text-gray-500">
                  {req.type} • {req.date}
                </p>
                <Badge
                  className={`mt-2 ${
                    req.status === "Onaylandı"
                      ? "bg-green-100 text-green-800"
                      : req.status === "Beklemede"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {req.status}
                </Badge>
              </div>

              {/* Sağ: Aksiyon butonları */}
              <div className="flex gap-2">
                <Link href={`/user-panel/return/details/${req.id}`}>
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href={`/user-panel/return/edit/${req.id}`}>
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4" />
                  </Button>
                </Link>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(req.id)}
                >
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
