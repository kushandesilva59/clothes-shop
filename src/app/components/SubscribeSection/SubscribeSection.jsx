import React from "react";
import { Inter, Lato } from "next/font/google";
import styles from "../../styles/SubscribeSection.module.css";

const inter = Inter({
  subsets: ["latin"], // Optional: Choose subsets
  weight: ["400", "500", "700"], // Optional: Specify desired font weights
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const SubscribeSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
      SubscribeSection
      <div className="flex flex-col">
        <h4 className={`text-center ${styles.title} ${lato.className}`}>
          Subscribe to our newsletter to get updates to our latest collections
        </h4>

        <h6 className={`text-center ${styles.subTitle}`}>
          Get 20% off on your first order just by subscribing to our newsletter
        </h6>

        <div className="flex justify-between w-1/2">
          <div className={styles.inputWrapper}>
            <span className={styles.icon}>📧</span>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
            />
          </div>
          <button className={styles.button}>Subscribe</button>
        </div>

        <p>
          You will be able to unsubscribe at any time. Read our Privacy Policy
          here
        </p>
      </div>
    </div>
  );
};

export default SubscribeSection;
