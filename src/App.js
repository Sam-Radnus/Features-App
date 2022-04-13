import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react'
import { useEffect } from 'react'
import { Component } from 'react';
function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue(value => Math.random());
}


function App() {
  const [movieName1, setMovieName1] = useState('');
  const [genreAR1, setGenre1] = useState([]);
  const [genreAR2, setGenre2] = useState([]);
  const [commonGenre, setCommon] = useState([]);
  const [movieName2, setMovieName2] = useState('');

  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    fetchData1();
    fetchData2();
    findCommon();
  }, [genreAR1.length,genreAR2.length]);
  const fetchData1 = async () => {
  
    const url1 = 'https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2022-12-31&vote_average.gte=6&with_genres=53';
    const data1 = await fetch(url1);
    const parsedData1 = await data1.json();
    let x = parsedData1.results[0].genre_ids;
    setGenre1(x);
    console.log(genreAR1);
    setMovieName1(parsedData1.results[0].title);
  }
  const fetchData2 = async () => {
  
    const url2='https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=2022-12-31&vote_average.gte=6&with_genres=80';
    const data2=await fetch(url2);
    const parsedData2=await data2.json();
  
    let y=parsedData2.results[1].genre_ids;
    console.log(y);
    setGenre2(y);
    console.log(genreAR2);
    setMovieName2(parsedData2.results[1].title);
  }
  
  const findCommon=async()=>{
    var data=[genreAR1,genreAR2];
    let result=data.reduce((a,b)=>a.filter(c=>b.includes(c)));
    let search=JSON.stringify(result);
    console.log(search);
    console.log(search.slice(1,search.length-1));
    const url=`https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&with_genres=${search.slice(1,search.length-1)}`
    const common=await fetch(url);
    const parsedData=await common.json();
    console.log(parsedData.results);
    setCommon(parsedData.results);
  }
  const addOne = useCallback(() => {
    console.log(genreAR1);
    console.log(genreAR2);
    //findCommon();
    console.log(commonGenre[0]);
  }, [genreAR1.length,genreAR2.length,JSON.stringify(commonGenre)]);

  const sum = numbers.reduce((a, v) => a + v, 0);

  return (
    <>
      <div>
        <button type="button" onClick={addOne} className="btn btn-outline-dark mx-5 my-5">Dark</button>
        <p id="number">{JSON.stringify(numbers)}</p>
        <p id="sum">{sum}</p>
      </div>

    </>
  );
}

export default App;
