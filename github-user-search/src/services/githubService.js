import axios from "axios";

const GITHUB_API_BASE_URL =
  import.meta.env.VITE_GITHUB_API_BASE_URL || "https://api.github.com";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `${GITHUB_API_BASE_URL}/users/${username}`
    );
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
