import React, { useState } from 'react'
import Sumador from './Sumador'

const Home = () => {
  const [mostrar, setMostrar] = useState(true)
  return (
    <div>
      <h1>Bienvenido a Tamalito Feliz</h1>    
      <button onClick={() => setMostrar(!mostrar)}> Mostrar/ocultar </button>     
      <div style={{border: '1px solid black', margin: '10 px', padding: '10px', textAlign: 'center'}}>{mostrar && <Sumador />}</div>
    </div>
  )
}

export default Home
