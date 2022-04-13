import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
import PropTypes from 'prop-types';
import MovieList from './components/MovieList';
import { Component, useState } from 'react';
import { useEffect } from 'react';
export const App = () => {
  const [movieName1, setMovieName1] = useState('');
  const [genreAR1, setGenre1] = useState([]);
  const [genreAR2, setGenre2] = useState([]);
  const [genreAR3, setGenre3]=  useState([]);
  const [commonGenre, setCommon] = useState([]);
  const [movieName2, setMovieName2] = useState('28');

  useEffect(() => {
    asyncData();
  }, [genreAR3.length])
  const asyncData = async () => {

    const url1 = 'https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2022-12-31&vote_average.gte=6&with_genres=53';
    const data1 = await fetch(url1);
    if (data1.length !== 0) {
      const parsedData1 = await data1.json();
      let x = parsedData1.results[0].genre_ids;

      setGenre1(x);
      console.log(genreAR1);
      setMovieName1(parsedData1.results[0].title);
    }
    else {
      console.log("Failure");
    }

    const url2 = 'https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2022-12-31&vote_average.gte=6&with_genres=80';
    const data2 = await fetch(url2);
    if (data2.length !== 0) {
      const parsedData2 = await data2.json();

      let y = parsedData2.results[1].genre_ids;
      console.log(y);
      setGenre2(y,findCommon());
      console.log(genreAR2);
      setMovieName2(parsedData2.results[1].title);
    }
    else {
      console.log("Failure");
    }
    findCommon();
    console.log(commonGenre);
  }

  const findCommon = async () => {
    var data = [genreAR1, genreAR2];
    let result = data.reduce((a, b) => a.filter(c => b.includes(c)));
    let search = JSON.stringify(result);
    console.log(search);
    console.log(search.slice(1, search.length - 1));
    setGenre3(search.slice(1, search.length - 1));
    console.log(genreAR3);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&with_genres=${search.slice(1, search.length - 1)}`
    const common = await fetch(url);
    if (common.length !== 0) {
      const parsedData = await common.json();
      console.log(parsedData.results);
      setCommon(parsedData.results);
      console.log(commonGenre)
    }
    else {
      console.log("Failure");
    }
  }
  return (
    <>

      <button className="btn btn-primary mx-5 my-5">click me</button>
      <div className='container'>
        <div className="row row-cols-4">
          <h1></h1>

        </div>
      </div>
    </>
  );
}

export default App;
