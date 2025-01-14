import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Productform from './Productform';
import Productlist from './Productlist';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="sidebar">
          <Link to="/add-product">
            <button>Add Product</button>
          </Link>
          <Link to="/product-list">
            <button>Product List</button>
          </Link>
        </div>
        <div className="form-container">
          <Routes>
            <Route path="/add-product" element={<Productform />} />
            <Route path="/product-list" element={<Productlist />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;