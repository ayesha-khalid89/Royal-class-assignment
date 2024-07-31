import React from 'react'
import styles from "./ImageDisplay.module.css";

const ImageDisplay = () => {
  return (
    <div className={styles.image}>
        <img src="Frame-600.svg" alt="image"  className={styles.image}/>
    </div>
  )
}

export default ImageDisplay