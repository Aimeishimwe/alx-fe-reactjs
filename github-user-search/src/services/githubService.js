import axios from "axios";

const BASE_URL = "https://api.github.com";

// Function to fetch advanced user data
export const fetchAdvancedUsers = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query, // Query string for advanced search
      },
    });

    // Extract only the relevant user details for display
    const users = response.data.items.map(async (user) => {
      const userDetails = await fetchUserDetails(user.url); // Fetch additional user details
      return {
        id: userDetails.id,
        login: userDetails.login,
        avatar_url: userDetails.avatar_url,
        location: userDetails.location || "Not specified",
        public_repos: userDetails.public_repos || 0,
        html_url: userDetails.html_url,
      };
    });

    return Promise.all(users); // Return all user details
  } catch (error) {
    console.error("Error fetching advanced users:", error);
    throw error;
  }
};

// Function to fetch user details (e.g., location, public repos)
const fetchUserDetails = async (userUrl) => {
  try {
    const response = await axios.get(userUrl); // Get detailed user data
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};
