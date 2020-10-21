import types from "../actions/types.js";

const INITIAL_STATE = {
  width: 0,
  openTab: -1,
  showExtension: false,
};

export default (state = INITIAL_STATE, action = {}) => {
  const { LOADED_APP, CHANGED_LEFT_TAB, TOGGLED_EXTENSION } = types;
  switch (action.type) {
    case LOADED_APP:
      return {
        ...state,
        width: action.payload.width,
      };
    case CHANGED_LEFT_TAB:
      return {
        ...state,
        openTab: action.payload,
      };
    case TOGGLED_EXTENSION:
      return {
        ...state,
        showExtension: action.payload,
      };
    default:
      return state;
  }
};