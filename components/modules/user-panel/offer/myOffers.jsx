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
import { DollarSign, CalendarDays } from "lucide-react";

export default function MyOffers() {
  const [offers, setOffers] = useState([
    {
      id: 1,
      requestTitle: "Ev Temizliği",
      price: "1500 ₺",
      date: "2025-08-30",
      status: "Beklemede",
    },
    {
      id: 2,
      requestTitle: "Ofis Temizliği",
      price: "3500 ₺",
      date: "2025-08-28",
      status: "Kabul Edildi",
    },
    {
      id: 3,
      requestTitle: "Bahçe Düzenleme",
      price: "2500 ₺",
      date: "2025-08-25",
      status: "Reddedildi",
    },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-50 px-30">
      {/* Sol Menü */}
      <div className="w-64 border-r bg-white">
        <UserSideBar />
      </div>

      {/* Sağ Kısım */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-6">Tekliflerim</h1>

        {offers.length === 0 && (
          <p className="text-gray-500">Henüz teklif bulunmamaktadır.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              className="flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-lg font-medium">
                  {offer.requestTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="font-semibold">{offer.price}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <CalendarDays className="w-4 h-4" />
                  <span>{offer.date}</span>
                </div>
                <Badge
                  variant={
                    offer.status === "Kabul Edildi"
                      ? "default"
                      : offer.status === "Reddedildi"
                      ? "destructive"
                      : "secondary"
                  }
                  className="w-fit"
                >
                  {offer.status}
                </Badge>
              </CardContent>
              <CardFooter className="flex gap-2 justify-end">
                <Button size="sm" variant="outline">
                  Detay
                </Button>
                <Button size="sm" variant="default">
                  Kabul Et
                </Button>
                <Button size="sm" variant="destructive">
                  Reddet
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
