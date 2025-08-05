import React from 'react'; 
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaGithub } from 'react-icons/fa'; // GitHub Icon

const Header = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">ShoppyGlobe</Link>
      </h1>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>

        {/* GitHub Icon Link */}
        <a
          href="https://github.com/Ishfaqmir1/ShoppyGlobe-E-commerce-Application.git"
          target="_blank"
          rel="noopener noreferrer"
          className="github-icon"
          title="View on GitHub"
        >
          <FaGithub size={24} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
