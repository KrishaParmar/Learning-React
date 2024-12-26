import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';

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

// function App() {
//   const [count,setcount] = useState(0)
//   useEffect(()=>{
//     console.log("hello")
//   })
//   return (
//     <div className="App">
//       <h1>useEffect</h1>
//       <h2>{count}</h2>
//       <button onClick={()=>setcount(count+1)}>+ count</button>
//     </div>
//   );
// }

//----------------useEffect with conditional state------------------

function App() {
  const [count,setcount] = useState(100)
  const [data,setdata] = useState(10)

  useEffect(()=>{
    console.log("update count")
  },[count])
  useEffect(()=>{
    console.log("update data")
  },[data])
  return (
    <div className="App">
      <h1>useEffect with conditional state</h1>
      <h2>{count}</h2>
      <h2>{data}</h2>

      <button onClick={()=>setcount(count+1)}>+ count</button>
      <button onClick={()=>setdata(data+1)}>+ data</button>

    </div>
  );
}

export default App;
