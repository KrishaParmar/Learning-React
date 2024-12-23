import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      name :"krisha"
    }
    
    
  }
  componentDidMount(){
    console.log("componentDidMount");
    
  }
  render(){
    console.log("render")
    return (
      <div className="App">
        <h1>ComponentDidMount</h1>
        <h1>{this.state.name}</h1>
        <button onClick={()=>{this.setState({name:"parmar"})}}>updatename</button>
      </div>
    );
  }
}

export default App;
