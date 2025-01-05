import React from 'react';
import Navbar from './Navbar';
import Gallery from './Gallery';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

function Sample() {
  const location = useLocation(); // Access the location object
  const userProfile = location.state ? location.state.userProfile : null; // Safe access to userProfile
  
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
      
      {userProfile ? (
        <div className="user-info">
          <h2>Welcome, {userProfile.firstName}!</h2>
          <br/>
          <h4><strong>First Name:</strong> {userProfile.firstName}</h4><br/>
          <h4><strong>last Name:</strong> {userProfile.lastName}</h4><br/>
          <h4><strong>Email:</strong> {userProfile.email}</h4><br/>
          <h4><strong>Mobile Number:</strong> {userProfile.mobileNumber}</h4>
        </div>
      ) : (
        <div>Loading user profile...</div>
      )}
      
      <Gallery />
      <Footer />
    </div>
  );
}

export default Sample;
