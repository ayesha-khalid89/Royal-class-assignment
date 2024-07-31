'use client'
import React, { useState, useEffect } from 'react';
import styles from './Products.module.css';

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Explore Our Products</h2>
        <div className={styles.pagination}>
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>❮</button>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>❯</button>
        </div>
      </div>
      <div className={styles.productList}>
        {currentProducts.map((product) => (
          <div key={product.id} className={styles.productItem}>
            <img src={product.images[0]} alt={product.title} className={styles.productImage} />
            <p>{product.title}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
        ))}
      </div>
      <button className={styles.exploreButton}>View All Products</button>
    </div>
  );
};

export default ProductsSection;
