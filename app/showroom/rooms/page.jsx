import React from "react";
import Rooms from "@/components/modules/showroom/rooms";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Scroll from "@/components/layout/scroll";

export default function RoomsPage() {
  return (
    <div className="relative">
      <Navbar />
      <Rooms />
      <Footer />

      {/* Yukarı çık butonu */}
      <Scroll />
    </div>
  );
}
