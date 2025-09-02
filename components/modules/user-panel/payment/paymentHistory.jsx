"use client";
import React from "react";
import UserSideBar from "../userSideBar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function PaymentHistory() {
  const payments = [
    {
      id: 1,
      date: "2025-08-15",
      amount: "12.000 TL",
      method: "Kredi Kartı",
      status: "Tamamlandı",
    },
    {
      id: 2,
      date: "2025-08-20",
      amount: "7.500 TL",
      method: "Banka Havalesi",
      status: "Beklemede",
    },
    {
      id: 3,
      date: "2025-08-25",
      amount: "3.200 TL",
      method: "Kredi Kartı",
      status: "Başarısız",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 ">
      {/* Sol Menü */}
      <div className="w-64">
        <UserSideBar />
      </div>

      {/* Sağ taraf: Ödeme Geçmişi */}
      <div className="flex-1 p-8 space-y-6">
        <h1 className="text-2xl font-semibold">Ödeme Geçmişim</h1>

        <Table className="bg-white rounded-xl shadow-sm">
          <TableHeader>
            <TableRow>
              <TableHead>Tarih</TableHead>
              <TableHead>Tutar</TableHead>
              <TableHead>Ödeme Yöntemi</TableHead>
              <TableHead>Durum</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.date}</TableCell>
                <TableCell className="font-medium">{p.amount}</TableCell>
                <TableCell>{p.method}</TableCell>
                <TableCell>
                  <Badge
                    className={`${
                      p.status === "Tamamlandı"
                        ? "bg-green-100 text-green-700"
                        : p.status === "Beklemede"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
