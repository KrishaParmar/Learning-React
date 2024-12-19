import { useState } from 'react';
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
  // ------------------- useState with string--------------------
  // const [data,setData] = useState("krisha");
  // console.warn("------------------");
  
  // function name(){
  //   return(
  //     setData("krisha parmar")
  //   )
  // }
  // return (
  //   <div className="App">
  //     <h1>{data}</h1>
  //     <button onClick={name} >ClickMe</button>
  //   </div>
  // );


  //---------------------usestate with value----------
//   const [data,setData] = useState(0);
//   console.warn("------------------");
  
//   function name(){
//     return(
//       setData(data+1)
//     )
//   }
//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={name} >ClickMe</button>
//     </div>
//   );
// }
 

// //-----------------class component with useState with string-------------
// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       data:"krisha"
//     }
//   }
//   apple(){
//     this.setState({data:"krisha parmar"})
//     alert("apple")
//   }
//   render(){
//     return(
//       <div  className="App">
//           <h1>{this.state.data}</h1>
//           <button onClick={()=>this.apple()}>Click Me</button>
//       </div>
//     )
//   }
// }
// /-----------------class component with useState with string-------------
class App extends Component{
  constructor(){
    super();
    this.state={
      data:1
    }
  }
  apple(){
    this.setState({data:this.state.data+1})
    
  }
  render(){
    return(
      <div  className="App">
          <h1>{this.state.data}</h1>
          <button onClick={()=>this.apple()}>Click Me</button>
          <p>value will be increse</p>
      </div>
    )
  }
}


export default App;
