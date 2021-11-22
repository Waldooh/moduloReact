import React, { useEffect, useState } from 'react';
import User from './User';

const endpoint = "https://jsonplaceholder.typicode.com/users";



const Users = () => {
  const [users, setUsers] = useState([]);
  const [buscar, setbuscar] = useState('')
    
  useEffect(
    () => {
      console.log("Obteniendo datos de internet");
      fetch(endpoint).then((res) => {
        res.json().then((data) => {
          setUsers(data)
      });
    });
  }, []);

  const searchUser = (event) => {
    event.preventDefault();
    fetch(`${endpoint}?name=${buscar}`).then((res) => {
      res.json().then((data) => {
        setUsers(data)
      });
    });
  }

  // console.log("Renderizando componente")
  // console.log("Buscar: ", buscar)
    
    
const userStyle = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
};

    
  return (
    <div>
      <form onSubmit={searchUser}>
        <input 
          placeholder="Name"
          type="text" 
          value={buscar} 
          onChange={(e) => setbuscar(e.target.value)} 
        />
        <input 
          placeholder="Email"
          type="text" 
          value={buscar} 
          onChange={(e) => setbuscar(e.target.value)} 
        />
        <input type="submit" value="Enviar" />
      </form>
      <div style={userStyle}>
        {users
        // .filter((user) => user.name.includes(buscar))
        .map(({ id, name, username, email, website }) => (
          <User 
            key={id} 
            id={id}
            name={name} 
            username={username} 
            email={email} 
            website={website} 
          />
        ))}            
      </div>
    </div>
  )
};

export default Users;
