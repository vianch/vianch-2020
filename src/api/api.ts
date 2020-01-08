import axios from "axios";

export const api = axios.create({
  baseURL: process.env.PLATFORM_API_BASE_URL,
  headers: {
    platform: "web",
  },
});
