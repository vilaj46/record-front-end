import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css"; // CSS Reset.

// Sub Components
import App from "./components/App/App";

// Start with Top navigation bar.
// Should include File > open as the first option.
// Deploy record front end app and try with a python backend.
// Our python backend needs a requirements file.

// Continuation of Redux setup.

// Redux setup.
import rootReducer from "./reducers";
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
