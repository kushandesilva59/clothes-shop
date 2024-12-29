'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useState } from "react";
import HeroSection from "./components/HeroSection";

export default function Home() {


  const [page, setPage] = useState('');

  return (
    <div className="">
      <HeroSection />
    </div>
  );
}
