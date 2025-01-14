import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './report.css';

function Report() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState('');
  const [problem, setProblem] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); 
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const emailFromURL = queryParams.get('email');
    
    if (emailFromURL) {
      setEmail(emailFromURL);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reportData = { name, email, product, problem };

    try {
      const response = await fetch('http://localhost:3000/submit-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reportData),
      });

      if (response.ok) {
        alert('Thank you for reporting the problem! We will look into it.');
        setName('');
        setEmail('');
        setProduct('');
        setProblem('');
        navigate(`/sample?email=${email}`);
      } else {
        alert('Failed to report the problem. Please try again.');
      }
    } catch (error) {
      console.error('Error reporting problem:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="report-problem-form">
      <h2>Report a Problem</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            readOnly
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="product">Product:</label>
          <input
            type="text"
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="problem">Problem Description:</label>
          <textarea
            id="problem"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Report;
