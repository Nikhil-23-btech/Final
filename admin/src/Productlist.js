import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product._id} className="product-item">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>Offer Price: {product.offerPrice}</p>
          <p>Category: {product.category}</p>
          <img src={`/uploads/${product.image}`} alt={product.title} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
