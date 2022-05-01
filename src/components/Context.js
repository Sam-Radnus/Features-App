import React,{useContext} from 'react'
import { AppContext } from './ContextRef'
import PropTypes from 'prop-types'

function Context(props) {
    const{setUsername}=useContext(AppContext);
  return (
    <div> 
    <input
     onChange={(event1)=>{
        setUsername(event1.target.value);
     }}
     />
    </div>
  )
}

Context.propTypes = {}

export default Context
