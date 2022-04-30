import React from 'react'
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react'
import { useEffect } from 'react'
const Canvas = (props) => {
  const [weed,smokeWeed]=useState([]);
  const [url1,setURL]=useState('https://api.themoviedb.org/3/search/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&query=star&page=1&include_adult=false');
  async function cannabis(){
     const url=url1;
     const data=await fetch(url);
     const parsedData=await data.json();
     smokeWeed(parsedData.results)
     console.log(weed);
  }
  const ar1=[1,2,3];
  const ar2=[4,5,6];
  useEffect(()=>{
      console.log("rendering");
      cannabis();
  },[url1]);   //will cause a infinite loop since it is matched by reference and not by value
  
  return (
    <div>
         <button onClick={()=>{setURL('https://api.themoviedb.org/3/search/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&query=wars&page=1&include_adult=false')}}>{ar1===ar2?'true':'false'}</button>
         <button onClick={()=>{setURL('https://api.themoviedb.org/3/search/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&query=lord&page=1&include_adult=false')}}>{ar1===ar1?'true':'false'}</button>

    </div>
  )
}

export default Canvas