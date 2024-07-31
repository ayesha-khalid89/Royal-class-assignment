import React from 'react'
import styles from './ProductItem.module.css';
const ProductItem = ({product, isDiscount}) => {
    let discountedPrice = 0;
    if(isDiscount) {
        discountedPrice = product.price * 0.75;
    }
  return (
        <div className={styles.productItem}>
            {isDiscount && <span className={styles.discountBadge}>-25%</span>}
            <div className={styles.actionButtonContainer}>
            <button className={styles.heartButton}>
                <img src="fill-heart.svg" alt="Heart" width={34} height={34} />
            </button>
            <button className={styles.heartButton}>
                <img src="fill-eye.svg" alt="Eye" width={34} height={34} />
            </button>
            </div>
            <img src={product.images[0]} alt={product.title} className={styles.productImage} />
            <p>{product.title}</p>
            <div className={styles.priceContainer}>
                {isDiscount && 
                    <>
                        <span className={styles.discountedPrice}>${discountedPrice.toFixed(2)}</span>
                        <span className={styles.originalStrikedPrice}>${product.price}</span>
                    </>
                }
                {!isDiscount && <span className={styles.originalStrikedPrice}>${product.price}</span>}
            </div>
            <div className={styles.rating}>
            {Array(5)
                .fill(0)
                .map((_, index) => (
                <span key={index} className={styles.ratingStar}>★</span>
                ))}
            </div>
            <button className={styles.addToCartButton}>Add To Cart</button>
        </div>
    );
}

export default ProductItem
