import axios from "axios";

const BASE_URL = import.meta.env.VITE_GITHUB_API_URL;

export const fetchUserData = async (username) => {
  if (!username) throw new Error("Username is required");
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
