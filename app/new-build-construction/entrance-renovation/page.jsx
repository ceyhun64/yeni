import React from "react";
import Entrance from "@/components/modules/new-build-construction/entrance";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Scroll from "@/components/layout/scroll";

export default function KitchenConstruction() {
  return (
    <div className="relative">
      <Navbar />
      <Entrance />
      <Footer />

      {/* Yukarı çık butonu */}
      <Scroll />
    </div>
  );
}
