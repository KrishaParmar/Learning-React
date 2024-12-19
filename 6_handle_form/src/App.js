import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [name,setName] = useState("");
  const [options,selectOptions] = useState("");
  const [check,selectCheck]= useState(false)
  function getdetails(e){
    
    console.log(name,options,check);
    
    e.preventDefalut();
  }
  return (
    <div className="App">
      <form onSubmit={getdetails}>
      <h1>Form:</h1>
      <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} /> <br /><br />
      <select onChange={(e)=>selectOptions(e.target.value)} >
        <option >Select Options</option>
        <option >marvel</option>
        <option >dc</option>
      </select><br /><br />
      <input type="checkbox" onChange={(e)=>selectCheck(e.target.checked)} /> <span>accept conditions</span><br /><br />
      <button type='submit' >submit</button>
      </form>
    </div>
  );
}

export default App;
