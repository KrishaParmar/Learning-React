import logo from './logo.svg';
import './App.css';
import User from './User';
import { useRef } from 'react';

function App() {
  let inputRef = useRef(null)
  function handlevalue(){
    console.log("function called");
    inputRef.current.value = "1000"
    
  }
  return (
    <div className="App">
      <h1>forwardRef in react</h1>
      <User ref={inputRef}/>
      <button onClick={handlevalue}>Handle Value</button>

    </div>
  );
}

export default App;
