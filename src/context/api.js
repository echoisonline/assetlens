import axios from "axios";

export const apiKey = import.meta.env.VITE_API;
const baseUrl = "https://api.coingecko.com/api/v3/";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTrendingAssets = async () => {
  try {
    const response = await api.get(
      `https://api.coingecko.com/api/v3/search/trending?api_key=${apiKey}`
    );
    return response.data.coins;
  } catch (error) {
    console.error("Ping failed:", error);
    return { error: "Failed to reach API" };
  }
};
