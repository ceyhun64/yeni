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

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white">
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
                        {req.urunAdi}
                      </Link>
                    </CardTitle>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      {req.talepTur}
                    </span>
                  </div>
                  <CardDescription className="text-gray-500">
                    Talep Tarihi: {req.tarih}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-3">
                  <p className="text-gray-700">
                    <strong>Kategori:</strong> {req.kategori} ({req.altKategori}
                    )
                  </p>
                  <p className="text-gray-700">
                    <strong>Marka:</strong> {req.marka}
                  </p>
                  <p className="text-gray-700">
                    <strong>Miktar:</strong> {req.miktar} {req.birim}
                  </p>
                  <p className="text-gray-700">
                    <strong>Lokasyon:</strong> {req.il} / {req.ilce}
                  </p>
                  <p className="text-gray-700">
                    <strong>Termin:</strong> {req.termin}
                  </p>
                  <p className="text-gray-700">
                    <strong>Ödeme:</strong> {req.odeme}
                  </p>
                  <p className="text-gray-700">
                    <strong>Nakliye:</strong> {req.nakliyeDurumu}
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
