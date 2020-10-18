import React from "react";
import { connect } from "react-redux";

// CSS
import styles from "./TopDropdown.module.css";

// Redux Actions
import actions from "../../../../actions/topNavigation";

const TopDropdown = ({ label, displayDropdown }) => {
  // onClick display the drop down.
  // If we click anywhere else on the app close the drop down.

  const onClick = () => {
    displayDropdown(label);
  };

  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default connect(null, { displayDropdown: actions.displayDropdown })(
  TopDropdown
);
