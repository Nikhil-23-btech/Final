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
      imgSrc: 'photos/shoes/uspolo.jpg',
      title: "U.S. Polo Assn.'s colour-block stylish fashion sneakers",
      description: "U.S. Polo Assn.'s colour-block stylish fashion sneakers",
      price: 50
    },
    {
      id: 2,
      imgSrc: 'photos/shoes/sprx.jpg',
      title: "Sparx Men's Canvas Sneaker",
      description: "Sparx Men's Canvas Sneaker",
      price: 20
    },
    {
      id: 3,
      imgSrc: 'photos/shoes/frml.jpg',
      title: "San Frissco Men's Shoe Black Leather – Round Toe Formal Oxfords",
      description: "San Frissco Men's Shoe Black Leather – Round Toe Formal Oxfords: Wrinkle-Free Patent Upper, Lightweight Design, and Cushioned Footbed for All-Day Comfort",
      price: 35
    },
    {
      id: 4,
      imgSrc: 'photos/shoes/cent.jpg',
      title: "Centrino Mens 7957 Classic Moccasins Non-Lace Up Formal Shoes",
      description: "Centrino Mens 7957 Classic Moccasins Non-Lace Up Formal Shoes for Office, Party, Wedding | Dress Shoes | Extra Cushioning Insole | Lightweight & Comfortable",
      price: 35
    },
    {
      id: 5,
      imgSrc: 'photos/shoes/fausto.jpg',
      title: "FAUSTO Men's Formal Lace Up Oxford Shoes",
      description: "FAUSTO Men's Formal Lace Up Oxford Shoes for Office|Meetings|Daily|Comfort|Fashion|Stylish|Parties|Outdoor|Occasions|Lightweight with TPR Welted Sole (6-13 UK)",
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
