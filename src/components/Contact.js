import React from 'react'
import PropTypes from 'prop-types'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
function Contact(props) {
  const [intervalz, setIntervalz] = useState(3000); //initial state here represents the interval for first image.
  const onChange = (index, item) => {
    setIntervalz(item.props["data-interval"]);
  };
  return (
    <div>
     <h1>Contact</h1>
     <Carousel onChange={onChange}
      autoPlay
      interval={intervalz}
      infiniteLoop={true}
      showIndicators={false}
      width={150}  
      axis='vertical'>
        
           <div data-interval={1000}>
                    <img  src="https://media.istockphoto.com/vectors/cannabis-leaf-vector-vector-id1156847000" /> 
                    
                    <p className="legend"><h1>Star Wars</h1></p>
                </div>
                <div data-interval={3000}>
                     <img src="https://media.istockphoto.com/vectors/cannabis-or-marijuana-leaves-vector-id1070572972" /> 
                    <p className="legend">Legend 2</p>
                </div>
                <div data-interval={5000}>
                    <img src="https://media.istockphoto.com/vectors/solid-black-cannabis-marijuana-leaf-vector-icon-vector-id1140417105?s=612x612" /> 
                    <p className="legend">Legend 3</p>
                </div>
                <div data-interval={7000}>
                    <img  src="https://media.istockphoto.com/vectors/cannabis-leaf-vector-vector-id1156847000" /> 
                    <p className="legend">Legend 1</p>
                </div>
                <div data-interval={9000}>
                     <img  src="https://media.istockphoto.com/vectors/cannabis-or-marijuana-leaves-vector-id1070572972" /> 
                    <p className="legend">Legend 2</p>
                </div>
                <div data-interval={11000}>
                    <img h src="https://media.istockphoto.com/vectors/solid-black-cannabis-marijuana-leaf-vector-icon-vector-id1140417105?s=612x612" /> 
                    <p className="legend">Legend 3</p>
                </div>
                
            </Carousel>
    </div>
  )
}

Contact.propTypes = {}

export default Contact
