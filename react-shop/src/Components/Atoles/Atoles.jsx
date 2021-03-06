import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';
import styles from './Atoles.module.scss'

const Atoles = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://api-cafe-tamales.herokuapp.com/api/atoles')
    .then((result) => result.json()
    .then((data) => {
      setItems(data.atol)
    })
    ) 
  }, [])

  console.log('items', items)

  return (
    <div className={styles.section}>
      {items.map((item) => {
        const { _id, img, name, price } = item;

        return (
          <Card 
            key={_id}
            title={name}
            imgUrl={img}
            price={parseInt(price)}
          />
        )
      })}
    </div>
  )
}
export default Atoles