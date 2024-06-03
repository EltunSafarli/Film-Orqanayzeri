import './SelectedMovies.css'
import React, { useState } from 'react';

const SelectedMovies = ({ selectedMovies, removeMovie, setListName, saveList }) => {
  const [name, setName] = useState('');

  const handleSave = () => {
    setListName(name);
    saveList();
  };

  return (
    <div className="selected-movies">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter list name"
      /> 
      <button onClick={handleSave}>Save</button>
      <button onClick={() => alert('Go to basket clicked')}>Go to basket</button>
      <ul>
        {selectedMovies.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title}
            <button onClick={() => removeMovie(movie.imdbID)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedMovies;
