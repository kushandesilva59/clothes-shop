'use client'
import React, { useState } from 'react'
import Link from "next/link";

const Navbar = () => {


  

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 mr-3">
            <Link href="/" className="text-lg font-bold">
              BrandLogo
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-sm font-medium hover:text-gray-600">
              Home
            </Link>
            <Link
              href=""
              className="text-sm font-medium hover:text-gray-600"
            >
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
          <div className="flex-1 flex justify-center px-2 lg:ml-6">
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
          </div>

          {/* Sign-In Button */}
          <div className="flex items-center">
            <Link
              href="/signin"
              className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar