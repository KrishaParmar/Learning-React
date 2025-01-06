import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  function ParentAlert(data){
    alert(`hello ${data}`)
  }
  return (

    <>
      <h1>Lifting State Up</h1>
      <User alert={ParentAlert}/>

    </>
  );
}

export default App;
