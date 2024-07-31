import Link from 'next/link';
import styles from './Navbar.module.css'
const Navbar = () => {
  const categories = [
    'Woman’s Fashion',
    'Men’s Fashion',
    'Electronics',
    'Home & Lifestyle',
    'Medicine',
    'Sports & Outdoor',
    'Baby’s & Toys',
    'Groceries & Pets',
    'Health & Beauty',
  ];

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.navlist}>
          {categories.map((category, index) => {
            return(
              <div className={styles.navlistitem}>
                <li key={index} className={styles.navitem}>
                  <Link href={`/${category.toLowerCase().replace(/ & |’| /g, '-')}`} className={styles.navlink}>{category}</Link>
                  <img src='arrow.svg'/>
                </li>
              </div>
            )
          })}
        </ul>
      </nav>
      <div className={styles.imageContainer} >
          <img src="banner.svg" className={styles.image}/>
      </div>
    </div>

  );
};

export default Navbar;
