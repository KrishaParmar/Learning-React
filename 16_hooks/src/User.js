import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';



//--------------------useEffect with conditional props--------------
function User(props) {


  useEffect(()=>{
    console.log("update count")
  },[props.count])
  useEffect(()=>{
    console.log("update data")
  },[props.data])
  return (
    <div className="App">
      <h2>count:{props.count}</h2>
      <h2>data:{props.data}</h2>

      

    </div>
  );
}

export default User;
