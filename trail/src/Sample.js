import React from 'react';
import Navbar from './Navbar';
import Gallery from './Gallery';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

function Sample() {
  const location = useLocation(); // Access the location object
  
  
  return (
    <div>
      <Navbar />
      <div className="container">
        <img src="photos/sports.jpeg" alt="" className="image" />
        <div className="bottom-left">Bottom Left</div>
      </div>
      <hr /><hr />
      <h1 style={{ textAlign: 'center' }}>Most Buys</h1>
      <hr /><hr />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Sample;
