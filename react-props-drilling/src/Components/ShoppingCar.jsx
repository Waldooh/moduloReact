import React from "react";

const ShoppingCar = ({ qty = 0, onEmptyCar = () => {} }) => {
  const carStyle = { fonstSize: "2em" };
  return (
    <div onEmptyCar={onEmptyCar} style={carStyle}>
      🛒
      {qty}
    </div>
  );
};

export default ShoppingCar;