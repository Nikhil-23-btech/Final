import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const getEmailFromURL = () => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get('email');
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(cartItems);
  }, []);
  const handleRemove = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };
  const handleSubmitCart = async () => {
    const email = getEmailFromURL();
    if (!email) {
      alert("No email found in the URL.");
      return;
    }

    const cartData = { email, cartItems };

    try {
      const response = await fetch('http://localhost:3000/store-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartData),
      });

      if (response.ok) {
        alert('Cart items saved successfully!');
      } else {
        alert('Failed to save cart items.');
      }
    } catch (error) {
      console.error('Error storing cart items:', error);
      alert('An error occurred while saving your cart items.');
    }
  };

  return (
    <div className="view-cart">
      <h2>Cart Items</h2>
      <table className="cart-table" border="1px">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} width="100" height="100" />
                <span>{item.name}</span>
              </td>
              <td>${item.price}</td>
              <td>1</td> {}
              <td>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        Total: ${cartItems.reduce((total, item) => total + item.price, 0)}
      </div>
      <button onClick={handleSubmitCart}>Save Cart</button>
    </div>
  );
}

export default Cart;
