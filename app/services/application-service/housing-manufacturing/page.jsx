import React from "react";
import HousingManufacturing from "@/components/modules/services/housing-manufacturing";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function ApplicationServicePage() {
  return (
    <>
      <Navbar />
      <HousingManufacturing />
      <Footer />
    </>
  );
}
