import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import SelectedMovies from './SelectedMovies';
import './App.css';
import Title from './Title.jsx';

let App = () => {
  let [movies, setMovies] = useState([]);
  let [selectedMovies, setSelectedMovies] = useState([]);
  let [listName, setListName] = useState('');

  useEffect(() => {
    fetchDefaultMovies();
  }, []);

  let fetchDefaultMovies = async () => {
    let response = await fetch(`http://www.omdbapi.com/?s=star&apikey=33e06181`);
    let data = await response.json();
    if (data.Search) {
      setMovies(data.Search.slice(0, 10));
    }
  };

  let handleSearch = async (query) => {
    let response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=33e06181`);
    let data = await response.json();
    if (data.Search) {
      setMovies(data.Search.slice(0, 10));
    }
  };

  let addMovieToSelected = (movie) => {
    if (!selectedMovies.find((m) => m.imdbID === movie.imdbID)) {
      setSelectedMovies([...selectedMovies, movie]);
    }
  };

  let removeMovieFromSelected = (imdbID) => {
    setSelectedMovies(selectedMovies.filter((movie) => movie.imdbID !== imdbID));
  };

  let saveList = async () => {
    if (!listName) return;
    let response = await fetch('https://acb-api.algoritmika.org/api/movies/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: listName,
        movies: selectedMovies.map((movie) => movie.imdbID),
      }),
    });
    let data = await response.json();
    if (data.id) {
      window.location.href = `/list/${data.id}`;
    }
  };

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />
      <Title /> 
      <MovieList movies={movies} addMovieToSelected={addMovieToSelected} />
      <SelectedMovies
        selectedMovies={selectedMovies}
        removeMovie={removeMovieFromSelected}
        setListName={setListName}
        saveList={saveList}
      />
    </div>
  );
};

export default App;
