// import React, { useState } from "react";

export default function Pro() {
  // const [loggedIn, setLogged] = useState(true);
  // const [data, setdata] = useState(7);
  const loggedIn = true;
  const data = 7;
  return (
    <div>
    <p>if in loggedIn set as true then return hello true else loggedin set as flase then return false</p>
      {loggedIn ? <h1>hello true</h1> : <h1>hello false</h1>}
      <p>in data value set as 1 or 2 then return hello 1 or hello 2 else return hello unknown</p>

      {data === 1 ? 
        <h1>hello 1</h1> : data === 2 ? 
        <h1>hello 2</h1>
      : 
        <h1>hello unknown</h1>
      }
    </div>
  );
}
