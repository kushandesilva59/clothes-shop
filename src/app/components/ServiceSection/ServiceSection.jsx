import React from 'react'
import styles from '../../styles/ServiceSection.module.css'


const ServiceSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative flex w-full justify-around">
      <div className={`${styles.serviceBox}`}>
        <img src="/delivery.png" alt="" />
        <p>Fast Delivery</p>
      </div>
      <div className={`${styles.serviceBox}`}>
        <img src="/card.png" alt="" />
        <p>Easy Payment</p>
      </div>
      <div className={`${styles.serviceBox}`}>
        <img src="/time.png" alt="" />
        <p>24/7 Availability</p>
      </div>
      <div className={`${styles.serviceBox}`}>
        <img src="/support.png" alt="" />
        <p>Customer Service</p>
      </div>
    </div>
  );
}

export default ServiceSection