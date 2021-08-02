import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./app/store";
import "./index.css";
import App from "./App";

axios.defaults.headers.common["Authorization"] =
  localStorage.getItem("AUTH_TOKEN") || "";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
