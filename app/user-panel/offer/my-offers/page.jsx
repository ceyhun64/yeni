import React from "react";
import MyOffers from "@/components/modules/user-panel/offer/myOffers";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function page() {
  return (
    <div>
      <Navbar />
      <MyOffers />
      <Footer />
    </div>
  );
}
