import React from 'react'


const Post = ({ title, body }) => {
    
    const userStyle = {
        border: '1px solid gray',
        borderRadius: '10px',
        boxShadow: '4px 4px 20px #555',
        backgroundColor: '#FFF',
        margin: '10px',
    }


    return (
        <div style={userStyle}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default Post
