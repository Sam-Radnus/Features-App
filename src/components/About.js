import React from 'react'
import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom';
function About(props) {
  let {state}=props;
  const location=useLocation();
  return (
    <div>
       <h1>About</h1>
       {console.log(props.state)}
        </div>
  )
}

About.propTypes = {}

export default About
