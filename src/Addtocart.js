import React, { useState, useEffect } from 'react';
import './style.css';

function AddToCart({ product }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(cartItems);
    setCartCount(cartItems.length);
  }, []);

  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setCartCount(updatedCartItems.length);
    alert(product.name + " added to cart!");
  };

  return (
    <div className="add-to-cart">
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default AddToCart;
