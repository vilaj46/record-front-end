import types from "../types.js";

/**
 * @param {String} - The label of the button we pushed.
 */
export default (label) => {
  const { DISPLAYED_TOP_DROPDOWN } = types;
  return {
    type: DISPLAYED_TOP_DROPDOWN,
    payload: label,
  };
};
