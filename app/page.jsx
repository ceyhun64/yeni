import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Heroes from "@/components/modules/home/heroes";
import Gallery from "@/components/modules/home/gallery";
import Request from "@/components/modules/home/request";
import GridMotionBackgroundDemo from "@/components/modules/home/banner";
import SocialMedia from "@/components/modules/home/social-media";
import { FeaturedCategories } from "@/components/modules/home/featuredCategories";
import Services from "@/components/modules/home/services";
import Subscribe from "@/components/modules/home/subscribe";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Heroes />
      <Request />
      <Services />
      <FeaturedCategories />
      {/* <GridMotionBackgroundDemo /> */}
      <SocialMedia />

      <Gallery />
      <Subscribe />
      <Footer />
    </div>
  );
}
