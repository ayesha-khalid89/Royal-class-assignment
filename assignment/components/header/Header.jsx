import Link from 'next/link';
import styles from './Header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
        <Link href="/shop" className={styles.shopnowlink}>ShopNow</Link>
      </div>
      <div className={styles.headercontainer}>
        <div className={styles.logonav}>
          <Link href="/" className={styles.logo}>Royal Class</Link>
          <nav className={styles.navlinks}>
            <Link href="/" className={styles.navlink}>Home</Link>
            <Link href="/contact" className={styles.navlink}>Contact</Link>
            <Link href="/about" className={styles.navlink}>About</Link>
            <Link href="/signup" className={styles.navlink}>Sign Up</Link>
          </nav>
        </div>
        <div className={styles.searchcontainer}>
          <div className={styles.searchcontainer}>
            <input
              type="text"
              placeholder="What are you looking for?"
              className={styles.searchinput}
            />
            <button className={styles.searchbutton}>
              <img src='search.svg' width={24} height={24}/>
            </button>
          </div>
          <button className={styles.searchbutton}>
              <img src='wishlist.svg' width={24} height={24}/>
          </button>
          <button className={styles.searchbutton}>
              <img src='cart.svg' width={24} height={24}/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
