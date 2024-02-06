// components/Home.js
import React from 'react';
import ProductList from './ProductList';

const Home = ({ products, onAddToCart }) => {
  return (
    <div className="home">
      <h2>Product List</h2>
      <ProductList products={products} onAddToCart={onAddToCart} />
    </div>
  );
};

export default Home;
