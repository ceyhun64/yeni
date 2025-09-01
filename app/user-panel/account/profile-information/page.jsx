import React from "react";
import ProfileInformation from "@/components/modules/user-panel/account/profileInformation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function ProfileInformationPage() {
  return (
    <div>
      <Navbar />
      <ProfileInformation />
      <Footer />
    </div>
  );
}
