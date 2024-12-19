import logo from './logo.svg';
import './App.css';
import { User1 } from './User1';
import React ,{ Component } from 'react';
import UserC from './UserC';

function App() {
  // functional Component
  function Hello(){
    return(
      <div>
        <h1> i am fine !</h1>
      </div>
    )
  }
  //class component --> but not use in <fish />
  // class fish extends Component{
  //   render(){
  //     return(
  //       <div>
  //         from the fish class
  //       </div>
  //     )
  //   }
  // }

  //click event
  let name = "krisha"
  function clicked(){
    name = "krisha parmar"
    alert("hey! thanks for clicking")
    alert(name)
  }
  return (
    <div className="App">
      <h1>Hello {name}</h1> {/*not use direct variable because after update var not change in this value*/}
      <User1 />
      <Hello />
      <UserC />
      {Hello()}
      <button onClick={clicked}>Click me</button>
    </div>
  );
}


export default App;
