import React from 'react'
import PropTypes from 'prop-types'
import Details from './LoginComps/Details'
import UserInfo from './LoginComps/UserInfo'
import {BrowserRouter as Router,Link,Routes,Route, Outlet} from 'react-router-dom';
import {useMatch} from 'react-router-dom';
function Login(props) {
    // const {path,url}=useMatch();
  return (

    <div>
        <h1>Login</h1>
        <div className='links'>
        {/* {console.log(path)} */}
        <Link to="Details">Details</Link>
        
        <Link to="UserInfo">UserInfo</Link>
        </div>
           <Outlet/>
        </div>
  )
}

Login.propTypes = {}

export default Login
