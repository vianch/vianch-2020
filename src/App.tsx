import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { configureStore } from "../store/configureStore";
import Counter from "./components/counter/Counter";

const store = configureStore();

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("main"),
);
