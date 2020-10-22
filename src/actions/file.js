import types from "./types.js";

/**
 * uploadFile
 *
 * @param {Object} file - name and url ( blob ).
 * @return {Object} type and payload.
 *
 * Used in the OpenButton Component. Uploads
 * a file on the input change.
 */
export const uploadFile = (file) => {
  const { UPLOADED_FILE } = types;
  return {
    type: UPLOADED_FILE,
    payload: file,
  };
};

/**
 * closeFile
 *
 * Used in the ExitButton Component.
 * Sets our file reducer to the initial state.
 */
export const closeFile = () => {
  const { CLOSED_FILE } = types;
  return {
    type: CLOSED_FILE,
  };
};

export default {
  uploadFile,
  closeFile,
};
