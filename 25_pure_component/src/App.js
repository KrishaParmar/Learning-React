import logo from './logo.svg';
import './App.css';
import React,{PureComponent} from 'react'
import User from './User';

class App extends PureComponent {
  constructor(){
   super()
   this.state={
    count:1
   }
  }
 render(){
  // console.warn("re-rendring")
  return (
    <div >

    {/* ---------------------state--------------- */}
      {/* <h1>Pure Component(with)</h1>
      <h1>number :   {this.state.count}</h1>
      {/* <button onClick={()=>this.setState({count : this.state.count+ 1})}>Click me</button> */}
      {/* <button onClick={()=>this.setState({count : 1})}>Click me</button> */} 


      {/* --------------------props----------------- */}
      <User count={this.state.count}/>
      <button onClick={()=>this.setState({count : 1})}>Click me</button>








     
    </div>
  );
 }
}

export default App;
