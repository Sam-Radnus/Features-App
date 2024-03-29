import React,{useContext} from 'react'
import {LoginContext} from './Contexts/LoginContext'
import PropTypes from 'prop-types'

function Context(props) {
    const{setUsername,setShowProfile}=useContext(LoginContext);
  return (
    <div> 
    <input
    type="text"
    placeholder="username"
     onChange={(event)=>{
        setUsername(event.target.value);
     }}
     />
     <button 
     onClick={()=>{
         setShowProfile(true)
     }}>LOGIN</button>
    </div>
  )
}

Context.propTypes = {}

export default Context
