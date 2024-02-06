// components/ProductList.js
import React, { useState, useEffect } from 'react';
import Product from './Product';

const ProductList = ({ products, onAddToCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleScroll = () => {
    const scrolledToBottom =
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;

    if (scrolledToBottom) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="product-list">
      {currentProducts.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}

      {products.length > productsPerPage && (
        <div className="pagination">
          {[...Array(Math.ceil(products.length / productsPerPage))].map((_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
