// components/Product.js
import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
