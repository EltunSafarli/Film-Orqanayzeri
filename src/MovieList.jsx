import './MovieList.css'
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, addMovieToSelected }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} addMovieToSelected={addMovieToSelected} />
      ))}
    </div>
  );
};

export default MovieList;
