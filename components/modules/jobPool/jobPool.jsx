"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Hammer } from "lucide-react";
import requests from "@/seed/requests.json";
import MakeAnOffer from "./makeAnOfferForm";
import Link from "next/link";

export default function JobPool() {
  const [showForm, setShowForm] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const getBadgeColor = (categoryOrStatus) => {
    switch (categoryOrStatus) {
      case "MALZEME":
        return "bg-orange-100 text-orange-800";
      case "HİZMET":
        return "bg-blue-100 text-blue-800";
      case "KİRALAMA":
        return "bg-green-100 text-green-800";
      case "dahil":
        return "bg-green-50 text-green-700";
      case "hariç":
        return "bg-yellow-50 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleOpenForm = (request) => {
    setSelectedRequest(request);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setSelectedRequest(null);
    setShowForm(false);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <CardHeader className="flex flex-row items-center gap-3">
            <Hammer className="h-8 w-8 text-blue-500 dark:text-blue-400" />
            <CardTitle className="text-2xl font-semibold tracking-tight">
              Talep Havuzu
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="mt-4">
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 dark:bg-gray-800">
                    <TableHead>Talep Tarihi</TableHead>
                    <TableHead>İli</TableHead>
                    <TableHead>İlçesi</TableHead>
                    <TableHead>Firma Kod</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Alt Kategori</TableHead>
                    <TableHead>Nakliye Durumu</TableHead>
                    <TableHead>Termin Tarihi</TableHead>
                    <TableHead>Ödeme Şekli</TableHead>
                    <TableHead>Detaylı Liste</TableHead>
                    <TableHead>Teklif Ver</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {requests.map((r) => (
                    <TableRow
                      key={r.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                    >
                      <TableCell>{r.tarih}</TableCell>
                      <TableCell>{r.il}</TableCell>
                      <TableCell>{r.ilce}</TableCell>
                      <TableCell>{r.firmaKod}</TableCell>
                      <TableCell>
                        <Badge
                          className={`${getBadgeColor(
                            r.kategori
                          )} px-2 py-1 rounded-full text-sm`}
                        >
                          {r.kategori}
                        </Badge>
                      </TableCell>
                      <TableCell>{r.altKategori}</TableCell>
                      <TableCell>
                        <Badge
                          className={`${getBadgeColor(
                            r.nakliyeDurumu
                          )} px-2 py-1 rounded-full text-sm`}
                        >
                          {r.nakliyeDurumu.toUpperCase()}
                        </Badge>
                      </TableCell>
                      <TableCell>{r.termin}</TableCell>
                      <TableCell>{r.odeme.toUpperCase()}</TableCell>
                      <TableCell>
                        <Link href={`/jobpool/${r.id}/detail`} passHref>
                          <Button
                            variant="link"
                            className="text-blue-500 hover:underline"
                          >
                            Görüntüle
                          </Button>
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Button
                          className="bg-green-500 text-white hover:bg-green-600 px-3 py-1 rounded-md shadow-sm"
                          onClick={() => handleOpenForm(r)}
                        >
                          Teklif Ver
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {showForm && selectedRequest && (
        <MakeAnOffer
          selectedRequest={selectedRequest}
          isOpen={showForm}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
}
