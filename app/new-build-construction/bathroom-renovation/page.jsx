import React from "react";
import Bathroom from "@/components/modules/new-build-construction/bathroom";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Scroll from "@/components/layout/scroll";

export default function KitchenConstruction() {
  return (
    <div className="relative">
      <Navbar />
      <Bathroom />
      <Footer />

      {/* Yukarı çık butonu */}
      <Scroll />
    </div>
  );
}
