import React from "react";
import UserSideBar from "../userSideBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

const reservations = [
  {
    id: 1,
    project: "Mutfak Tadilatı",
    offer: "Dolap yenileme + Fayans değişimi",
    price: "45.000₺",
    date: "2025-09-15",
    time: "14:00",
    status: "Randevu Onaylandı",
  },
  {
    id: 2,
    project: "Banyo Yenileme",
    offer: "Duşakabin + Seramik değişimi",
    price: "28.000₺",
    date: "2025-09-18",
    time: "11:30",
    status: "İnceleme Bekleniyor",
  },
  {
    id: 3,
    project: "Salon Boya & Dekor",
    offer: "Tavan ve duvar boyası",
    price: "12.000₺",
    date: "2025-09-22",
    time: "09:00",
    status: "Randevu Onaylandı",
  },
];

export default function Reservation() {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sol Sidebar */}
      <div className="w-64 border-r bg-white">
        <UserSideBar />
      </div>

      {/* İçerik */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6 text-[#006494]">
          Rezervasyonlar
        </h1>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-[#007EA7]" />
              Rezervasyon Listesi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Proje</TableHead>
                  <TableHead>Teklif</TableHead>
                  <TableHead>Fiyat</TableHead>
                  <TableHead>Tarih</TableHead>
                  <TableHead>Saat</TableHead>
                  <TableHead>Durum</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reservations.map((res) => (
                  <TableRow key={res.id}>
                    <TableCell className="font-medium">{res.project}</TableCell>
                    <TableCell>{res.offer}</TableCell>
                    <TableCell className="font-semibold text-[#006494]">
                      {res.price}
                    </TableCell>
                    <TableCell>{res.date}</TableCell>
                    <TableCell>{res.time}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          res.status.includes("Onaylandı")
                            ? "bg-green-600"
                            : "bg-yellow-500"
                        }
                      >
                        {res.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
