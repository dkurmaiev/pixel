// src/components/movies/MovieList.js

import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css'; // Подключаем файл стилей

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
