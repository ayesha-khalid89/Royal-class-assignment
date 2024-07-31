import Image from 'next/image';
import Link from 'next/link';

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
    <div className='container'>
    <nav className="navbar">
      <ul className="nav-list">
        {categories.map((category, index) => (
          <li key={index} className="nav-item">
            <Link href={`/${category.toLowerCase().replace(/ & |’| /g, '-')}`} className="nav-link">{category}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <div className='image' >
        <Image src="banner.svg" width={1200} height={400}/>
    </div>
    </div>

  );
};

export default Navbar;
