import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [val,setVal] = useState("");
  const [item,setItem] = useState(0)
  return (
    <div className="App">
      <h1>Controlled Component</h1>
      <input type="text" value={val} defaultValue={"000"} onChange={(e)=>setVal(e.target.value)} />
      <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
      <h3>value : {val}</h3>
      <h3>item : {item}</h3>
    </div>
  );
}

export default App;
