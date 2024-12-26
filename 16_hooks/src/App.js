import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect, use} from 'react';

//-----------------useState-------------

// function App() {
//   const [data,setData] = useState("krisha")
//   return (
//     <div className="App">
//       <h1>useState</h1>
//       <h2>{data}</h2>
//       <button onClick={()=>(setData("parmar"))}>update name</button>
//     </div>
//   );
// }

//----------------------------useEffect-----------

function App() {
  const [count,setcount] = useState(0)
  useEffect(()=>{
    console.log("hello")
  })
  return (
    <div className="App">
      <h1>useEffect</h1>
      <h2>{count}</h2>
      <button onClick={()=>setcount(count+1)}>+ count</button>
    </div>
  );
}

export default App;
