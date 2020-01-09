import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doCounter } from "./duck/counter.actions";
import { getCounter } from "./duck/counter.selector";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(getCounter);
  return (
    <div>
      <span>{counter}</span>
      <button onClick={() => dispatch(doCounter(counter))}>
        Increment counter
      </button>
    </div>
  );
};

export default Counter;
