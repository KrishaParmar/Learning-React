import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <h1>hey User!</h1>
      <Button onClick={()=>alert("hello")}>click me</Button>
    </div>
  );
}

export default App;
