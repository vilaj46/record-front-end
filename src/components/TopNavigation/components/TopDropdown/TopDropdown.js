import React from "react";
import { connect } from "react-redux";

// CSS
import styles from "./TopDropdown.module.css";

// Redux Actions
import actions from "../../../../actions/topNavigation.js";

// Dropdown Lists
import FileDropdownList from "../DropdownLists/FileDropdownList";
import EditDropdownList from "../DropdownLists/EditDropdownList";
import DocumentDropdownList from "../DropdownLists/DocumentDropdownList";

const TopDropdown = ({ label, disabled, displayTopDrop, topDropDisplayed }) => {
  const onClick = (e) => {
    e.stopPropagation();
    displayTopDrop(label);
  };

  const onFocus = (e) => {
    // If we have a dropdown already displayed and it is not the current dropdown.
    // Set the new dropdown to the one we are focusing.
    if (topDropDisplayed.length > 0 && label !== topDropDisplayed) {
      const { innerHTML } = e.target;
      displayTopDrop(innerHTML);
    }
  };

  // Keeps button highlighted even when going over the dropdown list.
  const buttonPressed = topDropDisplayed === label ? styles.buttonPressed : "";
  // Disable click events for the file name.
  const isDisabled = disabled ? styles.disabled : "";

  // Determines which list we have open.
  const displayFileDropdown = label === "File" && topDropDisplayed === "File";
  const displayEditDropdown = label === "Edit" && topDropDisplayed === "Edit";
  const displayDocumentDropdown =
    label === "Document" && topDropDisplayed === "Document";

  return (
    label && (
      <div className={styles.topDropContainer} onMouseEnter={(e) => onFocus(e)}>
        <button
          type="button"
          className={`${styles.button} ${buttonPressed} ${isDisabled}`}
          onClick={(e) => onClick(e)}
        >
          {label}
        </button>
        {displayFileDropdown && <FileDropdownList />}
        {displayEditDropdown && <EditDropdownList />}
        {displayDocumentDropdown && <DocumentDropdownList />}
      </div>
    )
  );
};

const mapStateToProps = (state) => {
  const { topDropDisplayed } = state.topNavigation;
  return {
    topDropDisplayed,
  };
};

export default connect(mapStateToProps, {
  displayTopDrop: actions.displayTopDrop,
})(TopDropdown);
