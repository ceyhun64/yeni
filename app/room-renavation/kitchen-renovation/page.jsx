import React from "react";
import Kitchen from "@/components/modules/room-renovation/kitchen";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Scroll from "@/components/layout/scroll";

export default function KitchenConstruction() {
  return (
    <div className="relative">
      <Navbar />
      <Kitchen />
      <Footer />

      {/* Yukarı çık butonu */}
      <Scroll />
    </div>
  );
}
