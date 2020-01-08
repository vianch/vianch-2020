import { Action } from "redux";

import { DispatchAction } from "../../../../store/configureStore";
import { counterTypes } from "./counter.selector";

interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

const counterReducer = (
  state: CounterState = initialState,
  action: DispatchAction,
) => {
  switch (action.type) {
    case counterTypes.ADDING_COUNTER:
      return {
        counter: action.nextCounter,
      };

    default:
      return state;
  }
};

export default counterReducer;
