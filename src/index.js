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
 * Continue Documentation and clean up front end.
 * Clean up Components Remove bloat wheere we can. Mostly importing of actions.
 *
 * Zooming with the pdf is annoying.
 *
 * Hookup backend.
 *
 * PDF Functionality
 * Insert
 * Remove
 * Shrink
 *
 * Left Navigation Tabs
 * Pages
 * Bookmarks
 * Table of Contents
 */

ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById("root")
);
