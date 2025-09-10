import React from "react";
import LivingRoom from "@/components/modules/room-renovation/livingroom";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Scroll from "@/components/layout/scroll";

export default function KitchenConstruction() {
  return (
    <div className="relative">
      <Navbar />
      <LivingRoom />
      <Footer />

      {/* Yukarı çık butonu */}
      <Scroll />
    </div>
  );
}
