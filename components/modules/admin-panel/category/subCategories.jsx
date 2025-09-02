"use client";
import React, { useState } from "react";
import AdminSideBar from "../adminSideBar";
import categories from "@/seed/categories.json";
import subCategoriesData from "@/seed/subCategories.json"; // Varsa, yoksa boş array
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

export default function SubCategories() {
  const [subCategoryList, setSubCategoryList] = useState(
    subCategoriesData || []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [subName, setSubName] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [deleteSub, setDeleteSub] = useState(null); // Silinecek alt kategori
  const itemsPerPage = 10;

  const totalPages = Math.ceil(subCategoryList.length / itemsPerPage);
  const currentItems = subCategoryList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleEdit = (sub) => {
    setEditId(sub.id);
    setSubName(sub.name);
    setCategoryId(sub.categoryId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteConfirm = () => {
    if (!deleteSub) return;
    setSubCategoryList((prev) => prev.filter((sub) => sub.id !== deleteSub.id));
    if (editId === deleteSub.id) {
      setEditId(null);
      setSubName("");
      setCategoryId(null);
    }
    setDeleteSub(null); // Modal kapat
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subName.trim() || !categoryId) return;

    if (editId) {
      setSubCategoryList((prev) =>
        prev.map((sub) =>
          sub.id === editId ? { ...sub, name: subName, categoryId } : sub
        )
      );
    } else {
      const id = Date.now();
      setSubCategoryList([
        { id, name: subName, categoryId },
        ...subCategoryList,
      ]);
    }

    setEditId(null);
    setSubName("");
    setCategoryId(null);
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
              {editId ? "Alt Kategori Güncelle" : "Yeni Alt Kategori Oluştur"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="flex flex-col lg:flex-row gap-4"
              onSubmit={handleSubmit}
            >
              <Input
                placeholder="Alt kategori adı girin"
                value={subName}
                onChange={(e) => setSubName(e.target.value)}
                className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
              <Select
                value={categoryId !== null ? String(categoryId) : ""}
                onValueChange={(val) => setCategoryId(Number(val))}
                required
              >
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Ana kategori seçin" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={String(cat.id)}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                type="submit"
                className={`${
                  editId
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white`}
              >
                {editId ? "Güncelle" : "Oluştur"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Alt Kategoriler Tablosu */}
        <Card className="shadow-lg rounded-2xl border border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Alt Kategoriler
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse rounded-md">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 font-medium text-gray-700">ID</th>
                  <th className="p-3 font-medium text-gray-700">
                    Alt Kategori
                  </th>
                  <th className="p-3 font-medium text-gray-700">
                    Ana Kategori
                  </th>
                  <th className="p-3 font-medium text-gray-700 text-center">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((sub) => {
                  const parent = categories.find(
                    (cat) => cat.id === sub.categoryId
                  );
                  return (
                    <tr
                      key={sub.id}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-3 font-medium text-gray-800">
                        {sub.id}
                      </td>
                      <td className="p-3 text-gray-700">{sub.name}</td>
                      <td className="p-3 text-gray-700">
                        {parent ? parent.name : "-"}
                      </td>
                      <td className="p-3 flex justify-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(sub)}
                          className="flex items-center gap-1"
                        >
                          <Edit3 className="w-4 h-4" />
                        </Button>

                        {/* AlertDialog */}
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => setDeleteSub(sub)}
                              className="flex items-center gap-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Bu alt kategoriyi silmek istediğinize emin
                                misiniz?
                              </AlertDialogTitle>
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
                  );
                })}
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
