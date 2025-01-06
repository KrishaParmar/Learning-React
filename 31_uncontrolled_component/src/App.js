import logo from './logo.svg';
import './App.css';
import { useRef} from 'react';

function App() {

 let inputRef1 = useRef(null)
 let inputRef2 = useRef(null)
 


  function submithandle(e){
    e.preventDefault();
    console.log("input 1 : ",inputRef1.current.value);
    console.log("input 2 : ",inputRef2.current.value);
    let input3 = document.getElementById('input3').value
    console.log("input 3 : ",input3);
    
    
}
  return (
    <div className="App">
      <h1>Uncontrolled Component</h1>
      <form>
        <input type="text" ref={inputRef1}  /> <br/> <br/>
        <input type="text" ref={inputRef2}/> <br/> <br/>
        <input type="text" id='input3'  /> <br/> <br/>
        <button onClick={submithandle}>Submit</button>
      </form>
    </div>
  );
}

export default App;
