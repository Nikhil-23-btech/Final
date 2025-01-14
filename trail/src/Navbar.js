import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Navbar({ userProfile }) {
  const navigate = useNavigate();

  // Use userProfile to get the email for the profile link
  const email = new URLSearchParams(window.location.search).get('email');

  return (
    <ul>
      <li><img src="logo.jpg" style={{ width: '40px', height: '40px' }} alt="Logo" /></li>
      <li><a href="" onClick={() => navigate(`/sample?email=${email}`)}>Home</a></li>
      <li><a href="" onClick={() => navigate(`/newarrivals?email=${email}`)}>New arrivals</a></li>
      <li className="dropdown">
        <a href="" className="dropbtn">Categories</a>
        <div className="dropdown-content">
          <a href="" onClick={() => navigate(`/Mobile?email=${email}`)}>Mobiles</a>
          <a href="" onClick={() => navigate(`/laptops?email=${email}`)}>Laptops</a>
          <a href="" onClick={() => navigate(`/clothing?email=${email}`)}>Clothing</a>
          <a href="" onClick={() => navigate(`/shoes?email=${email}`)}>Shoes</a>
          <a href="" onClick={() => navigate(`/sports?email=${email}`)}>Sports</a>
        </div>
      </li>
      <li className="dropdown">
        <a href="" className="dropbtn">Offers</a>
        <div className="dropdown-content">
          <a href="" onClick={() => navigate(`/upto1020?email=${email}`)}>Upto 10-20%</a>
          <a href="" onClick={() => navigate(`/upto3050?email=${email}`)}>Upto 30-50%</a>
          <a href="" onClick={() => navigate(`/upto7090?email=${email}`)}>Upto 70-90%</a>
        </div>
      </li>
      <li className="dropdown">
        <a href="" className="dropbtn">About Us</a>
        <div className="dropdown-content">
          <a href="" onClick={() => navigate(`/feedback?email=${email}`)}>Feedback</a>
          <a href="" onClick={() => navigate(`/reportform?email=${email}`)}>Report Problem</a>
        </div>
      </li>
      <li className="navbar-right dropdown">
        <a href="" className="dropbtn"><i className="fas fa-shopping-cart"></i> Cart</a>
        <div className="dropdown-content">
          <a href="" onClick={() => navigate(`/cart?email=${email}`)}>View Cart</a>
        </div>
      </li>
      <li className="navbar-right dropdown">
        <a href="" className="dropbtn">Your Profile</a>
        <div className="dropdown-content">
          <a href={`/profile?email=${email}`}>My Profile</a>
          <a href="" onClick={() => navigate('/')}>Logout</a>
        </div>
      </li>
    </ul>
  );
}

export default Navbar;
