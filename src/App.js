import React, { useState } from "react";
import './styles.css';

const App=()=>{

  const [Users, setUser] = useState([]);

  const loadUsers = async()=>{
    //console.log('before');
    const response = await fetch ("https://api.github.com/users");
    const jsonresponse = await response.json();
    setUser(jsonresponse);
  };

  return ( 
    <div className="App">
      <h1> <b>Hello Everyone! Click Here To Get Data</b></h1>
      <button onClick={loadUsers}>Get Data</button>
      <h2>Users:</h2>
      <ul>
        {Users.map(({id, login, avatar_url})=>(
          <li key={id}>
            Nmae: {login} <br></br>
            Avatar:  {avatar_url}
          </li>
        ))}
      </ul>
    </div>
);
};
export default App;