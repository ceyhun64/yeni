import React from "react";
import PaymentHistory from "@/components/modules/user-panel/payment/paymentHistory";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function PaymentHistoryPage() {
  return (
    <div>
      <Navbar />
      <PaymentHistory />
      <Footer />
    </div>
  );
}
