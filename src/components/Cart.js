// components/Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <p>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
