import axios from "axios";

export const idle = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

idle.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
