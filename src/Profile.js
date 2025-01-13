import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const email = new URLSearchParams(location.search).get('email'); // Extract email from URL

  useEffect(() => {
    // Fetch user data based on the email parameter
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/getUserData?email=${email}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    if (email) {
      fetchUserData();
    }
  }, [email]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <br/>
      <h5><strong>Name:</strong> {userData.name}</h5>
      <br/>
      <h5><strong>Address :</strong>{userData.address}</h5>
      <br/>
      <h5><strong>Aadhar No: </strong>{userData.aadhar}</h5>
      <br/>
      <h5><strong>Email:</strong> {userData.email}</h5>
      <br/>
      <h5><strong>Mobile Number:</strong> {userData.mobileNumber}</h5>
    </div>
  );
}

export default Profile;
