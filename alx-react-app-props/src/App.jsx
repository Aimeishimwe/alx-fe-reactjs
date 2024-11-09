// src/App.jsx
import React from 'react';
import ProfilePage from './ProfilePage';  // Import the ProfilePage component
import UserContext from './UserContext';  // Import the UserContext file

function App() {
  // Define the user data
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Provide the userData through context to all children of ProfilePage
    <UserContext.Provider value={userData}>
      <ProfilePage />  {/* ProfilePage and its children can now access userData */}
    </UserContext.Provider>
  );
}

export default App;
