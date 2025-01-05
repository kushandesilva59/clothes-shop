import Image from 'next/image';
import React from 'react'
import styles from '../styles/HeroSection.module.css'
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"], // Optional: Choose subsets
  weight: ["400", "500", "700"], // Optional: Specify desired font weights
});


const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative h-auto">
      <div className="relative justify-center items-center hero-section">
        <div className="relative">
          <img src="/hero.jpg" alt="" width={"100%"} />
        </div>

        <div
          className={`${inter.className} text-white top-0 right-0 left-0 m-auto  absolute w-2/3 h-full flex flex-col self-center justify-center items-center `}
        >
          <h1 className={`${styles.title} mb-3`}>
            Shop Now and Save Big on Your Favorite Products!{" "}
          </h1>

          <p className={`${styles.subTitle} mb-5`}>
            Discover exclusive discounts on our top - rated products
          </p>
          <button
            className={`bg-black w-max  text-white py-3 px-6 ${styles.button}`}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection