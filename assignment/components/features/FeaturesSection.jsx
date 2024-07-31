// components/FeaturesSection.js

import React from 'react';
import styles from './FeaturesSection.module.css';

const FeaturesSection = () => {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featureItem}>
        <div className={styles.iconWrapper}>
          <img src="delivery.svg" alt="Free and Fast Delivery" className={styles.iconImage} />
        </div>
        <h3 className={styles.title}>FREE AND FAST DELIVERY</h3>
        <p className={styles.description}>Free delivery for all orders over $140</p>
      </div>
      <div className={styles.featureItem}>
        <div className={styles.iconWrapper}>
          <img src="Services.svg" alt="24/7 Customer Service" className={styles.iconImage} />
        </div>
        <h3 className={styles.title}>24/7 CUSTOMER SERVICE</h3>
        <p className={styles.description}>Friendly 24/7 customer support</p>
      </div>
      <div className={styles.featureItem}>
        <div className={styles.iconWrapper}>
          <img src="guarantee.svg" alt="Money Back Guarantee" className={styles.iconImage} />
        </div>
        <h3 className={styles.title}>MONEY BACK GUARANTEE</h3>
        <p className={styles.description}>We return money within 30 days</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
