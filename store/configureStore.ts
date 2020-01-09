import { DispatchAction } from "CustomRedux";
import { applyMiddleware, compose, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import reduxThunk from "redux-thunk";

import { environments } from "../config/constants";
import rootReducer from "./rootReducer";

export const configureStore = (initialState = {}) => {
  let enhancer = compose(applyMiddleware(reduxThunk));

  if (process.env.NODE_ENV === environments.DEVELOPMENT) {
    enhancer = composeWithDevTools(
      applyMiddleware(reduxThunk, logger),
    );
  }

  const reducer: Reducer<any, DispatchAction> = (state, action) =>
    rootReducer(state, action);
  return createStore(reducer, initialState, enhancer);
};
