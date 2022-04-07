import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
import PropTypes from 'prop-types';
import MovieList from './components/MovieList';
import { Component, useState } from 'react';
export const App = () => {
  const [movies, setMovies] = useState([]);
  var rows = [];
  async function fetchMovie() {
    // const url='https://api.themoviedb.org/3/search/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-UK&query=Batman&page=1&region=GB';
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&primary_release_date.gte=2021-01-01&primary_release_date.lte=2022-01-01&language=en-US&page=1';
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setMovies(parsedData.results);
    //... spread attributes to make passing of results easiers
    console.log(movies);

  }



  return (
    <>

      <button className="btn btn-primary mx-5 my-5" onClick={fetchMovie}>click me</button>
      <div className='container'>
        <div className="row row-cols-4">
          {movies.map(movie => (

            <MovieList key={movie.id} imageURL={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} title={movie.title} details={movie.overview.slice(0,50)} date={movie.release_date} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
