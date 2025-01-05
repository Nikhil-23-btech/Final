import React from 'react';
import './off.css';
import Navbar from './Navbar';
import AddToCart from './Addtocart';

function Upto3050() {
  const products = [
    {
      id: 1,
      imgSrc: 'photos/offers/msi.jpg',
      title: "MSI Cyborg 14",
      description: "MSI Cyborg 14, Intel 13th Gen. i5-13420H, 36CM FHD+ 144Hz Gaming Laptop(8GB/512GB NVMe SSD/Windows 11 Home/MSO 2021/Nvidia GeForce RTX2050, 4GB GDDR6/Translucent Black/1.6Kg), A13UCX-206IN",
      price: 59400,
      discount: "34% off",
      originalPrice: 90000
    },
    {
      id: 2,
      imgSrc: 'photos/offers/samsung.jpg',
      title: "Samsung Galaxy Book4",
      description: "Samsung Galaxy Book4 (Gray, 16GB RAM, 512GB SSD) | 15.6\" Full HD Screen | Intel Core i5 1335U Processor | Windows 11 Home | MS Office 2021 | Fingerprint Reader | Intel Iris XE Graphics | RJ45 LAN Port",
      price: 54400,
      discount: "36% off",
      originalPrice: 85000
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
      imgSrc: 'photos/offers/pen.jpg',
      title: "SanDisk Ultra Dual Drive Go USB Type-C",
      description: "SanDisk Ultra Dual Drive Go USB Type-C, Navagio Bay, India, 400MB/s 256GB, Mobile Pendrive",
      price: 1900,
      discount: "43% off",
      originalPrice: 3300
    },
    {
      id: 5,
      imgSrc: 'photos/offers/ipad.jpg',
      title: "OnePlus Pad",
      description: "OnePlus Pad 29.49Cm (11.61 Inch) LCD Display, 12Gb Ram,256Gb Storage, Mediatek Dimensity 9000, Android 13.1, 144Hz Refresh Rate, Dolby Vision Atmos, Wi-Fi with Cellular Data Sharing Tablet, Green",
      price: 25000,
      discount: "37% off",
      originalPrice: 40000
    }
  ];

  return (
    <div>
      <Navbar />
      <h1>Great Indian Sales<br/><br/>Upto 30-50% Off on Every Product</h1>
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
                <input type="submit" value="Buy now" />
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

export default Upto3050;
