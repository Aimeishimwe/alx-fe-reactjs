import React, { useState } from "react";

function RegistrationForm() {
  // State for form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for errors
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Clear previous errors
    setErrors({});

    // Step 1: Validation logic
    const newErrors = {};
    if (!username) {
      newErrors.username = "Username is required.";
    }
    if (!email) {
      newErrors.email = "Email is required.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    }

    // Step 2: Set errors if any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop form submission
    }

    // Step 3: Submit the form (if no errors)
    console.log("Form submitted successfully!", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Username Input */}
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      <br />

      {/* Email Input */}
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <br />

      {/* Password Input */}
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      <br />

      {/* Submit Button */}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
