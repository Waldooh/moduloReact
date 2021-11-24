import React from 'react';
import CardTitle from './CardTitle';
import CardImage from './CardImage';

const Card = ({ title = 'Sin titulo', imgUrl, price=20 }) => {


    return (
      <div className="card" style={{ width: '18rem' }}>
        <CardImage 
          imgUrl={imgUrl}
        />
        <div className="card-body">
          <CardTitle title={title} />
          <p>{price}</p>
        </div>
      </div>
    );
  };

  export default Card;