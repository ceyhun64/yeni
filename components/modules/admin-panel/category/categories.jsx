"use client";
import React, { useState } from "react";
import AdminSideBar from "../adminSideBar";
import categoriesData from "@/seed/categories.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Edit3 } from "lucide-react";
import {
  Pagination,
  PaginationPrevious,
  PaginationNext,
  PaginationItem,
  PaginationLink,
  PaginationContent,
} from "@/components/ui/pagination";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Categories() {
  const [categoryList, setCategoryList] = useState(categoriesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [newCategory, setNewCategory] = useState("");
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [deleteCategory, setDeleteCategory] = useState(null); // Silinecek kategori
  const itemsPerPage = 10;

  const totalPages = Math.ceil(categoryList.length / itemsPerPage);
  const currentItems = categoryList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleEdit = (cat) => {
    setEditCategoryId(cat.id);
    setNewCategory(cat.name);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteConfirm = () => {
    if (!deleteCategory) return;
    setCategoryList((prev) =>
      prev.filter((cat) => cat.id !== deleteCategory.id)
    );
    if (editCategoryId === deleteCategory.id) {
      setEditCategoryId(null);
      setNewCategory("");
    }
    setDeleteCategory(null); // Modal kapat
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory.trim() === "") return;

    if (editCategoryId) {
      setCategoryList((prev) =>
        prev.map((cat) =>
          cat.id === editCategoryId ? { ...cat, name: newCategory } : cat
        )
      );
      setEditCategoryId(null);
      setNewCategory("");
    } else {
      const id = Date.now();
      setCategoryList([{ id, name: newCategory }, ...categoryList]);
      setNewCategory("");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 border-r bg-white shadow-sm">
        <AdminSideBar />
      </div>

      {/* İçerik */}
      <div className="flex-1 p-6">
        {/* Form */}
        <Card className="shadow-lg rounded-2xl border border-gray-200 mb-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {editCategoryId ? "Kategori Güncelle" : "Yeni Kategori Oluştur"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex gap-4" onSubmit={handleSubmit}>
              <Input
                placeholder="Kategori adı girin"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
              <Button
                type="submit"
                className={`${
                  editCategoryId
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white`}
              >
                {editCategoryId ? "Güncelle" : "Oluştur"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Tablo */}
        <Card className="shadow-lg rounded-2xl border border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Kategoriler</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse rounded-md">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 font-medium text-gray-700">ID</th>
                  <th className="p-3 font-medium text-gray-700">
                    Kategori Adı
                  </th>
                  <th className="p-3 font-medium text-gray-700 text-center">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((cat) => (
                  <tr
                    key={cat.id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-3 font-medium text-gray-800">{cat.id}</td>
                    <td className="p-3 text-gray-700">{cat.name}</td>
                    <td className="p-3 flex justify-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(cat)}
                        className="flex items-center gap-1"
                      >
                        <Edit3 className="w-4 h-4" />
                      </Button>

                      {/* Shadcn/UI AlertDialog */}
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="destructive"
                            size="sm"
                            className="flex items-center gap-1"
                            onClick={() => setDeleteCategory(cat)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Bu kategoriyi silmek istediğinize emin misiniz?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              Kategori silindikten sonra , bu kategoriye bağlı
                              alt kategoriler de silinecektir.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <div className="flex justify-end gap-2 mt-4">
                            <AlertDialogCancel>İptal</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDeleteConfirm}>
                              Sil
                            </AlertDialogAction>
                          </div>
                        </AlertDialogContent>
                      </AlertDialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <Pagination className="cursor-pointer">
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                />
                <PaginationContent>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        isActive={currentPage === i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                </PaginationContent>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                />
              </Pagination>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
