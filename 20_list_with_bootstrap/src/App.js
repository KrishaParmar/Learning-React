import logo from "./logo.svg";
import "./App.css";
import { Table } from 'react-bootstrap';

function App() {
  
  const obj = [
    {
      name: "krisha",
      email: "xyz@gmail.com",
      phoneNo: "111",
    },
    {
      name: "krishi",
      email: "xyzz@gmail.com",
      phoneNo: "222",
    },
    {
      name: "krish",
      email: "xy@gmail.com",
      phoneNo: "333",
    },
  ];
  return (
    <div className="App">
      <h1>List with bootstrap table</h1>
      <Table striped bordered hover>
        <tbody>
        <tr>
          <td>name</td>
          <td>email</td>
          <td>phoneNo</td>
        </tr>
        {obj.map((item,i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phoneNo}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
