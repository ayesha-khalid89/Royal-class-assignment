'use client'
import React, { useState, useEffect } from 'react';
import styles from './Products.module.css';
import commonStyles from './utils/CommonStyles.module.css'
import SectionHeading from './common/SectionHeading';
import ViewAllProductsButton from './common/ViewAllProductsButton';
import ProductItem from './common/ProductItem';

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
    <div className={commonStyles.container}>
      <SectionHeading type={`Our Products`}/>
      <div className={commonStyles.header}>
        <h2>Explore Our Products</h2>
        <div className={styles.pagination}>
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>❮</button>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>❯</button>
        </div>
      </div>
      <div className={styles.productList}>
        {currentProducts.map((product) => {
              return <ProductItem key={product.id} product={product} isDiscount={false}/>
        })}
      </div>
      <ViewAllProductsButton />
    </div>
  );
};

export default ProductsSection;
