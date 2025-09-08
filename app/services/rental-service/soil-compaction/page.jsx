import React from "react";
import SoilCompaction from "@/components/modules/services/soil";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function ExcavationPage() {
  return (
    <>
      <Navbar />
      <SoilCompaction />
      <Footer />
    </>
  );
}
