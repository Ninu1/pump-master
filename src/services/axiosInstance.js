// src/services/axiosInstance.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-url.com/api', // 🔁 Replace with real backend URL
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export default api;
