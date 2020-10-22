import types from "./types.js";

/**
 * displayTopDrop
 *
 * @param {String} - The label of the button we pushed.
 * @return {Object} - type and payload.
 *
 * used in the TopDropdown Component. If we click on one of
 * the buttons we display the dropdown list.
 *
 * Also used in the App Component. If we click on the app
 * and off of the dropdown lists, we close the list.
 */
const displayTopDrop = (label) => {
  const { DISPLAYED_TOP_DROPDOWN } = types;
  return {
    type: DISPLAYED_TOP_DROPDOWN,
    payload: label,
  };
};

export default {
  displayTopDrop,
};
