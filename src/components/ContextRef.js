import React, { useState,useContext,createContext } from 'react'
import PropTypes from 'prop-types';
import Context from './Context';
import Username from './Username';
import {LoginContext} from './Contexts/LoginContext' 


function ContextRef(props) {
    const [showProfile,setShowProfile]=useState(false);
    const [username,setUsername]=useState("");
  return (
    <div>ContextRef
    <LoginContext.Provider value={{username,setUsername,setShowProfile}}>
      { showProfile?<Username/>:<Context/>}
    </LoginContext.Provider>
    </div>
  )
}

ContextRef.propTypes = {}

export default ContextRef
