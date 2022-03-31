import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
import PropTypes from 'prop-types';
function App() {
  var rows=[];
  
  for(var i=0;i<10;i++){
    rows.push(<Canvas row={i}/>)
  }
  return (
    <>
      <button type="button" class="btn btn-outline-dark">Dark</button>
      <tbody>{rows}</tbody>
      </>
  );
}

export default App;
