import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { InteractionsProvider } from "./context/InteractionsProvider";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <InteractionsProvider>
          <App />
        </InteractionsProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
