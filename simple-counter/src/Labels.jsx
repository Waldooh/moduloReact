import { useState } from 'react'

const Labels = () => {
    const [ fruta, setFruta ] = useState('Fruta')

    const handlePera = () => setFruta('Pera')
    const cambiaAManzana = () => setFruta('Manzana')
    const handleSandia = () => setFruta('Sandía')

    return (
        <div style={{borderTop: '1px solid black'}}>
            <div>{fruta}</div>
            <div>
                <button onClick={handlePera}>Pera</button>
                <button onClick={cambiaAManzana}>Manzana</button>
                <button onClick={handleSandia}>Sandía</button>
            </div>
            
        </div>
    )
}

export default Labels
