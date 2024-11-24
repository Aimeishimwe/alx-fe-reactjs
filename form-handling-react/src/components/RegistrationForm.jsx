import React, { useState } from "react";

function RegistrationForm() {
  // Step 1: Define state variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Step 2: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Basic validation: ensure no fields are empty
    if (!username || !email || !password) {
      alert("All fields are required.");
      return;
    }
    console.log("Form submitted with:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Step 3: Controlled input for username */}
      <label>
        Username:
        <input
          type="text"
          value={username} // Controlled input
          onChange={(e) => setUsername(e.target.value)} // Update state
        />
      </label>
      <br />

      {/* Controlled input for email */}
      <label>
        Email:
        <input
          type="email"
          value={email} // Controlled input
          onChange={(e) => setEmail(e.target.value)} // Update state
        />
      </label>
      <br />

      {/* Controlled input for password */}
      <label>
        Password:
        <input
          type="password"
          value={password} // Controlled input
          onChange={(e) => setPassword(e.target.value)} // Update state
        />
      </label>
      <br />

      {/* Submit button */}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
