import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {
  //-----------------with input text without button--------------
  // const [data,setValue] = useState(null)
  // function getdata(val){
  //   console.log(val.target.value);
    
  //   setValue(val.target.value)
  // }

  // return (
  //   <div className="App">
  //   <h1>get the input value</h1>
  //     <h1>{data}</h1>
  //     <input type="text" onChange={getdata}  />
  //   </div>
  // );


  //--------------------with button get text-------------------
  const [data,setValue] = useState(null)
  const [print,setprint]=useState(false)
  function getdata(val){
    console.log(val.target.value);
    setValue(val.target.value)
    
  }
  return(
    <div className='App'>
      <h1>get input value with button</h1>
      <input type="text" onChange={getdata} />
      <button onClick={()=>setprint(true)}>Click me</button>
      {
        print? 
        <h1>{data}</h1>:null
      }
    </div>
  )
}

export default App;
