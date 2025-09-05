"use client";
import React, { useState } from "react";
import UserSideBar from "../userSideBar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Edit, Trash, Info } from "lucide-react";

export default function MyRequests() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      title: "Ev Temizliği",
      status: "Tamamlandı",
      date: "2025-08-30",
      description: "Ev genel temizlik yapılacak",
      category: "Ev Hizmeti",
      priority: "Yüksek",
      contact: "example1@gmail.com",
      assignedTo: "Ahmet Yılmaz",
    },
    {
      id: 2,
      title: "Ofis Temizliği",
      status: "Beklemede",
      date: "2025-08-28",
      description: "Ofiste haftalık temizlik",
      category: "Ofis Hizmeti",
      priority: "Orta",
      contact: "example2@gmail.com",
      assignedTo: "Mehmet Kaya",
    },
    {
      id: 3,
      title: "Bahçe Düzenleme",
      status: "İptal Edildi",
      date: "2025-08-25",
      description: "Bahçe bakımı ve çiçek dikimi",
      category: "Bahçe Hizmeti",
      priority: "Düşük",
      contact: "example3@gmail.com",
      assignedTo: "Ayşe Demir",
    },
  ]);

  const handleDelete = (id) => {
    if (confirm("Bu talebi silmek istediğinizden emin misiniz?")) {
      setRequests((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const statusColors = {
    Tamamlandı: "bg-green-100 text-green-800",
    Beklemede: "bg-yellow-100 text-yellow-800",
    "İptal Edildi": "bg-red-100 text-red-800",
  };

  const priorityColors = {
    Yüksek: "bg-red-200 text-red-900",
    Orta: "bg-yellow-200 text-yellow-900",
    Düşük: "bg-green-200 text-green-900",
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200">
        <UserSideBar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Taleplerim</h1>

        {requests.length === 0 ? (
          <p className="text-gray-500">Henüz oluşturulmuş talep yok.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {requests.map((req) => (
              <Card
                key={req.id}
                className="hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      <Link
                        href={`/user-panel/request/request-details/${req.id}`}
                        className="hover:underline"
                      >
                        {req.title}
                      </Link>
                    </CardTitle>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        statusColors[req.status]
                      }`}
                    >
                      {req.status}
                    </span>
                  </div>
                  <CardDescription className="text-gray-500">
                    {req.date}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-3">
                  <p className="text-gray-700">{req.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        priorityColors[req.priority]
                      }`}
                    >
                      Öncelik: {req.priority}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      Kategori: {req.category}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                      Sorumlu: {req.assignedTo}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    İletişim: {req.contact}
                  </p>

                  <div className="flex gap-2 mt-2">
                    <Link href={`/user-panel/request/edit-request/${req.id}`}>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" /> Düzenle
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(req.id)}
                    >
                      <Trash className="w-4 h-4" /> Sil
                    </Button>
                    <Link
                      href={`/user-panel/request/request-details/${req.id}`}
                      className="ml-auto"
                    >
                      <Button size="sm" variant="secondary">
                        <Info className="w-4 h-4" /> Detay
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
