import React from 'react';
import './off.css';
import Navbar from './Navbar';
import AddToCart from './Addtocart';
import { useNavigate } from 'react-router-dom';
function Upto7090() {
  const navigate=useNavigate();
  const handleBuyNow = (product) => {
    navigate('/Buy', { state: { product } });
  };
  const products = [
    {
      id: 1,
      imgSrc: 'photos/offers/watch.jpg',
      title: "Boult Crown R Pro",
      description: "Boult Newly Launched Crown R Pro Smart Watch 1.43''HD AMOLED, Bluetooth Calling, Working Crown, Zinc Alloy Frame, 600 Nits Brightness, AI Voice Assistant, SpO2 Monitoring, 120+ Sports Mode (Jet Black)",
      price: 1800,
      discount: "74% off",
      originalPrice: 7000
    },
    {
      id: 2,
      imgSrc: 'photos/offers/buds.jpg',
      title: "Boult Audio Z40 Pro",
      description: "Boult Audio Z40 Pro with 100H Playtime, Quad Mic ENC, 45ms Low Latency Gaming, Premium Rubber Grip Case, 13mm Bass Drivers, Made in India TWS Bluetooth 5.3 Truly Wireless in Ear Earbuds (Midnight)",
      price: 1300,
      discount: "36% off",
      originalPrice: 6000
    },
    {
      id: 3,
      imgSrc: 'photos/offers/realme.jpg',
      title: "Realme 12 Pro 5G",
      description: "realme 12 Pro 5G (Submarine Blue, 12GB RAM, 256GB Storage) | 50 MP Sony IMX882 OIS Camera | 32 MP 2X Flagship Telephoto Portrait Camera | Snapdragon 6 Gen 1 5G Processor | 12 GB+12 GB Dynamic RAM",
      price: 20400,
      discount: "32% off",
      originalPrice: 30000
    },
    {
      id: 4,
      imgSrc: 'photos/offers/cell.jpg',
      title: "Samsung Galaxy S23 5G",
      description: "Samsung Galaxy S23 5G Snapdragon (Lavender, 8GB, 128GB Storage)",
      price: 76500,
      discount: "85% off",
      originalPrice: 90000
    },
    {
      id: 5,
      imgSrc: 'photos/offers/iphone.jpg',
      title: "iPhone 16 128 GB",
      description: "iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; White",
      price: 58000,
      discount: "71% off",
      originalPrice: 200000
    }
  ];

  return (
    <div>
      <Navbar />
      <h1>Year Ending Sales<br/><br/>Upto 70-90% Off on Every Product</h1>
      <table border="1px">
        {products.map((product, index) => (
          <tr key={index}>
            <td><img src={product.imgSrc} width="500px" height="300px" alt={product.title} /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h2>{product.title}</h2>
              <br />
              <h3>{product.description}<br />Price: ₹{product.price} - {product.discount} <p>Original Price: ₹{product.originalPrice}</p></h3>
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
      <div className="cont">
        <center>
          <h4>For further information mail us<br />abc@gmail.com</h4>
        </center>
      </div>
    </div>
  );
}

export default Upto7090;
