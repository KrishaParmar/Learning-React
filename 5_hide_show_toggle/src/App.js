import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [status,setValue] = useState(true);
  return (
    <div className="App">
      <button onClick={()=>setValue(false)}>hide</button>
      <button onClick={()=>setValue(true)}>show</button>
      <button onClick={()=>setValue(!status)}>toggle</button>
      
      {
        status?
        <h1>hello!</h1>:
        null
      }
    </div>
  );
}

export default App;
