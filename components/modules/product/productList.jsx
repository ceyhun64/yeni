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
    <div className="flex p-6 max-w-7xl mx-auto">
      {/* Sol Filtre */}
      <aside className="w-1/4 pr-6">
        <div className="sticky top-6">
          <ProductFilter />
        </div>
      </aside>

      {/* Sağ Ürün Listesi */}
      <main className="w-3/4 pl-8">
        <div className="flex justify-between items-center mb-6">
          <Select defaultValue="new">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sıralama" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">Yeni Ürünler</SelectItem>
              <SelectItem value="az">A-Z</SelectItem>
              <SelectItem value="most-viewed">En Çok İncelenenler</SelectItem>
            </SelectContent>
          </Select>

          {/* Grid Seçimi */}
          <div className="flex items-center space-x-2">
            {["grid-cols-2", "grid-cols-3", "grid-cols-4"].map((cols, idx) => (
              <div
                key={idx}
                className={`grid ${cols} gap-1 p-1 border rounded cursor-pointer hover:bg-gray-100 ${
                  gridCols === cols ? "bg-gray-200" : ""
                }`}
                onClick={() => setGridCols(cols)}
              >
                {Array.from({ length: parseInt(cols.split("-")[2]) }).map(
                  (_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 4h16v2H2zM2 8h16v2H2zM2 12h16v2H2z"></path>
                    </svg>
                  )
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={`grid ${gridCols} gap-4`}>
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Shadcn/ui Pagination */}
        <div className="flex justify-center mt-6">
          <Pagination>
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
      </main>
    </div>
  );
}
