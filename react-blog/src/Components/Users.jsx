import React, { useEffect, useState } from 'react'
import User from './User';

const endpoint = "https://jsonplaceholder.typicode.com/users";



const Users = () => {
    const [users, setUsers] = useState([])
    
    useEffect(
    () => {
        fetch(endpoint).then((res) => {
            res.json().then((data) => {
                setUsers(data)
            });
        });
    },
    []
    );
    
    
    const userStyle = {
    display: "flex",
    flexWrap: "wrap",
    };
    
    
    return (
        <div style={userStyle}>
            {users.map(({ id, name, username, email, website }) => (
                <User 
                    key={id} 
                    name={name} 
                    username={username} 
                    email={email} 
                    website={website} 
                />
            ))}            
        </div>
    )
};

export default Users;
