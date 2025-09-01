"use client";
import React, { useState } from "react";
import productsData from "@/seed/products.json";
import AdminSideBar from "../adminSideBar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { Package, Trash2, Edit3, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // input bileşeni için
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState([]);

  // 🔹 Filtre state'leri
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 10;

  // 🔹 Filtrelenmiş ürünler
  const filteredProducts = productsData.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSelect = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    const currentIds = displayedProducts.map((p) => p.id);
    const allSelected = currentIds.every((id) => selectedProducts.includes(id));
    setSelectedProducts((prev) =>
      allSelected
        ? prev.filter((id) => !currentIds.includes(id))
        : [...prev, ...currentIds]
    );
  };

  const handleDeleteSelected = () => {
    if (selectedProducts.length === 0) return;
    if (
      confirm(
        `Seçili ${selectedProducts.length} ürünü silmek istediğinize emin misiniz?`
      )
    ) {
      console.log("Silinecek ürünler:", selectedProducts);
      setSelectedProducts([]);
      // Burada API veya state ile silme işlemi yapılabilir
    }
  };

  const handleToggleDescription = (id) => {
    setExpandedDescriptions((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const handleDeleteSingle = (id) => {
    if (confirm(`Ürünü silmek istediğinize emin misiniz?`)) {
      console.log("Silinecek ürün:", id);
      setSelectedProducts((prev) => prev.filter((pid) => pid !== id));
    }
  };

  const handleUpdate = (id) => {
    router.push(`/admin/panel/products/${id}/update`);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sol Sidebar */}
      <div className="w-64 border-r">
        <AdminSideBar />
      </div>

      {/* Sağ İçerik */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Package className="w-6 h-6 text-primary" />
          Ürün Yönetimi
        </h1>

        {/* 🔹 Filtre Alanı */}

        <div className="flex flex-col md:flex-row gap-4 mb-6 w-full">
          {/* Sol buton */}
          <div>
            <Button
              variant="destructive"
              onClick={handleDeleteSelected}
              disabled={selectedProducts.length === 0}
              className="flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              {selectedProducts.length > 0
                ? `Seçili Ürünleri Sil (${selectedProducts.length})`
                : "Ürün Seç"}
            </Button>
          </div>

          {/* Sağ filtreler */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Arama kutusu */}
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Başlık veya açıklamada ara..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-64" // genişliği sabit tutmak için
              />
            </div>
          </div>
        </div>

        {/* CSS Grid ile Oluşturulmuş Başlık Satırı */}
        <div className="hidden md:grid grid-cols-[30px_50px_2fr_6fr_1fr_3fr_90px] gap-4 p-2 font-bold border-b-2 text-sm">
          <div>
            <input
              type="checkbox"
              checked={
                displayedProducts.length > 0 &&
                displayedProducts.every((p) => selectedProducts.includes(p.id))
              }
              onChange={handleSelectAll}
            />
          </div>
          <div>ID</div>
          <div>Başlık</div>
          <div>Açıklama</div>
          <div>Puan</div>
          <div>Görseller</div>
          <div className="text-center">İşlemler</div>
        </div>

        {/* Ürün Listesi */}
        <div className="flex flex-col gap-2">
          {displayedProducts.map((product) => {
            const isExpanded = expandedDescriptions.includes(product.id);
            const shortDesc =
              product.description.length > 70
                ? product.description.slice(0, 70) + "..."
                : product.description;

            return (
              <div
                key={product.id}
                className="grid grid-cols-[30px_50px_2fr_6fr_1fr_3fr_90px] gap-4 p-2 border-b items-center text-xs"
              >
                <div>
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => handleSelect(product.id)}
                  />
                </div>
                <div>{product.id}</div>
                <div>{product.title}</div>
                <div>
                  {isExpanded ? product.description : shortDesc}
                  {product.description.length > 70 && (
                    <button
                      onClick={() => handleToggleDescription(product.id)}
                      className=" underline ml-1"
                    >
                      {isExpanded ? "Gizle" : "Devamını Gör"}
                    </button>
                  )}
                </div>
                <div>{product.rate} ⭐</div>
                <div className="flex gap-2">
                  {[
                    product.image,
                    product.image2,
                    product.image3,
                    product.image4,
                  ].map(
                    (img, idx) =>
                      img && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={idx}
                          src={img}
                          alt={product.title}
                          className="w-10 h-10 object-cover rounded"
                        />
                      )
                  )}
                </div>
                <div className="flex gap-1 justify-center">
                  <Button
                    variant="destructive"
                    size="sm"
                    className="p-1"
                    onClick={() => handleDeleteSingle(product.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="p-1"
                    onClick={() => handleUpdate(product.id)}
                  >
                    <Edit3 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <Pagination className={"cursor-pointer"}>
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
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            />
          </Pagination>
        </div>
      </div>
    </div>
  );
}
