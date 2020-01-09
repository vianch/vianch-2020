import { DispatchAction } from "CustomRedux";
import { counterTypes } from "./counter.types";

export interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

export const counterReducer = (
  state: CounterState = initialState,
  action: DispatchAction,
) => {
  return action.type === counterTypes.ADDING_COUNTER
    ? {
      counter: action.counter,
    }
    : state;
};
