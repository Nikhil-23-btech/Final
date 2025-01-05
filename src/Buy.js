import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Buy = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleBuyNow = () => {
    // Add your logic to handle the purchase here
    console.log(`Product ${product.name} purchased using ${paymentMethod}!`);
    // You can redirect to a payment page or show a confirmation message
  };

  if (!product) {
    return <div>No product selected</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <h5>Price: {product.price}$</h5>
      <h3>Select Payment Method:</h3>
      <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="">Select</option>
        <option value="creditcard">Credit Card</option>
        <option value="debitcard">Debit Card</option>
        <option value="netbanking">Net Banking</option>
        <option value="byhand">By Hand</option>
      </select>
      <button onClick={handleBuyNow} disabled={!paymentMethod}>
        Buy Now
      </button>
    </div>
  );
};

export default Buy;
