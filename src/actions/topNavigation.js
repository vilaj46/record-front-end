import types from "./types.js";

/**
 * @param {String} - The label of the button we pushed.
 */
const displayTopDrop = (label) => {
  const { DISPLAYED_TOP_DROPDOWN } = types;
  return {
    type: DISPLAYED_TOP_DROPDOWN,
    payload: label,
  };
};

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
