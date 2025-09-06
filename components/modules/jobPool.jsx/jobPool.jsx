"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Hammer } from "lucide-react";

const requests = [
  {
    id: "req201",
    title: "Mutfak Dolapları Yenileme",
    status: "Beklemede",
    requester: "Ahmet Yılmaz",
  },
  {
    id: "req202",
    title: "Banyo Seramik Döşeme",
    status: "Devam Ediyor",
    requester: "Ayşe Kaya",
  },
  {
    id: "req203",
    title: "Çatı Yalıtımı ve Onarımı",
    status: "Tamamlandı",
    requester: "Mehmet Demir",
  },
  {
    id: "req204",
    title: "Parke Zemin Döşeme",
    status: "Devam Ediyor",
    requester: "Zeynep Arslan",
  },
  {
    id: "req205",
    title: "Elektrik Tesisatı Yenileme",
    status: "Beklemede",
    requester: "Fatih Çelik",
  },
  {
    id: "req206",
    title: "Bahçe Duvarı İnşaatı",
    status: "Tamamlandı",
    requester: "Elif Karaca",
  },
  {
    id: "req207",
    title: "İç Mekan Boya Badana",
    status: "Devam Ediyor",
    requester: "Mustafa Koç",
  },
  {
    id: "req208",
    title: "Isı Yalıtım Mantolama",
    status: "Beklemede",
    requester: "Deniz Şahin",
  },
  {
    id: "req209",
    title: "Kapı ve Pencere Değişimi",
    status: "Devam Ediyor",
    requester: "Burcu Aydın",
  },
  {
    id: "req210",
    title: "Asma Tavan Uygulaması",
    status: "Tamamlandı",
    requester: "Selim Özkan",
  },
];

export default function JobPool() {
  const getBadgeColor = (status) => {
    if (status === "Tamamlandı")
      return "bg-green-500 text-white hover:bg-green-600";
    if (status === "Devam Ediyor")
      return "bg-blue-500 text-white hover:bg-blue-600";
    return "bg-yellow-400 text-black hover:bg-yellow-500";
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
          <CardHeader className="flex flex-row items-center gap-3">
            <Hammer className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <CardTitle className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              İnşaat & Tadilat Talep Havuzu
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="mt-6">
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-100 dark:bg-gray-800">
                    <TableHead className="w-[150px] font-semibold">
                      Talep No
                    </TableHead>
                    <TableHead className="font-semibold">
                      Talep Başlığı
                    </TableHead>
                    <TableHead className="text-center font-semibold">
                      Durum
                    </TableHead>
                    <TableHead className="font-semibold">Talep Eden</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests.map((request) => (
                    <TableRow
                      key={request.id}
                      className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      <TableCell className="font-medium text-gray-700 dark:text-gray-300">
                        {request.id}
                      </TableCell>
                      <TableCell className="text-gray-700 dark:text-gray-300">
                        {request.title}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          className={`px-3 py-1 text-sm rounded-full ${getBadgeColor(
                            request.status
                          )}`}
                        >
                          {request.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-700 dark:text-gray-300">
                        {request.requester}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
