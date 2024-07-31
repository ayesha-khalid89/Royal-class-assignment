import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.exclusive}>Exclusive</h3>
          <p className={styles.subscribe}>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Enter your email" />
            <button>➤</button>
          </div>
        </div>
        <div className={styles.section}>
          <h3>Support</h3>
          <p>21st Floor, The Binary Tower, Marasi Drive, Business bay, Dubai</p>
          <p>info@royalclass.group</p>
          <p>+971 42 408 999</p>
        </div>
        <div className={styles.section}>
          <h3>Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className={styles.section}>
          <h3>Quick Link</h3>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className={styles.section}>
          <h3>Download App</h3>
          <div className={styles.qr}>
            <img src="Frame-720.svg" alt="Google Play" />
          </div>
          <div className={styles.social}>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © Copyright{" "}
        <a href="https://royalclass.group" className={styles.link}>
          Royal Class Group
        </a>{" "}
        2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
