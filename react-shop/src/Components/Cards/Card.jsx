import React from 'react';
import CardTitle from './CardTitle';
import CardImage from './CardImage';
import Counter from '../Counter/Counter';

const Card = ({ title = 'Sin titulo', imgUrl, price=20, addToCart, onRemoveFromCart, id, qty }) => {


    return (
      <div className="card" style={{ width: '18rem' }}>
        <CardImage imgUrl={imgUrl} />
        <div className="card-body">
          <CardTitle title={title} />
          <p>${price}</p>
          <Counter 
            qty={qty} 
            addToCart={addToCart} 
            onRemoveFromCart={onRemoveFromCart} 
            price={price}
            id={id}
          />
        </div>
      </div>
    );
  };

  export default Card;