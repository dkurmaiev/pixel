// src/components/movies/MovieDetails.js

import React from 'react';
import { Link } from 'react-router-dom';
import './MovieDetails.css'; // Подключаем файл стилей

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-details">
      <img src={movie.posterPath} alt={movie.title} className="movie-details-poster" />
      <div className="movie-details-info">
        <h2>{movie.title}</h2>
        <p>{movie.synopsis}</p>
        <Link to={`/booking/${movie._id}`} className="movie-details-button">Book Now</Link>
      </div>
    </div>
  );
};

export default MovieDetails;
