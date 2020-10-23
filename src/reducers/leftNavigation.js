import types from "../actions/types.js";

const INITIAL_STATE = {
  width: 0,
  openTab: -1,
  showExtension: false,
  shrinkTitles: false,
  tabTitle: "",
};

export default (state = INITIAL_STATE, action = {}) => {
  const {
    LOADED_APP,
    CHANGED_LEFT_TAB,
    TOGGLED_EXTENSION,
    TOGGLED_TITLES,
  } = types;
  switch (action.type) {
    case LOADED_APP:
      return {
        ...state,
        width: action.payload.width,
      };
    case CHANGED_LEFT_TAB:
      const newTabTitle = changeTabTitle(action.payload);
      return {
        ...state,
        openTab: action.payload,
        tabTitle: newTabTitle,
      };
    case TOGGLED_EXTENSION:
      return {
        ...state,
        showExtension: action.payload,
      };
    case TOGGLED_TITLES:
      return {
        ...state,
        shrinkTitles: action.payload,
      };
    default:
      return state;
  }
};

/**
 * changeTabTitle
 *
 * @param {Number} tab - The number of the tab that we clicked.
 * @return {String} What we are labelling that tab.
 *
 * When our CHANGED_LEFT_TAB action is invoked, we will also change
 * the tab title.
 */
function changeTabTitle(tab) {
  switch (tab) {
    case 0:
      return "Pages";
    case 1:
      return "Bookmarks";
    default:
      return "";
  }
}
