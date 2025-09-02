"use client";
import React, { useState } from "react";
import UserSideBar from "../userSideBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Edit, Trash } from "lucide-react";

export default function MyRequests() {
  // Örnek talepler
  const [requests, setRequests] = useState([
    { id: 1, title: "Ev Temizliği", status: "Tamamlandı", date: "2025-08-30" },
    { id: 2, title: "Ofis Temizliği", status: "Beklemede", date: "2025-08-28" },
    {
      id: 3,
      title: "Bahçe Düzenleme",
      status: "İptal Edildi",
      date: "2025-08-25",
    },
  ]);

  const handleDelete = (id) => {
    if (confirm("Bu talebi silmek istediğinizden emin misiniz?")) {
      setRequests((prev) => prev.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sol sidebar */}
      <div className="w-64">
        <UserSideBar />
      </div>

      {/* Sağ taraf: talepler listesi */}
      <div className="flex-1 p-8 space-y-4">
        <h1 className="text-2xl font-semibold mb-6">Taleplerim</h1>

        {requests.length === 0 && (
          <p className="text-gray-500">Henüz oluşturulmuş talep yok.</p>
        )}

        <div className="space-y-3">
          {requests.map((req) => (
            <Card
              key={req.id}
              className="p-4 flex justify-between items-center hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col">
                <Link href={`/user-panel/request/request-details/${req.id}`}>
                  <p className="font-medium text-gray-800 hover:underline">
                    {req.title}
                  </p>
                </Link>
                <p className="text-sm text-gray-500">
                  {req.status} - {req.date}
                </p>
              </div>

              <div className="flex gap-2">
                <Link href={`/user-panel/request/edit-request/${req.id}`}>
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
