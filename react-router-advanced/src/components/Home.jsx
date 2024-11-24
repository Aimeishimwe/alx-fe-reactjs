import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <Link to="/profile">Go to Profile</Link> |
        <Link to="/post/1">View Post 1</Link>
      </nav>
    </div>
  );
}

export default Home;
