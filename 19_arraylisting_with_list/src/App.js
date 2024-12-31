import logo from './logo.svg';
import './App.css';

function App() {
  const arr = ['one','two','three','four'];
  const obj = [
    {
      name:"krisha",email:"xyz@gmail.com",phoneNo:"111"
    },{
      name:"krishi",email:"xyzz@gmail.com",phoneNo:"222"
    },{
      name:"krish",email:"xy@gmail.com",phoneNo:"333"
    }
  ]
  return (
    <div className="App">
     <h1>Handle Array with List</h1>
     {arr.map((item)=>
      <h1>number is {item}</h1>
     )}
     <table border={1}>
     <tr>
          <td>name</td>
          <td>email</td>
          <td>phoneNo</td>
      </tr>
     {
      obj.map((item)=>
        <tr>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phoneNo}</td>
        </tr>
      )
     }
     </table>
    </div>
  );
}

export default App;
