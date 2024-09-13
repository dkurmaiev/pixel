// src/app/store.js

import { configureStore } from '@reduxjs/toolkit'; // Импортируем configureStore из Redux Toolkit
import authReducer from '../features/auth/authSlice'; // Импортируем редьюсер для аутентификации
import moviesReducer from '../features/movies/moviesSlice'; // Импортируем редьюсер для фильмов
import bookingsReducer from '../features/bookings/bookingsSlice'; // Импортируем редьюсер для бронирований

export const store = configureStore({
  reducer: {
    auth: authReducer, // Добавляем редьюсер аутентификации
    movies: moviesReducer, // Добавляем редьюсер фильмов
    bookings: bookingsReducer, // Добавляем редьюсер бронирований
  },
});
