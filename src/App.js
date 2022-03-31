import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
import PropTypes from 'prop-types';
import { Component, useState } from 'react';
function useForceUpdate(){
  const [value,setValue]=useState(0);
  return()=>setValue(value=>Math.random());
}

function generateNum(){
  var x=document.getElementById('number');
  x.innerHTML=Math.random();
}
function App() {
  var rows=[];
  const forceUpdate=useForceUpdate();
  for(var i=0;i<10;i++){
    rows.push(<Canvas row={i}/>)
  }
  return (
    <>
      <div>
      <button type="button" onClick={forceUpdate} className="btn btn-outline-dark mx-5 my-5">Dark</button>
     <p id="number">{Math.random()}</p>
     
     </div>
      <tbody onClick={generateNum}>{rows}</tbody>
      </>
  );
}

export default App;
