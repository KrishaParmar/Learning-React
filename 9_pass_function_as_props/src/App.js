import logo from './logo.svg';
import User from './User'
import User1 from './User1'
import './App.css';

function App() {
  function getcall(){
    alert("hello child")
  }
  return (
    <div className="App">
      <User data={getcall}/>
      <User1 data={getcall}/>
    </div>
  );
}

export default App;
