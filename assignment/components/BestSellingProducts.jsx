'use client'
import React, { useState, useEffect } from 'react';
import commonStyles from './utils/CommonStyles.module.css'
import SectionHeading from './common/SectionHeading';
import ProductItem from './common/ProductItem';
import ViewAllProductsButton from './common/ViewAllProductsButton';

const BestSellingProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then((response) => response.json())
        .then((data) => setProducts(data.slice(8, 12)));
    }, []);
    return (
        <div className={commonStyles.container}>
            <SectionHeading type={`This Month`}/>
            <div className={commonStyles.header}>
                <h2>Best Selling Products</h2>
                <ViewAllProductsButton shortText={true}/>
            </div>
            <div className={commonStyles.productList}>
                {products.map((product) => {
                  return <ProductItem key={product.id} product={product} isDiscount={false}/>
            })}
            </div>
        </div>
      );
}

export default BestSellingProducts
