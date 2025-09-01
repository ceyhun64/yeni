import React from "react";
import MyOrders from "@/components/modules/user-panel/offer/myOrders";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function MyOrdersPage() {
  return (
    <div>
      <Navbar />
      <MyOrders />
      <Footer />
    </div>
  );
}
