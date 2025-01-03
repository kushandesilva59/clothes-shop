'use client'
import React, { useState } from 'react'
import Link from "next/link";
import { FaBars, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa"; 
import {  FiSearch, FiShoppingBag, FiUser } from "react-icons/fi"; 

import { Petrona, Inter } from "next/font/google";

const petrona = Petrona({
  subsets: ["latin"],
  weight: ["400", "700"], // Customize weights
});

const inter = Inter({
  subsets: ["latin"], // Optional: Choose subsets
  weight: ["400", "500", "700"], // Optional: Specify desired font weights
});
const Navbar = () => {


  

  return (
    <nav className="relative w-full navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex ">
            <Link href="/" className={`${petrona.className} text-lg mr-4`}>
              BrandLogo
            </Link>
            <FaBars
              style={{
                fontSize: "24px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            />{" "}
          </div>

          {/* Navigation Links */}
          <div
            className={`${inter.className} hidden md:flex gap-12 space-x-10 `}
          >
            <Link href="/" className="text-sm font-medium hover:text-gray-600">
              Home
            </Link>
            <Link href="" className="text-sm font-medium hover:text-gray-600">
              About
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-gray-600"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-gray-600"
            >
              Contact
            </Link>
          </div>

          {/* Search Box */}
          {/* <div className="flex-1 flex justify-center px-2 lg:ml-6">
            <div className="max-w-lg w-full">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative text-gray-400 focus-within:text-gray-400">
                <input
                  id="search"
                  className="block w-full bg-gray-300 text-white rounded-md pl-10 pr-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-gray-600"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </div>
            </div>
          </div> */}

          {/* Sign-In Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-gray-600"
            >
              Become a Seller
            </Link>
            <FiSearch
              style={{
                fontSize: "24px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            />{" "}
            <FiShoppingBag
              style={{
                fontSize: "24px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            />{" "}
            <FiUser
              style={{
                fontSize: "24px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            />{" "}
            {/* <Link
              href="/signin"
              className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
            >
              Sign In
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar