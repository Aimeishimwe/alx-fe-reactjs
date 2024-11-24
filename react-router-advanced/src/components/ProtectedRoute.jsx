import React from "react";
import { Navigate } from "react-router-dom";

// Mock implementation of useAuth
function useAuth() {
  // Simulating an authentication check (you can replace this logic as needed)
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return { isAuthenticated };
}

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Simulate fetching authentication status

  return isAuthenticated ? children : <Navigate to="/login" />; // Redirect to /login if not authenticated
}

export default ProtectedRoute;
