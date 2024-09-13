// src/components/movies/MovieCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'; // Подключаем файл стилей

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterPath} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.synopsis.substring(0, 100)}...</p>
        <Link to={`/movies/${movie._id}`} className="movie-button">View Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;
