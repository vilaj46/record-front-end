import types from "./types.js";

/**
 * setDimensions
 *
 * @param {Number} width - Number of our width.
 * @return {Object} type and payload.
 *
 * On the initial load in the App Component, we set the width of the Left Navigation based
 * on the window width. We currently have it set for 25%.
 *
 * This function is also used in the Extension Component to keep our
 * Left Navigation Component Lined up with our Third Party Resizable Component.
 */
const setDimensions = (width) => {
  const { LOADED_APP } = types;
  return {
    type: LOADED_APP,
    payload: { width },
  };
};

/**
 * setTab
 *
 * @param {Number} tab
 * @return {Object} type and payload.
 *
 * Used in the LeftTab Component. When we click an image icon, we set
 * the tab according to the number give.
 *
 * -1 - For the initial load, not open.
 * 0 - Pages
 * 1 - Bookmarks
 */
const setTab = (tab) => {
  const { CHANGED_LEFT_TAB } = types;
  return {
    type: CHANGED_LEFT_TAB,
    payload: tab,
  };
};

/**
 * toggleExtension
 *
 * @param {Boolean} bool
 * @return {Object} type and payload.
 *
 * Used in the LeftTab Component. If we click an icon and our
 * extension is currently closed, we open it then set the tab.
 *
 * Also used in the Extension Component. Checks first to make
 * sure the Extension is open, if it isnt open it.
 *
 * If we are closing the extension to a certain with, we just toggle
 * the extension off.
 */
const toggleExtension = (bool) => {
  const { TOGGLED_EXTENSION } = types;
  return {
    type: TOGGLED_EXTENSION,
    payload: bool,
  };
};

const toggleTitles = (bool) => {
  const { TOGGLED_TITLES } = types;
  return {
    type: TOGGLED_TITLES,
    payload: bool,
  };
};

export default {
  setDimensions,
  setTab,
  toggleExtension,
  toggleTitles,
};
