import React, { useState } from 'react';
// [valor, modificadorDeValor]

const Counter = () => {

    const [value, setvalue] = useState(0);

    const handleRestar = () => setvalue(value-1);
    const handleSumar = () => setvalue(value+1);
    const handleReset = () => setvalue(0);

    const colorLabel = value<1 ? 'red' : value<=3 ? 'orange' : 'green';
    const label = value<1 ? 'Agotado' : value;
    const restarDisabled = label === 'Agotado'

    return (
        <div>
            <div>
                <button disabled={restarDisabled} onClick={handleRestar}>-</button>
                <span style={{color: colorLabel}}>{label}</span>
                <button onClick={handleSumar}>+</button>
            </div>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;
