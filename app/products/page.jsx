import React from "react";
import ProductList from "@/components/modules/product/productList";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
export default function Products() {
  return (
    <div>
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  );
}
