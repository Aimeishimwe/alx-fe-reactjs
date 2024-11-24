import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Post from "./components/Post";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="post/:postId" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
        {isAuthenticated ? "Logout" : "Login"}
      </button>
    </Router>
  );
}

export default App;
