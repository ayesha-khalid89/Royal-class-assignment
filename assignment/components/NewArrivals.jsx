import React from "react";
import styles from "./NewArrivals.module.css";

const NewArrivals = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <button className={styles.button}></button>
          <span className={styles.featured}>Featured</span>
        </div>

        <h2 className={styles.title}>New Arrival</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.largeItem}>
          <img
            src="Frame-739.svg"
            alt="PlayStation 5"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
