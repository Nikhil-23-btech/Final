import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddToCart from './Addtocart';
import './style.css';

function Gallery() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

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

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(cartItems);
    setCartCount(cartItems.length);
  }, []);

  const handleBuyNow = (product) => {
    navigate('/Buy', { state: { product } });
  };

  return (
    <div className="vec">
      <div id="cartCountContainer">
        <span id="cartCount">{cartCount}</span>
      </div>
      {products.map((product) => (
        <div className="responsive" key={product.id}>
          <div className="gallery">
            <img src={product.image} alt={product.name} width="600" height="400" />
            <div className="desc">
              <h2>{product.name}<br />Price :{product.price}$</h2>
              <button onClick={() => handleBuyNow(product)}>Buy Now</button>
              <AddToCart product={product} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
