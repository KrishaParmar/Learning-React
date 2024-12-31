import logo from "./logo.svg";
import "./App.css";
import { Table } from "react-bootstrap";

function App() {
  const obj = [
    {
      name: "krisha",
      email: "xyz@gmail.com",
      phoneNo: "111",
      address: [
        { number: 119, state: "gujrat", country: "india" },
        { number: 129, state: "up", country: "india" },
        { number: 119, state: "rajsthan", country: "india" },
        { number: 109, state: "karnataka", country: "india" },
      ],
    },
    {
      name: "krishi",
      email: "xyzz@gmail.com",
      phoneNo: "111",
      address: [
        { number: 119, state: "gujrat", country: "india" },
        { number: 129, state: "up", country: "india" },
        { number: 119, state: "rajsthan", country: "india" },
        { number: 109, state: "karnataka", country: "india" },
      ],
    },
    {
      name: "krish",
      email: "xy@gmail.com",
      phoneNo: "333",
      address: [
        { number: 119, state: "gujrat", country: "india" },
        { number: 129, state: "up", country: "india" },
        { number: 159, state: "rajsthan", country: "india" },
        { number: 109, state: "karnataka", country: "india" },
      ],
    },
  ];
  return (
    <div className="App">
      <h1>Nested List</h1>
      <h1>filter phoneNo</h1>
      <Table variant="dark" bordered hover striped>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>PhoneNo</td>
            <td>Address</td>
          </tr>

          {obj.map((item, i) =>
            item.phoneNo === "111" ? (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phoneNo}</td>
                <td>
                  <Table variant="dark" bordered hover striped>
                    <tr>
                      <td>Number</td>
                      <td>state</td>
                      <td>country</td>
                    </tr>

                    {item.address.map((item, i) => (
                      <tr key={i}>
                        <td>{item.number}</td>
                        <td>{item.state}</td>
                        <td>{item.country}</td>
                      </tr>
                    ))}
                  </Table>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
