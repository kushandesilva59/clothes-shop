import React from "react";

import {Lato,Public_Sans} from 'next/font/google'
import styles from '../../styles/CollectionSection.module.css'


const lato = Lato({
  subsets: ["latin"], // Choose subsets you need
  weight: ["400", "700"], // Add desired font weights
  style: ["normal", "italic"], // Add styles if needed
});

const publicSans = Public_Sans({
  subsets: ["latin"], // Add subsets as required
  weight: ["300", "400", "500", "600", "700"], // Add desired weights
  style: ["normal", "italic"], // Add styles if needed
});

const CollectionSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative">
      <h3 className={`${publicSans.className} ${styles.title}`}>Our Collections</h3>
      <div
        className={`pt-6 grid grid-cols-5 grid-rows-2 justify-center gap-x-5 gap-y-10 ${lato.className}`}
      >
        <div className="">
          <img src="/collection1.png" alt="" />
          <p className="text-center mt-3">Women Fashion</p>
        </div>
        <div>
          <img src="/collection2.png" alt="" />
          <p className="text-center mt-3">Men Fashion</p>
        </div>
        <div>
          <img src="/collection3.png" alt="" />
          <p className="text-center mt-3">Mobile Phones</p>
        </div>
        <div>
          <img src="/collection4.png" alt="" />
          <p className="text-center mt-3">Airpods</p>
        </div>
        <div>
          <img src="/collection5.png" alt="" />
          <p className="text-center mt-3">Women Handbags</p>
        </div>
        <div>
          <img src="/collection6.png" alt="" />
          <p className="text-center mt-3">Headphones</p>
        </div>
        <div>
          <img src="/collection7.png" alt="" />
          <p className="text-center mt-3">Shoes</p>
        </div>
        <div>
          <img src="/collection8.png" alt="" />
          <p className="text-center mt-3">Watches</p>
        </div>
        <div>
          <img src="/collection9.png" alt="" />
          <p className="text-center mt-3">Cosmetics</p>
        </div>
        <div>
          <img src="/collection10.png" alt="" />
          <p className="text-center mt-3">Sunglasses</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
