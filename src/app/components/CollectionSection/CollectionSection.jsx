import React from "react";
import Image from "next/image"; // Use Next.js Image component
import { Lato, Public_Sans } from "next/font/google";
import styles from "../../styles/CollectionSection.module.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const collections = [
  { src: "/collection1.png", label: "Women Fashion" },
  { src: "/collection2.png", label: "Men Fashion" },
  { src: "/collection3.png", label: "Mobile Phones" },
  { src: "/collection4.png", label: "Airpods" },
  { src: "/collection5.png", label: "Women Handbags" },
  { src: "/collection6.png", label: "Headphones" },
  { src: "/collection7.png", label: "Shoes" },
  { src: "/collection8.png", label: "Watches" },
  { src: "/collection9.png", label: "Cosmetics" },
  { src: "/collection10.png", label: "Sunglasses" },
];

const CollectionSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative">
      <h3 className={`${publicSans.className} ${styles.title}`}>
        Our Collections
      </h3>
      <div
        className={`pt-6 grid grid-cols-5 grid-rows-2 justify-center gap-x-5 gap-y-10 ${lato.className}`}
      >
        {collections.map((collection, index) => (
          <div key={index}>
            <Image
              src={collection.src}
              alt={collection.label}
              width={220}
              height={300}
              className="mx-auto"
            />
            <p className="text-center mt-3">{collection.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionSection;
