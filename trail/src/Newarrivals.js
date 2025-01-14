import React, { useEffect, useState } from 'react';
import AddToCart from './Addtocart';
import Navbar from './Navbar';
const Newarrivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleBuyNow = (product) => {
    console.log(`Buying now: ${product.title}`);
  };

  return (
    <div>
      <h1>Product List</h1>
      <table border="1px">
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td><img src={product.image} width="500px" height="300px" alt={product.title} /></td>
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
                <AddToCart product={{ id: product._id, name: product.title, image: product.image, price: product.price }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cont">
        <center>
          <h4>For further information mail us<br />abc@gmail.com</h4>
        </center>
      </div>
    </div>
  );
};

export default Newarrivals;
