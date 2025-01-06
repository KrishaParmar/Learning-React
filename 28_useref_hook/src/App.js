import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
  let inputRef = useRef(null);
  function handlevalue(){
    console.log("function called");
    // inputRef.current.value = "1000";
    inputRef.current.style.color = "Red";
    inputRef.current.focus();
  }
  return (
    <div className="App">
      <h1>useRef  in react</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handlevalue}>Handle here</button>
    </div>
  );
}

export default App;
