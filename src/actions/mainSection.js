import types from "./types.js";

const toggleMain = (bool) => {
  const { TOGGLED_MAIN } = types;
  return {
    type: TOGGLED_MAIN,
    payload: bool,
  };
};

export default {
  toggleMain,
};
