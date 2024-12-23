import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      count:0
    }
    console.log("constructor");
    
  }
  componentDidUpdate(preProps,preState,snapShot){

    console.log("componentDidUpdate",preState.count,this.state.count);
    // if(this.state.count===preState.count){
    //   alert("count is same")
    // }
    // this.setState({count:this.state.count+1})-->give infinite loop
    // console.log("componentDidUpdate",snapShot);-->give value undifine
    
  }
  render(){
    console.log("render");
    
    return (
      <div className="App">
        <h1>hello {this.state.count}</h1>
        {/* <button onClick={()=>{this.setState({count:this.state.count+1})}}>Upadte name</button> */}
        <button onClick={()=>{this.setState({count:1})}}>Upadte name</button>

      </div>
    );
  }
}

export default App;
