import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Sample from './Sample';
import './login.css';
import Mobile from './Mobile';
import Laptops from './Laptops';
import Clothing from './Clothing';
import Shoes from './Shoes';
import Sports from './Sports';
import Upto1020 from './Upto1020';
import Upto3050 from './Upto3050';
import Upto7090 from './Upto7090';
import Signup from './Signup';
import Cart from './Cart';
import Addtocart from './Addtocart';
import Feedback from './Feedback';
import Reportform from './Reportform';
import ImageUpload from './ImageUpload';
import Navbar from './Navbar';
import Buy from './Buy';
import Profile from './Profile';

function App() {
  const [loggedInEmail, setLoggedInEmail] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setLoggedInEmail={setLoggedInEmail} />} />
        <Route path="/Navbar" element={<Navbar userProfile={{ email: loggedInEmail }} />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/Mobile" element={<Mobile />} />
        <Route path="/Laptops" element={<Laptops />} />
        <Route path="/Clothing" element={<Clothing />} />
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Upto1020" element={<Upto1020 />} />
        <Route path="/Upto3050" element={<Upto3050 />} />
        <Route path="/Upto7090" element={<Upto7090 />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Addtocart" element={<Addtocart />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Reportform" element={<Reportform />} />
        <Route path="/ImageUpload" element={<ImageUpload />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

function Login({ setLoggedInEmail }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [UserProfile, setUserProfile] = useState(null);

  const sendOTP = async () => {
    const response = await fetch('/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.text();
    alert(result);
  };

  const verifyOTP = async () => {
    const otp = document.getElementById('otp').value;
    const response = await fetch('/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });
    const result = await response.text();
    alert(result);
    if (result === 'OTP verified successfully. You can proceed to login') {
      await handleLogin();
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleLogin = async () => {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setUserProfile(data); // Store user profile in the state
      setLoggedInEmail(email); // Set the logged-in email
      setPassword(''); // Clear the password field
      navigate(`/sample?email=${email}`, { state: { userProfile: data } });
    } else {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome back</h2>
        <form id="otp-form">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <br />
          <a href="/signup">Don't have an account? Register Here</a>
          <br /><br />
          <button type="button" onClick={sendOTP}>Send OTP</button>
          <br /><br />
        </form>
        <form id="verify-form">
          <input type="password" id="otp" name="otp" placeholder="Enter OTP" required />
          <br /><br />
          <button type="button" onClick={verifyOTP}>Verify OTP</button>
          <br /><br />
          <button type="button" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
}
export default App;
