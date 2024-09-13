// src/api/axiosConfig.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Замените на URL вашего бэкенда
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Получаем токен из localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Добавляем токен в заголовки
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
