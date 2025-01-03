'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Products from "./components/products/Products";
import HeroSection from "./components/HeroSection";

export default function Home() {


  const [page, setPage] = useState('');

  return (
    <div className="">
      <HeroSection />
    </div>
  );
}
