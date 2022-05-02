import React ,{useEffect,useContext}from 'react'
import PropTypes from 'prop-types'
import {LoginContext} from './Contexts/LoginContext'
function Username(props) {
    const {username}=useContext(LoginContext);
  return (
    <div>
     <h1>User:{username}</h1>
    </div>
  );
}

Username.propTypes = {}

export default Username
