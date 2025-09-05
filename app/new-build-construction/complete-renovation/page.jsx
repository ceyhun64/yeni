import React from "react";
import Complete from "@/components/modules/new-build-construction/complete";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Scroll from "@/components/layout/scroll";

export default function KitchenConstruction() {
  return (
    <div className="relative">
      <Navbar />
      <Complete />
      <Footer />

      {/* Yukarı çık butonu */}
      <Scroll />
    </div>
  );
}
