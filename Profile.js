import React, { useState, useEffect } from 'react';

function Profile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    balance: 5000,
  });

  useEffect(() => {
    // Simulating fetching data
    // Here you can fetch profile data from an API
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Balance: ${profile.balance}</p>
    </div>
  );
}

export default Profile;
