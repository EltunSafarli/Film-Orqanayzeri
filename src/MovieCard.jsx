import React from 'react';
import './MovieCard.css'
const MovieCard = ({ movie, addMovieToSelected }) => {
  return (
   
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <button onClick={() => addMovieToSelected(movie)}>Add to list</button>
        <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" rel="noopener noreferrer">
          <button>Read More</button>
        </a>
      </div>
    </div>

  );
};

export default MovieCard;
