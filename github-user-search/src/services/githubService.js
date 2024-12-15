import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";

// Function to fetch advanced user data
export const fetchAdvancedUsers = async ({
  username = "",
  location = "",
  minRepos = "",
}) => {
  try {
    let query = "";
    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const fullUrl = `${BASE_URL}${query.trim() ? `&q=${query.trim()}` : ""}`;
    const response = await axios.get(fullUrl);

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

// Function to fetch a single user's data
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const { id, login, avatar_url, html_url, location, public_repos } =
      response.data;
    return { id, login, avatar_url, html_url, location, public_repos };
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
