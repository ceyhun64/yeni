import React from "react";
import Toilet from "@/components/modules/new-build-construction/toilet";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Scroll from "@/components/layout/scroll";

export default function KitchenConstruction() {
  return (
    <div className="relative">
      <Navbar />
      <Toilet />
      <Footer />

      {/* Yukarı çık butonu */}
      <Scroll />
    </div>
  );
}
