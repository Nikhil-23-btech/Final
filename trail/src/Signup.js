import React, { useState } from 'react';
import './register.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    aadhar: '',
    mobileNumber: '', // Correct field name
    email: '', // Correct field name
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, address, aadhar, mobileNumber, email, password, confirmPassword } = formData;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, address, aadhar, mobileNumber, email, password }),
      });

      if (response.status === 201) {
        alert('User registered successfully');
        window.location.href = '/'; // Redirect on successful registration
      } else {
        const result = await response.text();
        alert(result); // Show error message from backend
      }
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <section className="container">
      <header>Registration Form</header>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter aadhar number"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter mobile number"
            name="mobileNumber" // Correct field name here
            value={formData.mobileNumber} // Correct state field
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="email" // Correct type
            placeholder="Enter email address"
            name="email" // Correct field name here
            value={formData.email} // Correct state field
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Signup;
