import React from 'react'
import styles from '../utils/CommonStyles.module.css';

const SectionHeading = (props) => {
    const { type } = props
  return (
    <div className={styles.section}>
        <button className={styles.button}></button>
        <span className={styles.type}>{type}</span>
    </div>
  )
}

export default SectionHeading
