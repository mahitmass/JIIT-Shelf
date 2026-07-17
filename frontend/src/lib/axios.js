import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "";
const BASE_URL = `${API_URL}/api`;

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;