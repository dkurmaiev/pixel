// src/components/common/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Подключаем файл стилей

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Pixel Cinema</Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
