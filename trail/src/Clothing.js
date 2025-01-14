import React from 'react';
import Navbar from './Navbar';
import AddToCart from './Addtocart';
import Buy from './Buy';
import { useNavigate } from 'react-router-dom';
function Clothing() {
  const navigate=useNavigate();
  const handleBuyNow = (product) => {
    navigate('/Buy', { state: { product } });
  };
  const products = [
    {
      id: 1,
      imgSrc: 'photos/clothing/kudtha.jpg',
      title: "Chikankari Men's Kurta Set in Fine Clothing Craftsmanship",
      description: "Chikankari Men's Kurta Set in Fine Clothing Craftsmanship",
      price: 20
    },
    {
      id: 2,
      imgSrc: 'photos/clothing/trad.jpg',
      title: "Traditional Kurta & Koti Combo for Men | Wedding Available in XL Size",
      description: "Traditional Kurta & Koti Combo for Men | Wedding Available in XL Size",
      price: 25
    },
    {
      id: 3,
      imgSrc: 'photos/clothing/slim.jpg',
      title: "EDINWOLF Cotton Solid Casual Slim Fit Spread Collor Short Kurta for Men",
      description: "EDINWOLF Cotton Solid Casual Slim Fit Spread Collor Short Kurta for Men",
      price: 10
    },
    {
      id: 4,
      imgSrc: 'photos/clothing/martin.jpg',
      title: "Ben Martin Men's Cotton Angrakha Short Kurta",
      description: "Ben Martin Men's Cotton Angrakha Short Kurta",
      price: 600
    },
    {
      id: 5,
      imgSrc: 'photos/clothing/coat.jpg',
      title: "Ben Martin Men's Fleece Hooded Cardigan Full Sleeve Standard Length Coat 2 Pockets",
      description: "Ben Martin Men's Fleece Hooded Cardigan Full Sleeve Standard Length Coat 2 Pockets",
      price: 25
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

export default Clothing;
