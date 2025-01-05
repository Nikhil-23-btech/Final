import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Navbar({ userProfile }) {
  const navigate = useNavigate();

  return (
    <ul>
      <li><img src="logo.jpg" style={{ width: '40px', height: '40px' }} alt="Logo" /></li>
      <li><a href="" onClick={() => navigate('/sample')}>Home</a></li>
      <li><a href="" onClick={() => navigate('/news')}>News</a></li>
      <li className="dropdown">
        <a href="" className="dropbtn">Categories</a>
        <div className="dropdown-content">
          <a href="" onClick={() => navigate('/Mobile')}>Mobiles</a>
          <a href="" onClick={() => navigate('/laptops')}>Laptops</a>
          <a href="" onClick={() => navigate('/clothing')}>Clothing</a>
          <a href="" onClick={() => navigate('/shoes')}>Shoes</a>
          <a href="" onClick={() => navigate('/sports')}>Sports</a>
        </div>
      </li>
      <li className="dropdown">
        <a href="" className="dropbtn">Offers</a>
        <div className="dropdown-content">
          <a href="" onClick={() => navigate('/upto1020')}>Upto 10-20%</a>
          <a href="" onClick={() => navigate('/upto3050')}>Upto 30-50%</a>
          <a href="" onClick={() => navigate('/upto7090')}>Upto 70-90%</a>
        </div>
      </li>
      <li className="dropdown">
        <a href="" className="dropbtn">About Us</a>
        <div className="dropdown-content">
          <a href="" onClick={() => navigate('/feedback')}>Feedback</a>
          <a href="" onClick={() => navigate('/reportform')}>Report Problem</a>
        </div>
      </li>
      <li className="navbar-right dropdown">
        <a href="" className="dropbtn"><i className="fas fa-shopping-cart"></i> Cart</a>
        <div className="dropdown-content">
          <a href="" onClick={() => navigate('/cart')}>View Cart</a>
          <a href="" onClick={() => navigate('/checkout')}>Checkout</a>
        </div>
      </li>
      <li className="navbar-right dropdown">
        <a href="" className="dropbtn">Your Profile</a>
        <div className="dropdown-content">
          <a href="" onClick={() => navigate('/')}>Logout</a>
        </div>
      </li>
    </ul>
  );
}

export default Navbar;
