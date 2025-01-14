import React, { useState } from 'react';

function ProductForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    offerPrice: '',
    category: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
  
    fetch('http://localhost:3001/add-product', {
      method: 'POST',
      body: data,
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  return (
    <form id="product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="product-title">Product title</label>
        <input
          type="text"
          id="product-title"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="product-description">Product description</label>
        <input
          type="text"
          id="product-description"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Enter price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="offer-price">Offer Price</label>
        <input
          type="number"
          id="offer-price"
          name="offerPrice"
          placeholder="Discount price"
          value={formData.offerPrice}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="product-category">Product category</label>
        <select
          id="product-category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="product-image">Product image</label>
        <input
          type="file"
          id="product-image"
          name="image"
          onChange={handleFileChange}
        />
      </div>
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ProductForm;
