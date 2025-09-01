"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AdminSideBar from "../adminSideBar";
import categories from "@/seed/categories.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Edit3 } from "lucide-react";

export default function Categories() {
  const router = useRouter();
  const [categoryList, setCategoryList] = useState(categories);

  const handleDelete = (id) => {
    if (confirm("Bu kategoriyi silmek istediğinize emin misiniz?")) {
      console.log("Silinecek kategori:", id);
      setCategoryList((prev) => prev.filter((cat) => cat.id !== id));
    }
  };

  const handleUpdate = (id) => {
    router.push(`/admin/panel/categories/${id}/update`);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sol Sidebar */}
      <div className="w-64 border-r bg-white">
        <AdminSideBar />
      </div>

      {/* Sağ İçerik */}
      <div className="flex-1 p-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Kategoriler</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2 font-medium">ID</th>
                  <th className="p-2 font-medium">Kategori Adı</th>
                  <th className="p-2 font-medium text-center">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {categoryList.map((cat) => (
                  <tr key={cat.id} className="border-b hover:bg-gray-100">
                    <td className="p-2">{cat.id}</td>
                    <td className="p-2">{cat.name}</td>
                    <td className="p-2 flex justify-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleUpdate(cat.id)}
                        className="flex items-center gap-1"
                      >
                        <Edit3 className="w-4 h-4" /> Güncelle
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(cat.id)}
                        className="flex items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" /> Sil
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
