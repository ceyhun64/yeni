import React from "react";
import IndustrialManufacturing from "@/components/modules/services/industrial-manufacturing";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function ApplicationServicePage() {
  return (
    <>
      <Navbar />
      <IndustrialManufacturing />
      <Footer />
    </>
  );
}
