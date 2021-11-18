import React, { useState } from 'react'

// const crearEstado = (valorInicial) => {
//     let valor = valorInicial;
//     const leerValor = () => valor
//     const modificarValor = (nuevoValor) => valor = nuevoValor
//     return [leerValor, modificarValor]
// }

// const estado = crearEstado(5)
// const leerValor = estado[0]
// const modificarValor = estado[1]

// console.log('1.-', leerValor())
// modificarValor(6)
// console.log('2.-', leerValor())
// modificarValor(leerValor()+4)
// console.log('3.-', leerValor())



const Counter = () => {

    const [manzanas, setManzanas] = useState(0)


    const handleRestar = () => {
        console.log('restando')
        setManzanas(manzanas-1)
    }

    const handleSumar = () => {
        console.log('sumando')
        setManzanas(manzanas+1)
    }

    const handleReset = () => setManzanas(0)

    return (
        <div>
            <div>
                <button onClick={handleRestar}>-</button>
                <span>{manzanas} Manzanas</span>
                <button onClick={handleSumar}>+</button>
            </div>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter;
