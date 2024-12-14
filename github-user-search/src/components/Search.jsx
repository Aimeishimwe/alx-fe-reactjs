import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState(""); // State for input value
  const [userData, setUserData] = useState(null); // State for fetched user data
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(null); // State for error message

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username); // Call service to fetch user data
      setUserData(data);
    } catch (err) {
      setError(err.message || "Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="mt-2 w-full bg-blue-500 text-white py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && (
        <div className="p-4 border rounded">
          <img
            src={userData.avatar_url}
            alt="User Avatar"
            className="w-20 h-20 rounded-full"
          />
          <h2 className="text-xl font-bold mt-2">{userData.name}</h2>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
