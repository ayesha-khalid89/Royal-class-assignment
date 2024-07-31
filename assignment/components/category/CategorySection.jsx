"use client"
import React, { useState, useEffect } from 'react';
import styles from './Category.module.css';
import SectionHeading from '../common/SectionHeading';
import commonStyles from '../utils/CommonStyles.module.css';

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 6;

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  // Get current categories
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={commonStyles.container}>
     <SectionHeading type={`Category`}/>
      <div className={commonStyles.header}>
        <h2>Browse By Category</h2>
        <div className={styles.pagination}>
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>❮</button>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(categories.length / categoriesPerPage)}>❯</button>
        </div>
      </div>
      <div className={styles.categoryList}>
        {currentCategories.map((category) => (
          <div key={category.id} className={styles.categoryItem}>
            <img src={category.image} alt={category.name} className={styles.categoryImage} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
