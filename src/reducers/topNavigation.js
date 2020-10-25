import types from "../actions/types.js";

const INITIAL_STATE = {
  topDropDisplayed: "",
  modalDisplayed: "",
  modalTitle: "",
  insertDocuments: [],
};

export default (state = INITIAL_STATE, action = {}) => {
  const {
    DISPLAYED_TOP_DROPDOWN,
    DISPLAYED_MODAL,
    SELECTED_DOCUMENTS_FOR_INSERTION,
  } = types;
  switch (action.type) {
    case DISPLAYED_TOP_DROPDOWN:
      return { ...state, topDropDisplayed: action.payload };
    case DISPLAYED_MODAL:
      const newModalTitle = changeModalTitle(action.payload);
      return {
        ...state,
        modalDisplayed: action.payload,
        modalTitle: newModalTitle,
      };
    case SELECTED_DOCUMENTS_FOR_INSERTION:
      return {
        ...state,
        insertDocuments: action.payload,
      };
    default:
      return state;
  }
};

/**
 * changeModalTitle
 *
 *
 */
function changeModalTitle(tab) {
  switch (tab) {
    case 0:
      return "Pages";
    case 1:
      return "Bookmarks";
    default:
      return "";
  }
}
