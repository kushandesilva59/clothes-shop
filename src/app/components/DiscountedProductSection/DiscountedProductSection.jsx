'use client'
import React from "react";
import { Swiper, SwiperSlide, Autoplay } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from '../../styles/DiscountedProductSection.module.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles

import { Inter, Public_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"], // Optional: Choose subsets
  weight: ["400", "500", "700"], // Optional: Specify desired font weights
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});


const DiscountedProductSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative py-10">
      <h3 className={`${styles.title} ${publicSans.className}`}>
        Discounted Products
      </h3>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={5}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // When the window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // When the window width is >= 1024px
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <div>
            <div className="relative">
              <img src="/discount1.png" alt="Slide 3" />
              <div
                className={`absolute top-0 left-0 py-1 px-2 text-white rounded-md ${styles.discountLabel}`}
              >
                <p>-55%</p>
              </div>

              <div
                className={`flex justify-start pt-2 items-center gap-2 ${styles.discountPriceWrapper}  ${inter.className}`}
              >
                <p className={styles.discountPrice}>LKR.10,141.29</p>
                <p className={styles.originalPrice}>LKR.22,141.29</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative">
              <img src="/discount2.png" alt="Slide 3" />
              <div
                className={`absolute top-0 left-0 py-1 px-2 text-white rounded-md ${styles.discountLabel}`}
              >
                <p>-55%</p>
              </div>

              <div
                className={`flex justify-start pt-2 items-center gap-2 ${styles.discountPriceWrapper} ${inter.className}`}
              >
                <p className={styles.discountPrice}>LKR.10,141.29</p>
                <p className={styles.originalPrice}>LKR.22,141.29</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative">
              <img src="/discount3.png" alt="Slide 3" />
              <div
                className={`absolute top-0 left-0 py-1 px-2 text-white rounded-md ${styles.discountLabel}`}
              >
                <p>-55%</p>
              </div>

              <div
                className={`flex justify-start pt-2 items-center gap-2 ${styles.discountPriceWrapper} ${inter.className}`}
              >
                <p className={styles.discountPrice}>LKR.10,141.29</p>
                <p className={styles.originalPrice}>LKR.22,141.29</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative">
              <img src="/discount4.png" alt="Slide 3" />
              <div
                className={`absolute top-0 left-0 py-1 px-2 text-white rounded-md ${styles.discountLabel}`}
              >
                <p>-55%</p>
              </div>

              <div
                className={`flex justify-start pt-2 items-center gap-2 ${styles.discountPriceWrapper} ${inter.className}`}
              >
                <p className={styles.discountPrice}>LKR.10,141.29</p>
                <p className={styles.originalPrice}>LKR.22,141.29</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative">
              <img src="/discount5.png" alt="Slide 3" />
              <div
                className={`absolute top-0 left-0 py-1 px-2 text-white rounded-md ${styles.discountLabel}`}
              >
                <p>-55%</p>
              </div>

              <div
                className={`flex justify-start pt-2 items-center gap-2 ${styles.discountPriceWrapper} ${inter.className}`}
              >
                <p className={styles.discountPrice}>LKR.10,141.29</p>
                <p className={styles.originalPrice}>LKR.22,141.29</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative">
              <img src="/discount1.png" alt="Slide 3" />
              <div
                className={`absolute top-0 left-0 py-1 px-2 text-white rounded-md ${styles.discountLabel}`}
              >
                <p>-55%</p>
              </div>

              <div
                className={`flex justify-start pt-2 items-center gap-2 ${styles.discountPriceWrapper} ${inter.className}`}
              >
                <p className={styles.discountPrice}>LKR.10,141.29</p>
                <p className={styles.originalPrice}>LKR.22,141.29</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DiscountedProductSection;
