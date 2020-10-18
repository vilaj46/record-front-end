import React from "react";
import { connect } from "react-redux";

// CSS
import styles from "./TopDropdown.module.css";

// Redux Actions
import actions from "../../../../actions/topNavigation";

// Dropdown Lists
import FileDropdownList from "../DropdownLists/FileDropdownList";
import EditDropdownList from "../DropdownLists/EditDropdownList";

const TopDropdown = ({ label, displayTopDrop, topDropDisplayed }) => {
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

  // Sets the inset of the pressed. Appears pressed in? Maybe a little.
  const buttonPressed = topDropDisplayed === label ? styles.buttonPressed : "";

  // Determines which list we have open.
  const displayFileDropdown = label === "File" && topDropDisplayed === "File";
  const displayEditDropdown = label === "Edit" && topDropDisplayed === "Edit";

  return (
    <div className={styles.topDropContainer} onMouseEnter={(e) => onFocus(e)}>
      <button
        type="button"
        className={`${styles.button} ${buttonPressed}`}
        onClick={(e) => onClick(e)}
      >
        {label}
      </button>
      {displayFileDropdown && <FileDropdownList />}
      {displayEditDropdown && <EditDropdownList />}
    </div>
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