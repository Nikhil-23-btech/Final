import React from 'react';
import './off.css';
import Navbar from './Navbar';
import AddToCart from './Addtocart';
import { useNavigate } from 'react-router-dom';

function Upto1020() {
  const navigate=useNavigate();
  const handleBuyNow = (product) => {
    navigate('/Buy', { state: { product } });
  };
  const products = [
    {
      id: 1,
      imgSrc: 'photos/offers/lgsmart.jpg',
      title: "LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray)",
      description: "LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray)",
      price: 15660,
      discount: "13% off",
      originalPrice: 18000
    },
    {
      id: 2,
      imgSrc: 'photos/offers/m3.jpg',
      title: "Apple 2024 MacBook Pro Laptop with M4 chip",
      description: "Apple 2024 MacBook Pro Laptop with M4 chip with 10‑core CPU and 10‑core GPU: Built for Apple Intelligence, (14.2″) Liquid Retina XDR Display, 16GB Unified Memory, 512GB SSD Storage; Space Black",
      price: 171000,
      discount: "10% off",
      originalPrice: 190000
    },
    {
      id: 3,
      imgSrc: 'photos/offers/mach.jpg',
      title: "LG 8 Kg 5 Star Smart Inverter Technology TurboDrum Fully Automatic Top Loading Washing Machine",
      description: "LG 8 Kg 5 Star Smart Inverter Technology TurboDrum Fully Automatic Top Loading Washing Machine (T80SKSF1Z, Smart Diagnosis, Digital Display, Middle Free Silver)",
      price: 25800,
      discount: "14% off",
      originalPrice: 30000
    },
    {
      id: 4,
      imgSrc: 'photos/offers/fridge.jpg',
      title: "Samsung 236 L, 3 Star, Convertible, Digital Inverter with Display Frost Free Double Door Refrigerator",
      description: "Samsung 236 L, 3 Star, Convertible, Digital Inverter with Display Frost Free Double Door Refrigerator (RT28C3733S8/HL, Silver, Elegant Inox, 2024 Model)",
      price: 32300,
      discount: "15% off",
      originalPrice: 38000
    },
    {
      id: 5,
      imgSrc: 'photos/offers/ac.jpg',
      title: "Voltas 1.5 ton 3 Star, Inverter Split AC",
      description: "Voltas 1.5 ton 3 Star, Inverter Split AC (Copper, 4-in-1 Adjustable Mode, Anti-dust Filter, 2024 Model, 183V Vectra CAW, White)",
      price: 46200,
      discount: "15% off",
      originalPrice: 55000
    }
  ];

  return (
    <div>
      <Navbar />
      <h1>Black Friday Sales <br/><br/>Upto 10-20% Off on Every Product</h1>
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

export default Upto1020;
