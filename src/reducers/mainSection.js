import types from "../actions/types.js";

const INITIAL_STATE = {
  showMain: true,
};

export default (state = INITIAL_STATE, action = {}) => {
  const { TOGGLED_MAIN } = types;
  switch (action.type) {
    case TOGGLED_MAIN:
      return {
        ...state,
        showMain: action.payload,
      };
    default:
      return state;
  }
};
