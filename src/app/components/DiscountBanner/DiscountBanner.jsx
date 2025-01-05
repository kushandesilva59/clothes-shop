import Image from 'next/image';
import React from 'react'
import { Lato } from 'next/font/google';
import styles from '../../styles/DiscountBanner.module.css'

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const DiscountBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex justify-center">
      <div
        className={`flex items-center justify-between lg:w-2/3 w-3/4 ${lato.className} ${styles.discountBox}`}
      >
        <div>
          <Image
            src={"/discount.png"}
            width={460}
            height={300}
            alt="discount_image"
          />
        </div>
        <div className={`flex flex-col items-start px-5 ${styles.label}`}>
          <p className={styles.subtitle}>Limited offer</p>
          <h6 className={styles.title}>
            50% off only this week and get special gift
          </h6>
          <button className={styles.button}>Grab it now</button>
        </div>
      </div>
    </div>
  );
}

export default DiscountBanner