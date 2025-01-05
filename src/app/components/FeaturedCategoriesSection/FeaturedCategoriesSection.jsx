import React from "react";
import styles from '../../styles/FeaturedSection.module.css'

import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});


const FeaturedCategoriesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative py-20">
      <h3 className={`${styles.title} py-7`}>Featured Collections</h3>

      <div className={`flex justify-evenly ${styles.featuredSection}`}>
        <div className="relative">
          <img src="/fashion.png" className="h-full" alt="" />
          <div className={`${styles.overlay}`}>Fashion</div>
        </div>

        <div className="grid gap-3">
          <div className="flex gap-3">
            <div className="relative">
              <img src="/toys.png" alt="" />
              <div className={`${styles.overlay} ${lato.className}`}>
                Babies & Toys
              </div>
            </div>
            <div className="relative">
              <img src="/health.png" alt="" />
              <div className={`${styles.overlay} ${lato.className}`}>
                Health & Beauty
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="relative">
              <img src="/electronic.png" alt="" />
              <div className={`${styles.overlay} ${lato.className}`}>
                Electronic Devices
              </div>
            </div>
            <div className="relative">
              <img src="/lifestyle.png" alt="" />
              <div className={`${styles.overlay} ${lato.className}`}>
                Home & Lifestyle
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategoriesSection;
