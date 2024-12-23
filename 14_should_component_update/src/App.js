import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends  React.Component{
  constructor(){
    super();
    this.state={
      count:0
    }
    console.log("constructor");
    
  }
  componentDidUpdate(){
    console.log("componentDidUpdate",this.state.count);
    
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate",this.state.count);
    if(this.state.count>5 && this.state.count<10){
      return true;
    }
    return false;
    
  }
  render(){
    console.log("render");
    
    return (
      <div className="App">
        <h1>ShouldComponentUpdate {this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update count</button>
      </div>
    );
  }
}
export default App;
