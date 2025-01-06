import logo from './logo.svg';
import './App.css';
import { useState, useMemo } from 'react';

function App() {
  // function multiCount(){
  //   console.log("multiCount function called!!");
    
  //  return count*2
  // }

  const [count,setCount] = useState(0)
  const [item,setItem] = useState(10)
  const multiMemoCount = useMemo(function multiCount(){
    console.log("multiCount function called!!");
    
   return count*2
  },[count])
  return (
    <div className="App">
      <h1>useMemo Hook in React</h1>
      <h2>count : {count}</h2>
      <h2>item : {item}</h2>
      {/* <h2>count x 2 = {multiCount()}</h2> */}
      <h2>count x 2 = {multiMemoCount}</h2>

      <br />
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setItem(item+1)}>Update Item</button>
    </div>
  );
}

export default App;
