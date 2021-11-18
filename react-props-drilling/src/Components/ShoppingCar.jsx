import React from "react";

const ShoppingCar = ({ totalQty = 0, onEmptyCar = () => {} }) => {
  const carStyle = { fonstSize: "2em" };
  return (
    <div onEmptyCar={onEmptyCar} style={carStyle}> 🛒{totalQty} </div>
  );
};

export default ShoppingCar;