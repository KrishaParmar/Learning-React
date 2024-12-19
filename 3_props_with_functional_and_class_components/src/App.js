import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import { Student } from './student'; //functinal component
import { Studentc } from './Studentc'; //class component

// function App() {
//   const [name,setName] = useState("krisha")
//   return (
//     <div className="App">
//       <h1>props in react :</h1>
//       {/* <Student name={"krisha"} email="krisha@test.com" other={{address:"abc", phoneno:"000"}}/>
//       <Student name={"kris"} email="krisha@test.com" other={{address:"abc", phoneno:"000"}}/>
//       <Student name={"krish"} email="krisha@test.com" other={{address:"abc", phoneno:"000"}}/> */}
//       <Student name={name} />
//       <button onClick={()=>{setName("krisha parmar")}}>Click Me</button>
//  {/* class component */}
//  <Studentc name = "krisha"/>



//     </div>
//   );
// }
 {/* class component */}
class App extends React.Component{
  constructor(){
    super();
    this.state={
      name :"krisha"
    }
  }
  render(){
    return(
      <div className="App">
        <Studentc name = {this.state.name}/>
        <button onClick={()=>this.setState({name:"krisha parmar"})}>Click Me</button>

      </div>
    )
  }
}
export default App;
