import React, { useState, useEffect } from 'react'
import Post from './Post';

const endpoint = "https://jsonplaceholder.typicode.com/posts"



const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(
        () => {
            fetch(endpoint).then((res) => {
                res.json().then((data) => {
                    setPosts(data);
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
            {posts.map(({ id, title, body }) => (
                <Post 
                    key={id}
                    title={title}
                    body={body}
                />
            ))}
        </div>
    );
};

export default Posts;
