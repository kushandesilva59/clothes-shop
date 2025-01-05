'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Products from "./components/products/Products";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import CollectionSection from "./components/CollectionSection/CollectionSection";
import FeaturedCategoriesSection from "./components/FeaturedCategoriesSection/FeaturedCategoriesSection";
import DiscountBanner from "./components/DiscountBanner/DiscountBanner";

export default function Home() {


  const [page, setPage] = useState('');

  return (
    <div className="">
      <HeroSection />
      <ServiceSection />
      <CollectionSection/>
      <FeaturedCategoriesSection/>
      <DiscountBanner />
    </div>
  );
}
