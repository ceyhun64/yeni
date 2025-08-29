"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "./productCard"; // Kendi oluşturduğunuz ProductCard bileşeniniz
import ProductFilter from "./productFilter";
import ProductPagination from "./productPagination";
import products from "../../../seed/products.json";

export default function ProductList() {
  // Grid kolon sayısını yönetmek için state
  const [gridCols, setGridCols] = useState("grid-cols-3");
  const [currentPage, setCurrentPage] = useState(1);

  // Veritabanı veya API'den gelecek örnek ürün verisi

  const itemsPerPage = 20;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Gösterilecek ürünleri slice ile al
  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex p-6 max-w-7xl mx-auto">
      <aside className="w-1/4 pr-6">
        <div className="sticky top-6">
          <ProductFilter />
        </div>
      </aside>{" "}
      {/* Sağ Taraftaki Ürün Listesi */}
      <main className="w-3/4 pl-8">
        <div className="flex justify-between items-center mb-6">
          <Select defaultValue="new">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sıralama" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">Yeni Ürünler</SelectItem>
              <SelectItem value="az">A-Z</SelectItem>
              <SelectItem value="price-asc">Artan Fiyat</SelectItem>
              <SelectItem value="price-desc">Azalan Fiyat</SelectItem>
              <SelectItem value="most-viewed">En Çok İncelenenler</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center space-x-2">
            {/* 2'li görünüm butonu */}
            <div
              className={`grid grid-cols-2 gap-1 p-1 border rounded cursor-pointer hover:bg-gray-100 ${
                gridCols === "grid-cols-2" ? "bg-gray-200" : ""
              }`}
              onClick={() => setGridCols("grid-cols-2")}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 4h16v2H2zM2 8h16v2H2zM2 12h16v2H2z"></path>
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 4h16v2H2zM2 8h16v2H2zM2 12h16v2H2z"></path>
              </svg>
            </div>
            {/* 3'lü görünüm butonu */}
            <div
              className={`grid grid-cols-3 gap-1 p-1 border rounded cursor-pointer hover:bg-gray-100 ${
                gridCols === "grid-cols-3" ? "bg-gray-200" : ""
              }`}
              onClick={() => setGridCols("grid-cols-3")}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 4h16v2H2zM2 8h16v2H2zM2 12h16v2H2z"></path>
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 4h16v2H2zM2 8h16v2H2zM2 12h16v2H2z"></path>
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 4h16v2H2zM2 8h16v2H2zM2 12h16v2H2z"></path>
              </svg>
            </div>
            {/* 4'lü görünüm butonu */}
            <div
              className={`grid grid-cols-4 gap-1 p-1 border rounded cursor-pointer hover:bg-gray-100 ${
                gridCols === "grid-cols-4" ? "bg-gray-200" : ""
              }`}
              onClick={() => setGridCols("grid-cols-4")}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 4h16v2H2zM2 8h16v2H2zM2 12h16v2H2z"></path>
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 4h16v2H2zM2 8h16v2H2zM2 12h16v2H2z"></path>
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 4h16v2H2zM2 8h16v2H2zM2 12h16v2H2z"></path>
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 4h16v2H2zM2 8h16v2H2zM2 12h16v2H2z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className={`grid ${gridCols} gap-4`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <ProductPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />{" "}
      </main>
    </div>
  );
}
