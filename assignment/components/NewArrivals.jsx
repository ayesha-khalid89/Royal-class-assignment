import React from "react";
import styles from "./NewArrivals.module.css";
import commonStyles from './utils/CommonStyles.module.css'
import SectionHeading from "./common/SectionHeading";

const NewArrivals = () => {
  return (
    <div className={commonStyles.container}>
      <SectionHeading type={`Featured`}/>
      <div className={commonStyles.header}>
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
