import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Heroes from "@/components/modules/home/heroes";
import Gallery from "@/components/modules/home/gallery";
import Request from "@/components/modules/home/request";
import GridMotionBackgroundDemo from "@/components/modules/home/banner";
import SocialMedia from "@/components/modules/home/social-media";
import { FeaturedCategories } from "@/components/modules/home/featuredCategories";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Heroes />
      <Request />
      <FeaturedCategories />
      {/* <GridMotionBackgroundDemo /> */}
      <Gallery />
      <SocialMedia />
      <Footer />
    </div>
  );
}
