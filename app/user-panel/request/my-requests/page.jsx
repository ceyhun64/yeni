import React from "react";
import MyRequests from "@/components/modules/user-panel/request/myRequests";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function MyRequestsPage() {
  return (
    <div>
      <Navbar />
      <MyRequests />
      <Footer />
    </div>
  );
}
