import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
        <Link href="/shop" className="shop-now-link">ShopNow</Link>
      </div>
      <div className="header-container">
        <div className="logo-nav">
          <Link href="/" className="logo">Royal Class</Link>
          <nav className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/signup" className="nav-link">Sign Up</Link>
          </nav>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="search-input"
          />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
