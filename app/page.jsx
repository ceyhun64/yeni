import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Heroes from "@/components/home/heroes";
import Gallery from "@/components/home/gallery";
import Request from "@/components/home/request";
import GridMotionBackgroundDemo from "@/components/home/banner";
import SocialMedia from "@/components/home/social-media";
import { FeaturedCategories } from "@/components/home/featuredProducts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Heroes />
      <Request />
            <FeaturedCategories />

      {/* <GridMotionBackgroundDemo /> */}
      <Gallery />
      <SocialMedia/>
      <Footer />
    </div>
  );
}
