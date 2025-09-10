import React from "react";
import Constructions from "@/components/modules/new-build-construction/constructions";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Scroll from "@/components/layout/scroll";

export default function ConstructionsPage() {
  return (
    <div className="relative">
      <Navbar />
      <Constructions />
      <Footer />

      {/* Yukarı çık butonu */}
      <Scroll />
    </div>
  );
}
