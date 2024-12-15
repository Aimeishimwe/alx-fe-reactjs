import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";

// Function to fetch advanced user data
export const fetchAdvancedUsers = async ({
  username = "",
  location = "",
  minRepos = "",
}) => {
  try {
    // Construct the query string based on provided parameters
    let query = "";
    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    // Ensure the full URL includes the BASE_URL and query
    const fullUrl = `${BASE_URL}${query.trim() ? `&q=${query.trim()}` : ""}`;

    // Make the API request with the constructed query
    const response = await axios.get(fullUrl);

    // Return user items with relevant data
    return response.data.items.map((user) => ({
      id: user.id,
      login: user.login,
      avatar_url: user.avatar_url,
      html_url: user.html_url,
    }));
  } catch (error) {
    console.error("Error fetching advanced users:", error);
    throw error;
  }
};
