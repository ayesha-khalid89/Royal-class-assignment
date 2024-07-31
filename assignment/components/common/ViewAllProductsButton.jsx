import React from 'react'
import styles from '../utils/CommonStyles.module.css';
const ViewAllProductsButton = ({shortText}) => {
  let text = 'View All Products'
  if(shortText) {
    text = 'View All'
  }
  return (
    <>
    {shortText && <button className={styles.exploreButton}>{text}</button>}
    {!shortText &&(
      <div className={styles.buttonContainer}>
        <button className={styles.exploreButton}>{text}</button>
      </div>
    )
    }
    </>
  )
}

export default ViewAllProductsButton
