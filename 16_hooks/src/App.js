import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [data,setData] = useState("krisha")
  return (
    <div className="App">
      <h1>useState</h1>
      <h2>{data}</h2>
      <button onClick={()=>(setData("parmar"))}>update name</button>
    </div>
  );
}

export default App;
