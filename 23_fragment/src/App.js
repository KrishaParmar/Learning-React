import logo from './logo.svg';
import './App.css';
// import React,{Fragment} from 'react'
import Cols from './Cols';


function App() {
  return (
    <>
      <h1> React fragment </h1>
      <table>
        <tbody>
        <Cols/>
        <Cols/>
        <Cols/>
        <Cols/>
         
            
        </tbody>
      </table>
    </>
    /* <React.Fragment></React.Fragment> ----> 1 */
    // <Fragment></Fragment> ----> 2
    // <></> -----> 3
  );
}

export default App;
