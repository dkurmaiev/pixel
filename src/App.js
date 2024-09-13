// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar'; // Импортируем компонент Navbar
import HomePage from './pages/HomePage'; // Импортируем страницу HomePage
import MoviesPage from './pages/MoviesPage'; // Импортируем страницу MoviesPage
import MovieDetailsPage from './pages/MovieDetailsPage'; // Импортируем страницу MovieDetailsPage
import BookingPage from './pages/BookingPage'; // Импортируем страницу BookingPage
import LoginPage from './pages/LoginPage'; // Импортируем страницу LoginPage
import RegisterPage from './pages/RegisterPage'; // Импортируем страницу RegisterPage
import ProfilePage from './pages/ProfilePage'; // Импортируем страницу ProfilePage
import PrivateRoute from './components/common/PrivateRoute'; // Импортируем компонент PrivateRoute
import './App.css'; // Подключаем файл стилей для App

const App = () => {
  return (
    <Router> {/* Оборачиваем приложение в Router для поддержки маршрутизации */}
      <Navbar /> {/* Добавляем Navbar на все страницы */}
      <div className="app-container"> {/* Основной контейнер для контента страниц */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Маршрут для главной страницы */}
          <Route path="/movies" element={<MoviesPage />} /> {/* Маршрут для страницы со списком фильмов */}
          <Route path="/movies/:id" element={<MovieDetailsPage />} /> {/* Маршрут для страницы с деталями фильма */}
          <Route path="/booking/:id" element={<BookingPage />} /> {/* Маршрут для страницы бронирования */}
          <Route path="/login" element={<LoginPage />} /> {/* Маршрут для страницы входа */}
          <Route path="/register" element={<RegisterPage />} /> {/* Маршрут для страницы регистрации */}
          <Route path="/profile" element={<PrivateRoute component={<ProfilePage />} />} /> {/* Приватный маршрут для страницы профиля */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
