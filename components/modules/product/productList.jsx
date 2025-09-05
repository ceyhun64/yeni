"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "./productCard";
import ProductFilter from "./productFilter";
import products from "../../../seed/products.json";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

export default function ProductList() {
  const [gridCols, setGridCols] = useState("grid-cols-3");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex p-6 max-w-7xl mx-auto gap-8">
      {/* Sol Filtre */}
      <aside className="w-1/4">
        <div className="sticky top-6">
          <ProductFilter />
        </div>
      </aside>

      {/* Sağ Ürün Listesi */}
      <main className="w-3/4 flex flex-col gap-6">
        {/* Üst Kontroller */}
        <div className="flex justify-between items-center">
          <Select defaultValue="new">
            <SelectTrigger className="w-[180px] border border-gray-300 rounded-md shadow-sm hover:shadow-md transition">
              <SelectValue placeholder="Sıralama" />
            </SelectTrigger>
            <SelectContent className="rounded-md shadow-lg border border-gray-200">
              <SelectItem value="new">Yeni Ürünler</SelectItem>
              <SelectItem value="az">A-Z</SelectItem>
              <SelectItem value="most-viewed">En Çok İncelenenler</SelectItem>
            </SelectContent>
          </Select>

          {/* Grid Seçimi */}
          <div className="flex items-center gap-2">
            {["grid-cols-2", "grid-cols-3", "grid-cols-4"].map((cols, idx) => (
              <button
                key={idx}
                className={`flex gap-1 p-2 border rounded-md transition ${
                  gridCols === cols
                    ? "bg-gray-100 border-gray-400"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
                onClick={() => setGridCols(cols)}
              >
                {Array.from({ length: parseInt(cols.split("-")[2]) }).map(
                  (_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-gray-400 rounded-sm"
                    ></div>
                  )
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Ürün Grid */}
        <div className={`grid ${gridCols} gap-6`}>
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <Pagination className="flex gap-1">
            <PaginationPrevious
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 transition"
            />
            <PaginationContent className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={currentPage === i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded-md border border-gray-300 transition ${
                      currentPage === i + 1
                        ? "bg-gray-100 border-gray-400"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
            <PaginationNext
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 transition"
            />
          </Pagination>
        </div>
      </main>
    </div>
  );
}
