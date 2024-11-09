// src/UserDetails.jsx
import React, { useContext } from 'react'; // Import useContext hook
import UserContext from './UserContext';  // Import the UserContext

function UserDetails() {
  // Access userData using the useContext hook
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
