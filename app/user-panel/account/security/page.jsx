import React from "react";
import Security from "@/components/modules/user-panel/account/security";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function SecurityPage() {
  return (
    <div>
      <Navbar />
      <Security />
      <Footer />
    </div>
  );
}
