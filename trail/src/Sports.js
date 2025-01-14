import React from 'react';
import Navbar from './Navbar';
import AddToCart from './Addtocart';
import Buy from './Buy';
import { useNavigate } from 'react-router-dom';
function Sports() {
  const navigate=useNavigate();
    const handleBuyNow = (product) => {
      navigate('/Buy', { state: { product } });
    };
  const products = [
    {
      id: 1,
      imgSrc: 'photos/sports/dumbell.jpg',
      title: "Cockatoo ADB-01 2.5 KG- 40 Kg Adjustable Dumbbell Set",
      description: "Cockatoo ADB-01 2.5 KG- 40 Kg Adjustable Dumbbell Set, Home Workout Gym Equipment Men and Women, Quick One-Second Adjustment 15-IN-1 Dumbbell Dumbbells Set For Home Gym (40 Kg, Red)",
      price: 90
    },
    {
      id: 2,
      imgSrc: 'photos/sports/sg.jpg',
      title: "SG Full Cricket Kit Combo with Spofly™ Brand Stumps",
      description: "SG Full Cricket Kit Combo with Spofly™ Brand Stumps",
      price: 1000
    },
    {
      id: 3,
      imgSrc: 'photos/sports/ss.jpg',
      title: "Superb Stroke SS (Red) Cricket Bat",
      description: "Superb Stroke SS (Red) Cricket Bat Full Size Popular Willow Hard Pressed Shaped with Bat Cover",
      price: 45
    },
    {
      id: 4,
      imgSrc: 'photos/sports/batmntn.jpg',
      title: "YONEX GR 303 I Badminton Racquet (Black) - Pack of 2",
      description: "YONEX GR 303 I Badminton Racquet (Black) - Pack of 2",
      price: 40
    },
    {
      id: 5,
      imgSrc: 'photos/sports/footbal.jpg',
      title: "Nivia Shining Star - 2022 Football",
      description: "Nivia Shining Star - 2022 Football/Rubberized Stitched Football/32 Panels/International Match Ball/Size - 5 (Black & White)",
      price: 50
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

export default Sports;
