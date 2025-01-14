import React from 'react';
import { useNavigate } from 'react-router-dom';
import './mobstyle.css';
import Navbar from './Navbar';
import AddToCart from './Addtocart';
function Mobile() {
  const navigate=useNavigate();
  const handleBuyNow = (product) => {
    navigate('/Buy', { state: { product } });
  };
  const products = [
    {
      id: 1,
      imgSrc: 'photos/mobile/iphone1.jpg',
      title: 'IPhone 16 pro max',
      description: 'Built for Apple Intelligence. A18 Pro chip. Camera Control. Learn more. Take a closer look. Get to know iPhone 16 Pro. 48MP Ultra Wide camera. Titanium design. A18 Pro chip. Siri. iOS 18.',
      price: 2000
    },
    {
      id: 2,
      imgSrc: 'photos/mobile/vivo.jpg',
      title: 'Vivo V25',
      description: 'The Vivo V25 5G features a sleek design with advanced specs, including a high-resolution display, powerful processor, and multiple RAM/ROM options. Enjoy 5G connectivity, fast charging, and immersive audio for a superior experience.',
      price: 300
    },
    {
      id: 3,
      imgSrc: 'photos/mobile/samsung.jpg',
      title: 'Samsung S24 Ultra',
      description: 'The Samsung Galaxy S24 Ultra is a powerhouse of a smartphone with a sleek titanium exterior and a 6.8-inch Dynamic AMOLED 2X display.',
      price: 1800
    },
    {
      id: 4,
      imgSrc: 'photos/mobile/realme.jpg',
      title: 'Realme GT 6T',
      description: 'The Realme GT 6T is a high-performance smartphone featuring a 6.78-inch LTPO AMOLED display with a peak brightness of 6000 nits.',
      price: 500
    },
    {
      id: 5,
      imgSrc: 'photos/mobile/iqoo.jpg',
      title: 'IQOO NEO 7',
      description: 'The iQOO Neo 7 is a high-performance smartphone featuring a 6.78-inch AMOLED display with a 120Hz refresh rate for smooth visuals.',
      price: 450
    }
  ];

  return (
    <div>
      <Navbar />
      <table border="1px">
        {products.map((product, index) => (
          <tr key={index}>
            <td><img src={product.imgSrc} width="500px" height="300px" alt={product.title} /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h2>{product.title}</h2>
              <br />
              <h3>{product.description}<br />Price: ${product.price}</h3>
            </td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <form>
              <button onClick={() => handleBuyNow(product)}>Buy Now</button>
              </form>
              <br /><br />
              <AddToCart product={{ id: product.id, name: product.title, image: product.imgSrc, price: product.price }} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Mobile;
