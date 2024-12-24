
import './App.css';
import React from 'react';

class Student extends React.Component{
    componentWillUnmount(){
        // alert("componentWillUnmount called")
        console.warn("componentWillUnmount called");
        
    }
  render(){
    return (
      <div className="App">
        <h1>student component</h1>
      </div>
    );
  }
}

export default Student;
