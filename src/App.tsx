import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { configureStore } from "../store/configureStore";
import Home from "./pages/Home";

import TopBar from "./components/topbar/TopBar";
import "./styles/index.scss";

const store = configureStore();

render(
  <Provider store={store}>
    <TopBar menuItems={[]} />
    <Home />
  </Provider>,
  document.getElementById("main"),
);
