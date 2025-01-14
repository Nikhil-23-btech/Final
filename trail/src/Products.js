import React from 'react';

function Products({ addToCart }) {
  const products = [
    { id: 1, name: 'Graphic card rtx 4070', image: 'photos/graphic.jpg', price: 490 },
    { id: 2, name: 'Iphone 16 pro max', image: 'photos/iphone1.jpg', price: 100 },
    { id: 3, name: 'Macbook Air M1', image: 'photos/macbookM1.jpg', price: 200 },
    { id: 4, name: 'One plus 12R', image: 'photos/oneplus.jpg', price: 300 },
    { id: 5, name: 'Western Shirts', image: 'photos/s5.jpg', price: 80 },
    { id: 6, name: 'Diesel watch', image: 'photos/watch.jpg', price: 70 },
    { id: 7, name: 'Printed Shirt', image: 'photos/shirt.jpg', price: 40 },
    { id: 8, name: 'US Polo Assn Shoes', image: 'photos/shoes.jpg', price: 70 },
  ];

  const handleAddToCart = async (product) => {
    const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage after login
    if (!userId) {
      alert('Please log in to add items to the cart.');
      return;
    }

    const response = await fetch('/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, item: product }),
    });

    if (response.ok) {
      alert(`${product.name} added to cart!`);
    } else {
      alert('Failed to add item to cart. Please try again.');
    }
  };

}
export default Products;