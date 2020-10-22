import { combineReducers } from "redux";

// Reducers
import topNavigation from "./topNavigation.js";
import leftNavigation from "./leftNavigation.js";
import mainSection from "./mainSection.js";
import file from "./file.js";

export default combineReducers({
  topNavigation,
  leftNavigation,
  mainSection,
  file,
});
