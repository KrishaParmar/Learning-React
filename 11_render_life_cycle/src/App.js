import logo from './logo.svg';
import './App.css';
import User from './User'
import { useState } from 'react';

function App() {
  // const [name,setName] = useState("krisha")
  return (
    <div className="App">
      <h1>App component</h1>
      {/* <User name={name}/> */}
      <User/>
      {/* <button onClick={()=>setName("krishaparmar")}>change user name</button> */}
      
    </div>
  );
}

export default App;
