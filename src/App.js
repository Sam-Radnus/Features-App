import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
import PropTypes from 'prop-types';
import { Component, useState } from 'react';
function useForceUpdate(){
  const [value,setValue]=useState(0);
  return()=>setValue(value=>Math.random());
}

function generateNum(){
  var x=document.getElementById('number');
  x.innerHTML=Math.random();
}
async function fetchFalsey()
{
  const url='https://newsapi.org/v2/top-headlines?q=UK&apiKey=2902e07919cb4e268ec388cc3f930a7e';
  let data=await fetch(url);
  console.log(!!document.getElementById('falsey'));
  console.log(document.getElementById('falsey'));
}
async function fetchMovie()
{
 // const url='https://api.themoviedb.org/3/search/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-UK&query=Batman&page=1&region=GB';
  const url='https://api.themoviedb.org/3/discover/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&primary_release_date.gte=2021-01-01&primary_release_date.lte=2022-01-01&language=en-US&page=1';
  let data=await fetch(url);
  let parsedData=await data.json();
  console.log(parsedData);
}
function App() {
  var rows=[];
  const forceUpdate=useForceUpdate();
  for(var i=0;i<10;i++){
    rows.push(<Canvas row={i}/>)
  }
  return (
    <>
      <div>
      <button type="button" onClick={forceUpdate} className="btn btn-outline-dark mx-5 my-5">Dark</button>
     <p id="number">{Math.random()}</p>
     
     </div>
      <tbody onClick={fetchMovie}>{rows}</tbody>

      </>
  );
}

export default App;
