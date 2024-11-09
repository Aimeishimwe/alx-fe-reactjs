// src/UserInfo.jsx
import React from 'react';
import UserDetails from './UserDetails';  // Import UserDetails component

function UserInfo() {
  return <UserDetails />;  // Just render UserDetails without passing userData as a prop
}

export default UserInfo;
