// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Подключаем файл стилей

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Pixel Cinema</h1>
      <p>Experience the best movies in town!</p>
      <Link to="/movies" className="home-button">Browse Movies</Link>
    </div>
  );
};

export default HomePage;
