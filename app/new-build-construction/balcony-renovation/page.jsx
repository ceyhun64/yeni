import React from "react";
import Balcony from "@/components/modules/new-build-construction/balcony";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Scroll from "@/components/layout/scroll";

export default function KitchenConstruction() {
  return (
    <div className="relative">
      <Navbar />
      <Balcony />
      <Footer />
      {/* Yukarı çık butonu */}
      <Scroll />
    </div>
  );
}
