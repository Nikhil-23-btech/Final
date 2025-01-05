import React, { useState, useEffect } from 'react';
import './style.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(cartItems);
  }, []);

  const handleRemove = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div className="view-cart">
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} width="100" height="100" />
            <div>{item.name} - ${item.price}</div>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="total">
        Total: ${cartItems.reduce((total, item) => total + item.price, 0)}
      </div>
    </div>
  );
}

export default Cart;
