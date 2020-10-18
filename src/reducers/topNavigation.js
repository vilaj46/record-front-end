import types from "../actions/types.js";

const INITIAL_STATE = {
  topDropDisplayed: "",
  file: {
    name: "",
    url: "",
  },
};

export default (state = INITIAL_STATE, action = {}) => {
  const { DISPLAYED_TOP_DROPDOWN, UPLOADED_FILE } = types;
  switch (action.type) {
    case DISPLAYED_TOP_DROPDOWN:
      return { ...state, topDropDisplayed: action.payload };
    case UPLOADED_FILE:
      return { ...state, file: action.payload };
    default:
      return state;
  }
};
