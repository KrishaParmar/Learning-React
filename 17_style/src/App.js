import logo from './logo.svg';
import './App.css';
import './style.css';
import style from './stop.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='primary'>This is style 1</h1>
      <h1 style={{color:'red' , backgroundColor:'black'}}>This is style 2</h1>
      <h1 className={style.noice}>This is style 3</h1>
    </div>
  );
}

export default App;
