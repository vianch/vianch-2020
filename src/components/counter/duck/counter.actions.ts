import { counterTypes } from "./counter.types";

export const doCounter = (actualValue: number) => {
  return { counter: actualValue + 1, type: counterTypes.ADDING_COUNTER };
};
