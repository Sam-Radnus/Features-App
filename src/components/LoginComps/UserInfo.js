import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function UserInfo(props) {
  let { username } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovies = async () => {
    // const url="https://api.themoviedb.org/3/movie/latest?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US";
    const url = `https://api.themoviedb.org/3/movie/${username}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US`;
    const data = await fetch(url);
 
    const parsedData = await data.json();
    console.log(parsedData);
    setMovie(parsedData);
    console.log(movie);
  }
  useEffect(() => {
    getMovies();
  }, [movie.length]);

  return (
    <div><h2>UserInfo ABOUT {username}</h2>
      { movie &&

                  <div>
                    <h1>{movie.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}/>
                  </div>
      
           
      } 
    </div>
  )
}

UserInfo.propTypes = {}

export default UserInfo
