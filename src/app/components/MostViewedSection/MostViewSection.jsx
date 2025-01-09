import React from 'react'
import { Lato, Public_Sans } from 'next/font/google';
import styles from '../../styles/MostViewedSection.module.css'
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation"; 


const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const MostViewSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <h3 className={`${publicSans.className} ${styles.title}`}>Most Viewed</h3>

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
            <div>
              <img src="/most_view1.png" alt="" />
            </div>

            <div>
              <p className={`${styles.mostViewedName} ${lato.className}`}>
                Hair Dryer
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src="/most_view2.png" alt="" />
            </div>

            <div>
              <p className={`${styles.mostViewedName} ${lato.className}`}>
                Hair Dryer
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src="/most_view3.png" alt="" />
            </div>

            <div>
              <p className={`${styles.mostViewedName} ${lato.className}`}>
                Hair Dryer
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src="/most_view4.png" alt="" />
            </div>

            <div>
              <p className={`${styles.mostViewedName} ${lato.className}`}>
                Hair Dryer
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src="/most_view5.png" alt="" />
            </div>

            <div>
              <p className={`${styles.mostViewedName} ${lato.className}`}>
                Hair Dryer
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src="/most_view3.png" alt="" />
            </div>

            <div>
              <p className={`${styles.mostViewedName} ${lato.className}`}>
                Hair Dryer
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MostViewSection