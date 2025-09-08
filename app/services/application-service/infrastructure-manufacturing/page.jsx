import React from "react";
import InfastructureManufacturing from "@/components/modules/services/infrastructure-manufacturing";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function ApplicationServicePage() {
  return (
    <>
      <Navbar />
      <InfastructureManufacturing />
      <Footer />
    </>
  );
}
