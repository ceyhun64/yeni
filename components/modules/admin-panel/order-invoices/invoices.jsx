"use client";
import React from "react";
import AdminSideBar from "../adminSideBar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileText, CalendarDays, DollarSign } from "lucide-react";

const invoices = [
  {
    id: "INV-1001",
    company: "Yılmaz İnşaat",
    date: "2025-09-03",
    total: "45.000 ₺",
    status: "Ödendi",
  },
  {
    id: "INV-1002",
    company: "Demirhan Yapı",
    date: "2025-09-01",
    total: "120.000 ₺",
    status: "Beklemede",
  },
  {
    id: "INV-1003",
    company: "Kaya Proje",
    date: "2025-08-28",
    total: "60.000 ₺",
    status: "Gecikmiş",
  },
];

export default function Invoices() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sol Menü */}
      <div className="w-64 border-r bg-white shadow-sm">
        <AdminSideBar />
      </div>

      {/* Sağ İçerik */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
          <FileText className="w-8 h-8 text-blue-600" /> Faturalarım
        </h1>

        <div className="overflow-x-auto rounded-2xl border bg-white shadow-lg ">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow className="bg-gray-50 p-4">
                <TableHead className="w-[140px] text-gray-600">
                  Fatura No
                </TableHead>
                <TableHead className="text-gray-600">Firma</TableHead>
                <TableHead className="text-gray-600 text-left">
                  <div className="flex flex-col items-start">
                    <CalendarDays className="w-4 h-4 mb-1" />
                    Tarih
                  </div>
                </TableHead>
                <TableHead className="text-gray-600 text-left">
                  <div className="flex flex-col items-start">
                    <DollarSign className="w-4 h-4 mb-1" />
                    Tutar
                  </div>
                </TableHead>
                <TableHead className="text-gray-600">Durum</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {invoices.map((invoice, index) => (
                <TableRow
                  key={invoice.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="font-medium text-gray-800">
                    {invoice.id}
                  </TableCell>
                  <TableCell className="text-gray-700">
                    {invoice.company}
                  </TableCell>
                  <TableCell className="text-gray-700">
                    {invoice.date}
                  </TableCell>
                  <TableCell className="font-semibold text-gray-800">
                    {invoice.total}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className="px-3 py-1 rounded-full text-sm"
                      variant={
                        invoice.status === "Ödendi"
                          ? "default"
                          : invoice.status === "Beklemede"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {invoice.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
