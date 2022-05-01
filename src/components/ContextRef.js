import React, { useState,useContext,createContext } from 'react'
import PropTypes from 'prop-types';
import Context from './Context';
import Username from './Username';

export const AppContext=createContext(null);

function ContextRef(props) {
    const [username,setUsername]=useState("");
  return (
    <div>ContextRef
    <AppContext.Provider value={{username,setUsername}}>
        <Context/><Username/>
    </AppContext.Provider>
    </div>
  )
}

ContextRef.propTypes = {}

export default ContextRef
