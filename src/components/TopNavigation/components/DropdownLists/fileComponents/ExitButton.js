import React from "react";
import { connect } from "react-redux";

// CSS
import styles from "../DropdownList.module.css";

// Actions
import { closeFile } from "../../../../../actions/file.js";
import topNavigation from "../../../../../actions/topNavigation.js";

const ExitButton = ({ displayTopDrop, file, closeFile }) => {
  const onClick = (e) => {
    e.stopPropagation();
    displayTopDrop("");
    if (file.name && file.blob) {
      closeFile();
    }
  };

  return (
    <li className={styles.li}>
      <button
        type="submit"
        className={styles.button}
        onClick={(e) => onClick(e)}
      >
        Exit
      </button>
    </li>
  );
};

const mapStateToProps = (state) => {
  const { file } = state;
  return {
    file,
  };
};

export default connect(mapStateToProps, {
  displayTopDrop: topNavigation.displayTopDrop,
  closeFile,
})(ExitButton);
