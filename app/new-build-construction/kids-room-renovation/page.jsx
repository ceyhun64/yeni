import React from "react";
import KidsRoom from "@/components/modules/new-build-construction/kids-room";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Scroll from "@/components/layout/scroll";

export default function KitchenConstruction() {
  return (
    <div className="relative">
      <Navbar />
      <KidsRoom />
      <Footer />

      {/* Yukarı çık butonu */}
      <Scroll />
    </div>
  );
}
