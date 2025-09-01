import React from "react";
import RequestForm from "@/components/modules/request/requestForm";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Request() {
  return (
    <div>
      <Navbar />
      <RequestForm />
      <Footer />
    </div>
  );
}
