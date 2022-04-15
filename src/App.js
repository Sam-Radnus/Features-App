import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react'
import { useEffect } from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import { Component } from 'react';
import Details from './components/LoginComps/Details';
import UserInfo from './components/LoginComps/UserInfo';
import {useNavigate} from "react-router-dom"
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom';
function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue(value => Math.random());
}
function App() {
  return (
    <>
    <Router>
      
      <div style={{display:'inline'}}>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Login">Login</Link>
      <Routes>
        <Route exact path="/About" element={<About/>}></Route>
        <Route exact path="/Contact" element={<Contact/>}></Route>
        <Route exact path="/Login" element={<Login/>}>
          <Route  path="Details" element={<Details/>}/>
          <Route  path="UserInfo/:username" element={<UserInfo/>}/>
        </Route>
      </Routes>
      
      </div>
      </Router>
    </>
  );
}

export default App;
