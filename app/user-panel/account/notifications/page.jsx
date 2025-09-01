import React from "react";
import Notifications from "@/components/modules/user-panel/account/notifications";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function SecurityPage() {
  return (
    <div>
      <Navbar />
      <Notifications />
      <Footer />
    </div>
  );
}
