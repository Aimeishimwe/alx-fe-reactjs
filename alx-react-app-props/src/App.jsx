import React from 'react';
import ProfilePage from './ProfilePage';  // Import the ProfilePage component
import UserContext from './UserContext';  // Import the UserContext file
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
            <WelcomeMessage />
        </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        </div>
      <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
        <UserContext.Provider value={userData}>
      <ProfilePage />  {/* ProfilePage and its children can now access userData */}
    </UserContext.Provider>
    </>
  )
}

export default App