import React from "react";
import Salon from "@/components/modules/new-build-construction/salon";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Scroll from "@/components/layout/scroll";

export default function KitchenConstruction() {
  return (
    <div className="relative">
      <Navbar />
      <Salon />
      <Footer />

      {/* Yukarı çık butonu */}
      <Scroll />
    </div>
  );
}
