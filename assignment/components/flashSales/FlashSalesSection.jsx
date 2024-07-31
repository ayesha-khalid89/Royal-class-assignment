'use client'
import React, { useState, useEffect } from 'react';
import styles from './FlashSales.module.css';
import ViewAllProductsButton from '../common/ViewAllProductsButton';
import SectionHeading from '../common/SectionHeading';
import commonStyles from '../utils/CommonStyles.module.css'
import ProductItem from '../common/ProductItem';
const FlashSalesSection = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(6, 18))); // Take first 12 products for flash sales
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date('2024-08-04') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: 3, // Static value for days
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval, index) => (
    <div key={interval} className={styles.timerComponent}>
      <span className={styles.timerLabel}>{interval.charAt(0).toUpperCase() + interval.slice(1)}</span>
      <div className={styles.timerSubComponent}>
        <span className={styles.timerValue}>{timeLeft[interval]}</span>
        {index < 3 && <span className={styles.timerColon}>:</span>}
      </div>
    </div>
  ));

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={commonStyles.container}>
        <SectionHeading type={`Today's`}/>
        <div className={commonStyles.header}>
            <div className={styles.flashSale}>
                <h2>Flash Sales</h2>
                <div className={styles.timer}>
                {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                </div>
            </div>
            <div className={styles.pagination}>
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>❮</button>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>❯</button>
            </div>
        </div>
        <div className={styles.productList}>
            {currentProducts.map((product) => {
              return <ProductItem key={product.id} product={product} isDiscount={true}/>
        })}
        </div>
        <ViewAllProductsButton/>
    </div>
  );
};

export default FlashSalesSection;
