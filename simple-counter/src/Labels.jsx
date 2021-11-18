import { useState } from 'react'

const Labels = () => {
    const [ fruta, setFruta ] = useState('Fruta')

    const handleCambiarFruta = (nombreFruta) => setFruta(nombreFruta)

    return (
        <div style={{borderTop: '1px solid black'}}>
            <div>{fruta}</div>
            <div>
                <button onClick={() => handleCambiarFruta('Pera')}>Pera</button>
                <button onClick={() => handleCambiarFruta('Manzana')}>Manzana</button>
                <button onClick={() => handleCambiarFruta('Sandía')}>Sandía</button>
            </div>
            
        </div>
    )
}

export default Labels
