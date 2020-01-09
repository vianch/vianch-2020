import { get } from "lodash";
import { createSelector } from "reselect";
import { CounterState } from "./counter.reducer";

const selectCounter = (state: CounterState) => get(state, "counterReducer", {});

export const getCounter = createSelector(selectCounter, counterData =>
  get(counterData, "counter", 0),
);
