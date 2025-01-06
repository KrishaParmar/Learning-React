import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Higher Order Component</h1>
      {/* <Counter/> */}
      <Hodblue cmp={Counter}/>
      <Hodred cmp={Counter}/>
    </div>
  );
}
function Hodblue(props){
  return<div>
    <h2 style={{backgroundColor : 'blue',width : 100}}><props.cmp/></h2>
  </div>
}
function Hodred(props){
  return<div>
    <h2 style={{backgroundColor : 'red',width : 100}}><props.cmp/></h2>
  </div>
}
function Counter(){
const  [count,setCount] =useState(0)
return<div>
  <h2>{count}</h2>
  <button onClick={()=>setCount(count+1)} >Update</button>
</div>
}

export default App;
