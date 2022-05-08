import React from 'react'
import PropTypes from 'prop-types'
import {useEffect,useState} from 'react';
import About from './About';
function Fetch(props) {
const [estates, setEstates] = useState('');
useEffect(()=>{
   
},[estates]);
const filterEstatesUp = () => {
    // just sorting an array of objects

    setEstates('5')
}
const filterEstatesDown = () => {
    // just sorting an array of objects
   // const filteredEstates = estates.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
    setEstates('7') 
}

  return (
    <div>
         <div onClick={() => filterEstatesUp()}>up</div>
            <div onClick={() => filterEstatesDown()}>down</div>
            <About/>{estates}
    </div>
  )
}


Fetch.propTypes = {}

export default Fetch
