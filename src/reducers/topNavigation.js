import types from "../actions/types.js";

const INITIAL_STATE = {
  topDropDisplayed: "",
  modalDisplayed: "",
};

export default (state = INITIAL_STATE, action = {}) => {
  const { DISPLAYED_TOP_DROPDOWN, DISPLAYED_MODAL } = types;
  switch (action.type) {
    case DISPLAYED_TOP_DROPDOWN:
      return { ...state, topDropDisplayed: action.payload };
    case DISPLAYED_MODAL:
      return { ...state, modalDisplayed: action.payload };
    default:
      return state;
  }
};
