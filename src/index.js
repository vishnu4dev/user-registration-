import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { combineForms } from "react-redux-form";
import App from "./App";

const profileDetails = { firstName: "", email: "" };
const store = createStore(
  combineForms({
    user: profileDetails
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);
