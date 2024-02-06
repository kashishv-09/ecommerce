// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Adjust the path based on your file structure

const Header = ({ cartItems }) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <Link to="/">
        <h1>Product List</h1>
      </Link>
      <Link to="/cart">
        <div className="cart-icon">
          <span role="img" aria-label="cart">
            🛒
          </span>
          {totalItems > 0 && <span className="badge">{totalItems}</span>}
        </div>
      </Link>
    </header>
  );
};

export default Header;
