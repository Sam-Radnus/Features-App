import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Details from './LoginComps/Details'
import UserInfo from './LoginComps/UserInfo'
import {BrowserRouter as Router,Link,Routes,Route, Outlet} from 'react-router-dom';
import "./Login.css";
import {useMatch} from 'react-router-dom';
import { getSuggestions } from './Api';
import Context from './Context';
import Username from './Username';
import SuggestionList from './SuggestionList';
import ContextRef from './ContextRef';
function Login({onSearch}) {
    // const {path,url}=useMatch();
    const [searchField,setSearchField]=useState("");
    const [movie,setMovie]=useState([]);
    const [suggestions,setSuggestions]=useState([]);
    const [skipSuggestionSearch,setSkipSuggestionSearch]=useState(false);
    const [input,setInput]=useState('');
    useEffect(()=>{
      if(searchField === "" || skipSuggestionSearch) return;
      getMovies(searchField).then((foundSuggestions)=>{
        setSuggestions(foundSuggestions);
      })
     console.log(input);
    },[input,searchField,skipSuggestionSearch]);
    const hasSuggestions=movie.length > 0;
    const getMovies=async (searchField)=>{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&query=${searchField}&page=1&include_adult=false`;
      const data=await fetch(url);
      const parsedData=await data.json();
      setMovie(parsedData.results);
    }
    const searchFieldChanged=(e)=>{
      setSkipSuggestionSearch(false);
      const value=e.target.value;
      if(value === "")
      {
        setSuggestions([]);
      }
      setSearchField(value);
    }; 
    const suggestionClicked=(suggestion)=>{
      setSkipSuggestionSearch(true);
      setSuggestions([]);
      setSearchField(suggestion);
    };
    const handleChange=(e)=>{
      const {value}=e.target;
      const lastChar=value.slice(-1);
      const isLetter=(/[a-zA-Z]/).test(lastChar);
      if(isLetter && !input.includes(lastChar))
          setInput(value);
    }
    const handleKeyDown=(e)=>{
      if(e.code == 'Backspace'){
        setInput(input.slice(0,input.length-1))
      }
    }
  return (
   <div>
       <div>
        <h1>Login</h1>
        <div className='links'>
        {/* {console.log(path)} */}
        <Link to="Details">Details</Link>
              
        <Link to="UserInfo">UserInfo</Link>
        </div>
           <Outlet/>
        </div>
        <input value={searchField} onChange={searchFieldChanged}/>
        <button onClick={()=>onSearch(searchField)}>Search</button>
        {hasSuggestions && (
          <div className='suggestions'>
            {movie.map((suggestion)=>(
              <div onClick={() => suggestionClicked(suggestion.title)} > <SuggestionList   title={suggestion.title} image={`https://image.tmdb.org/t/p/w45${suggestion.backdrop_path}`}/></div>
            ))}
            </div>
        )}
        <ContextRef/>
         <input value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          />
        </div>  
  )
}

Login.propTypes = {}

export default Login
