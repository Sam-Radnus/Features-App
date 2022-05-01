import React ,{useEffect,useContext}from 'react'
import PropTypes from 'prop-types'
import {AppContext} from "./ContextRef";
function Username(props) {
    const {username}=useContext(AppContext);
  return (
    <div>
      { username.length!==0?<h1>User:{username}</h1>:''}
    </div>
  );
}

Username.propTypes = {}

export default Username
