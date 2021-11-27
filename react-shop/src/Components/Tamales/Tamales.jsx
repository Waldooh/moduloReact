import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';
import styles from './Tamales.module.scss'

const Tamales = ({ addToCart, removeFromCart, cartItems }) => {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://api-cafe-tamales.herokuapp.com/api/tamales')
    .then((result) => result.json()
    .then((data) => {
      setItems(data.tamal)
    })
    ) 
  }, [])

  console.log('items', items)

  return (
    <div className={styles.section}>
      {items.map((item) => {
        const { _id, img, name, price } = item;
        const onRemoveFromCart = () => {
          removeFromCart({id: _id, price})
        }
        const qty = cartItems[_id]?.qty
        
        return (
          <Card 
            key={_id}
            title={name}
            imgUrl={img}
            price={parseInt(price)}
            addToCart={addToCart}
            onRemoveFromCart={onRemoveFromCart}
            id={_id}
            qty={qty}
          />
        )
      })}
    </div>
  )
}
export default Tamales
