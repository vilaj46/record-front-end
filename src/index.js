import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css"; // CSS Reset.

// Sub Components
import App from "./components/App/App";

// Redux setup.
import rootReducer from "./reducers";
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

/**
 * LeftNavigation needs to be a lot less ugly. Fix the icons and borders.
 * Add hover arrows.
 * Disable vertical height fixing, show right border is draggable.
 * Disable left border from draggable.
 *
 * Bottom white showing.
 */

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
