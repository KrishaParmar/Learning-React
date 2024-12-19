import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      data:"krisha"
    }
  }
  render(){
    return (
      <div className="App">
        <h1>hello {this.state.data}</h1>
      </div>
    );
  }
}

export default App;
