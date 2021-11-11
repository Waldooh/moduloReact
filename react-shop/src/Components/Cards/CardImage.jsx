import React from 'react'

const CardImage = ({url}) => {
    return (
        <img 
            src={url}
            className="Card-img-top" 
            alt="..." 
        />
    )
}

export default CardImage
