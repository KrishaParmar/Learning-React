import logo from './logo.svg';
import './App.css';
import React,{createRef, useRef} from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.inputRef = createRef();
  }

  getval(){
    console.log(this.inputRef.current.value);
    this.inputRef.current.style.color = "red"
  }
  render(){
    return (
      <div className="App">
        <h1>Ref in react</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={()=>this.getval()}>click here</button>
      </div>
    );
  }
}

export default App;
