import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  const student = [
    {name:"krisha",email:"xyz@gmail.com",phoneno:122},
    {name:"krish",email:"xyzz@gmail.com",phoneno:102},
    {name:"krishi",email:"xyyyz@gmail.com",phoneno:722}

  ]
  return (
    <div className="App">
      {/* {
        student.map((item)=>
        <div>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.phoneno}</p>
          </div>
        
        )
      } */}
      <h1>reuse component</h1>
      {student.map((item)=>
        <User data={item}/> 
        
        )}
      
    </div>
  );
}

export default App;
