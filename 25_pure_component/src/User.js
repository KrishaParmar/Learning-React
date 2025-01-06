import logo from './logo.svg';
import './App.css';
import React,{PureComponent} from 'react'

class User extends PureComponent {
  
 render(){
  console.warn("re-rendring")
  return (
    <div >
      <h1>Pure Component with props</h1>
      <h1>number :   {this.props.count}</h1>
      {/* <button onClick={()=>this.setState({count : this.state.count+ 1})}>Click me</button> */}
      
      


     
    </div>
  );
 }
}

export default User;
