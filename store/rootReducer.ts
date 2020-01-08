import { combineReducers } from "redux";

import counterReducer from "../src/components/counter/duck/counter.reducer";

const reducers = combineReducers({
  counterReducer,
});

export default reducers;
