import React from "react";
import Bedroom from "@/components/modules/room-renovation/bedroom";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Scroll from "@/components/layout/scroll";

export default function KitchenConstruction() {
  return (
    <div className="relative">
      <Navbar />
      <Bedroom />
      <Footer />

      {/* Yukarı çık butonu */}
      <Scroll />
    </div>
  );
}
