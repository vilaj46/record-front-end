import types from "./types.js";

/**
 * toggleMain
 *
 * @param {Boolean} bool
 * @return {Object} type and payload.
 *
 * If we resize our LeftNavigation Component to a certain length,
 * almost the full width of the window, we hide the main section.
 *
 */
export const toggleMain = (bool) => {
  const { TOGGLED_MAIN } = types;
  return {
    type: TOGGLED_MAIN,
    payload: bool,
  };
};

export default {
  toggleMain,
};
