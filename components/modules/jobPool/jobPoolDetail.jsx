"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
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
import requests from "@/seed/requests.json";
import MakeAnOffer from "./makeAnOfferForm";

export default function JobPoolDetail() {
  const { id } = useParams();
  const request = requests.find((r) => r.id === id);

  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (!request) return <p>Talep bulunamadı.</p>;

  const handleOpenForm = (product) => {
    setSelectedProduct(product);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setSelectedProduct(null);
    setShowForm(false);
  };

  // Eğer birden fazla ürün varsa products dizisi olarak al, yoksa tek ürün ile oluştur
  const products = request.urunler ?? [
    {
      urunAdi: request.urunAdi,
      marka: request.marka,
      miktar: request.miktar,
      birim: request.birim,
      urunKullanimSektor: request.urunKullanimSektor,
      kategori: request.kategori,
    },
  ];

  const getBadgeColor = (value) => {
    switch (value.toLowerCase()) {
      case "dahil":
        return "bg-green-100 text-green-800";
      case "hariç":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <Card className="rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Talep Detayı - {request.id}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 dark:bg-gray-800">
                  <TableHead>Talep Tarihi</TableHead>
                  <TableHead>Talep Türü</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead>Ürün Adı</TableHead>
                  <TableHead>Marka</TableHead>
                  <TableHead>Miktar</TableHead>
                  <TableHead>Birim</TableHead>
                  <TableHead>Ürün Kullanım Sektör</TableHead>
                  <TableHead>Nakliye Durumu</TableHead>
                  <TableHead>Termin Tarihi</TableHead>
                  <TableHead>Ödeme Şekli</TableHead>
                  <TableHead>Teklif Ver</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {products.map((p, idx) => (
                  <TableRow
                    key={idx}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                  >
                    <TableCell>{request.tarih}</TableCell>
                    <TableCell>{request.talepTur}</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-50 text-blue-800 px-2 py-1 rounded-full text-sm">
                        {p.kategori}
                      </Badge>
                    </TableCell>
                    <TableCell>{p.urunAdi}</TableCell>
                    <TableCell>{p.marka}</TableCell>
                    <TableCell>{p.miktar}</TableCell>
                    <TableCell>{p.birim}</TableCell>
                    <TableCell>{p.urunKullanimSektor}</TableCell>
                    <TableCell>
                      <Badge
                        className={`${getBadgeColor(
                          request.nakliyeDurumu
                        )} px-2 py-1 rounded-full text-sm`}
                      >
                        {request.nakliyeDurumu.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell>{request.termin}</TableCell>
                    <TableCell>{request.odeme.toUpperCase()}</TableCell>
                    <TableCell>
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 shadow-sm"
                        onClick={() => handleOpenForm(p)}
                      >
                        Teklif Ver
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {showForm && selectedProduct && (
        <MakeAnOffer
          selectedRequest={selectedProduct}
          isOpen={showForm}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
}
