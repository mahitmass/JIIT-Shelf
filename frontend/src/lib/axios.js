import axios from "axios";

// Set VITE_API_URL in Vercel env settings to your Render backend URL
// Example: https://jiit-shelf-backend.onrender.com
const API_URL = import.meta.env.VITE_API_URL || "";
const BASE_URL = `${API_URL}/api`;

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;