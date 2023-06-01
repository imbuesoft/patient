import React, { useState } from "react";
import "./Cart.css";
const CountItem = () => {
  const [count, setCount] = useState(0);

  function increamentheandeler() {
    setCount(count + 1);
  }
  function decrementheandeler() {
    setCount(count - 1);
  }

  return (
    <div>
      <div className="count">
        <div className="minus">
          <button onClick={decrementheandeler}>-</button>
          <span>{count}</span>
        </div>
        <div className="plus">
          <button onClick={increamentheandeler}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CountItem;
