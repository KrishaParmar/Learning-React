import logo from './logo.svg';
import './App.css';
import React from 'react';
import Student from './student';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      value:true
    }
  }
  render(){
    return (
      <div className="App">
        <h1>class component</h1>
        {
          this.state.value?<Student/>: <h1>hey</h1>
        }
        <button onClick={()=>{this.setState({value:!this.state.value})}}>toggle</button>
      </div>
    );
  }
}

export default App;
