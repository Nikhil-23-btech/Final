import React, { useState } from 'react';
import './report.css';
import { useNavigate } from 'react-router-dom';

function Report() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState('');
  const [problem, setProblem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Problem reported:', { name, email, orderId, problem });
    alert('Thank you for reporting the problem! We will look into it.');
    // Reset form fields
    setName('');
    setEmail('');
    setOrderId('');
    setProblem('');
  };
  const navigate=useNavigate();
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
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="orderId">Order ID:</label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
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
        <button type="submit" onClick={()=>navigate('/sample')}>Submit</button>
      </form>
    </div>
  );
}

export default Report;
