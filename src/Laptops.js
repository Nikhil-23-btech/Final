import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import AddToCart from './Addtocart';
import Buy from './Buy';
function Laptops() {
  const navigate=useNavigate();
  const handleBuyNow = (product) => {
    navigate('/Buy', { state: { product } });
  };
  const products = [
    {
      id: 1,
      imgSrc: 'photos/laptops/hp.jpg',
      title: 'HP Victus 15',
      description: 'HP Victus Gaming Laptop,12th Gen Intel Core i5-12450H,4GB RTX 2050 GPU,15.6-inch (39.6 cm), FHD,IPS,8GB DDR4, 512GB SSD, Backlit KB,Dual Speakers(MSO, Blue,2.37 kg),fa1310tx',
      price: 700
    },
    {
      id: 2,
      imgSrc: 'photos/laptops/asus.jpg',
      title: 'Asus VivoBook',
      description: 'ASUS Vivobook 16X, 16" FHD+, 144Hz 300nits, Intel Core i5-12500H 2.5 GHz, Creator/Gaming Laptop (16GB RAM/512GB SSD/RTX 3050/win 11/Office Home/50WHr Battery/Cool Silver/1.80 kg), K3605ZC-RP587WS',
      price: 800
    },
    {
      id: 3,
      imgSrc: 'photos/laptops/honor.jpg',
      title: 'Honor MagicBook X16 Pro',
      description: 'HONOR MagicBook X16 Pro 2024, 13th Gen Intel Core i5-13420H (16GB/512GB NVMe SSD, 16-inch (40.64 cm) FHD IPS Anti-Glare Thin and Light Laptop/Windows 11/Backlit Keyboard/Fingerprint/1.75Kg), Gray',
      price: 700
    },
    {
      id: 4,
      imgSrc: 'photos/laptops/msi.jpg',
      title: 'MSI Thin 15',
      description: 'MSI Thin 15, Intel 13th Gen. Core i5-13420H, 40CM FHD 144Hz Gaming Laptop(16GB/512GB NVMe SSD/Windows 11 Home/NVIDIA GeForce RTX 3050,GDDR6 4GB/Cosmos Gray/1.86Kg), B13U C-1805IN',
      price: 600
    },
    {
      id: 5,
      imgSrc: 'photos/laptops/lenovo.jpg',
      title: 'Lenovo IdeaPad Gaming 3',
      description: 'Lenovo IdeaPad Gaming 3 Intel Core i5-11320H 15.6" (39.62cm) FHD IPS 250nits 120Hz Gaming Laptop (16GB/512GB SSD/Win 11/Office 21/NVIDIA GTX 1650 4GB/Alexa/3 Month Game Pass/Black/2.2Kg), 82K101M5IN',
      price: 800
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
      <div className="cont">
        <center>
          <h4>For further information mail us<br />abc@gmail.com</h4>
        </center>
      </div>
    </div>
  );
}

export default Laptops;
