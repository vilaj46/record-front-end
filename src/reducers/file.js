import types from "../actions/types.js";

const INITIAL_STATE = {
  name: "",
  url: "",
};

export default (state = INITIAL_STATE, action = {}) => {
  const { UPLOADED_FILE, CLOSED_FILE } = types;
  switch (action.type) {
    case UPLOADED_FILE:
      return { ...state, name: action.payload.name, url: action.payload.url };
    case CLOSED_FILE:
      return {...INITIAL_STATE}
    default:
      return state;
  }
};
