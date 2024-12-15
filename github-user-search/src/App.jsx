import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">GitHub User Search</h1>
        <p className="text-gray-600">
          Search for GitHub users by username, location, and repository count
        </p>
      </header>
      <main className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <Search />
      </main>
    </div>
  );
}

export default App;
