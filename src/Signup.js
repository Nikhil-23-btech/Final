import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
const Signup= () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const { firstName, lastName, mobileNumber, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, mobileNumber, email, password })
    });

    if (response.status === 201) {
      alert('User registered successfully');
        navigate('/');
    } else {
      const result = await response.text();
      alert(result);
    }
  };

  return (
    <section className="container">
      <header>Registration Form</header>
      <form className="form" onSubmit={registerUser}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter first name"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter last name"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter mobile number"
            id="mobile-number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter email address"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Confirm password"
            id="confirm-password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Signup;
