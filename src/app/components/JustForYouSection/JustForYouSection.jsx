import React from 'react'
import styles from '../../styles/JustForYou.module.css'
import { Lato, Public_Sans } from 'next/font/google';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"], // Optional: Choose subsets
  weight: ["400", "500", "700"], // Optional: Specify desired font weights
});


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

const collections = [
  { src: "/just1.png", label: "Waterproof Steel Watch for Men", price: 25 },
  { src: "/just2.png", label: "IHOT Retro Floral Dress for Women", price: 30 },
  { src: "/just3.png", label: "Kawaii Hoodie", price: 200 },
  { src: "/just4.png", label: "Soundcore Wireless Headphones", price: 150 },
  { src: "/just5.png", label: "USB Mouse M20 for Laptops and PC", price: 45 },
  { src: "/just6.png", label: "Men’s Premium Polo T-shirt", price: 60 },
  { src: "/just7.png", label: "Huawei MatePad T10s", price: 50 },
  { src: "/just8.png", label: "Bright Boost Night Cream 50ml", price: 120 },
  {
    src: "/just9.png",
    label: "Star Master Dream Rotating Projection Lamp",
    price: 20,
  },
  { src: "/just10.png", label: "Mac Mini Mac Lipstick", price: 35 },
];


const JustForYouSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative py-10">
      <h3 className={`${styles.title} ${publicSans.className}`}>
        Just for you
      </h3>

      <div
        className={`pt-6 grid lg:grid-cols-5 lg:grid-rows-2 sm:grid-cols-3 justify-center gap-x-5 gap-y-10 ${styles.collectionSection} ${lato.className}`}
      >
        {collections.map((collection, index) => (
          <div
            key={index}
            className={`border  relative rounded-md ${inter.className}`}
          >
            <div
              className={`absolute m-3 px-2 py-1 rounded-md ${styles.discountLabel} text-white`}
            >
              <p>10%</p>
            </div>

            <Image
              src={collection.src}
              alt={collection.label}
              width={220}
              height={300}
              className="mx-auto"
            />
            <div className={styles.cardBottom}>
              <div className="px-3">
                <p className="">{collection.label}</p>
              </div>

              <div className="flex items-center justify-between px-3 pb-3">
                <div className="flex">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
                </div>

                <div>
                  <p>LKR. {collection.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JustForYouSection