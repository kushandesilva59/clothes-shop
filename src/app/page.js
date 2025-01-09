"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import CollectionSection from "./components/CollectionSection/CollectionSection";
import FeaturedCategoriesSection from "./components/FeaturedCategoriesSection/FeaturedCategoriesSection";
import DiscountBanner from "./components/DiscountBanner/DiscountBanner";
import DiscountedProductSection from "./components/DiscountedProductSection/DiscountedProductSection";
import MostViewSection from "./components/MostViewedSection/MostViewSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServiceSection />
      <CollectionSection />
      <FeaturedCategoriesSection />
      <DiscountBanner />
      <DiscountedProductSection />
      <MostViewSection />
    </div>
  );
}
