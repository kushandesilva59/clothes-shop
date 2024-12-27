'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function Home() {


  const [page, setPage] = useState('');

  return (
    <div className="">
      <Navbar />
      
    </div>
  );
}
