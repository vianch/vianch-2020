import {Action, applyMiddleware, compose, createStore, Reducer} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import reduxThunk from "redux-thunk";

import { environments } from "../config/constants";
import { httpRequest } from "./middleware/httpRequest";
import rootReducer from "./rootReducer";

interface DispatchAction extends Action {
  [key: string]: any;
}

const configureStore = (initialState = {}) => {
  let enhancer = compose(applyMiddleware(reduxThunk, httpRequest));

  if (process.env.NODE_ENV === environments.DEVELOPMENT) {
    enhancer = composeWithDevTools(
      applyMiddleware(reduxThunk, httpRequest, logger),
    );
  }

  const reducer: Reducer<object, DispatchAction> = (state, action) =>
    rootReducer(state, action);
  return createStore(reducer, initialState, enhancer);
};

export default configureStore;
