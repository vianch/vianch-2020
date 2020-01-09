import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { configureStore } from "../store/configureStore";
import Home from "./pages/Home";

import "./styles/index.scss";

const store = configureStore();

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("main"),
);
