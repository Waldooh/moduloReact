import React, { useState } from 'react';

const Sumador = () => {
    const [suma, setSuma] = useState(0);
    


  return (
    <div>
      <h2>Suma: {suma}</h2>
      <button onClick={() => setSuma(suma + 1)}> Agregar 1 </button>
    </div>
  );
};

export default Sumador;
