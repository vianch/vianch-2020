import React from "react";
import { useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const value = 0;

  return (
    <div>
      <span>{value}</span>
      <button onClick={() => dispatch({ type: "increment-counter" })}>
        Increment counter
      </button>
    </div>
  );
};

export default Counter;
