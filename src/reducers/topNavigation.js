import types from "../actions/types.js";

const INITIAL_STATE = {
  topDropDisplayed: "",
};

export default (state = INITIAL_STATE, action = {}) => {
  const { DISPLAYED_TOP_DROPDOWN } = types;
  switch (action.type) {
    case DISPLAYED_TOP_DROPDOWN:
      return { ...state, topDropDisplayed: action.payload };
    default:
      return state;
  }
};
