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

/**
 * uploadFile
 *
 * @param {Object} file - name and url ( blob ).
 * @return {Object} type and payload.
 *
 * Used in the OpenButton Component. Uploads
 * a file on the input change.
 */
const uploadFile = (file) => {
  const { UPLOADED_FILE } = types;
  return {
    type: UPLOADED_FILE,
    payload: file,
  };
};

export default {
  displayTopDrop,
  uploadFile,
};
