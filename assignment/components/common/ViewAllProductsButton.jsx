import React from 'react'
import styles from '../utils/CommonStyles.module.css';
const ViewAllProductsButton = ({shortText}) => {
  let text = 'View All Products'
  if(shortText) {
    text = 'View All'
  }
  return (
    <button className={styles.exploreButton}>{text}</button>
  )
}

export default ViewAllProductsButton
