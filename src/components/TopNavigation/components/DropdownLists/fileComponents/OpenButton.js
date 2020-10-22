import React from "react";
import { connect } from "react-redux";

// CSS
import styles from "../DropdownList.module.css";

// Actions
import topNavigation from "../../../../../actions/topNavigation.js";
import { uploadFile } from "../../../../../actions/file.js";

const OpenButton = ({ uploadFile, displayTopDrop }) => {
  // Was not firing so we use onInput.
  const onChange = () => {
    return;
  };
  const onInput = (e) => {
    const objectURL = URL.createObjectURL(e.target.files[0]);
    uploadFile({
      name: e.target.files[0].name,
      url: objectURL,
    });

    displayTopDrop("");
  };

  const onClick = (e) => {
    e.stopPropagation();
  };

  return (
    <li className={styles.li}>
      <button
        type="submit"
        className={styles.button}
        onClick={(e) => onClick(e)}
      >
        <input
          type="file"
          name="Open"
          id="Open"
          className={styles.fileInput}
          accept="application/pdf"
          value=""
          onChange={() => onChange}
          onInput={(e) => onInput(e)}
        />
        <label htmlFor="Open">Open</label>
      </button>
    </li>
  );
};

export default connect(null, {
  uploadFile,
  displayTopDrop: topNavigation.displayTopDrop,
})(OpenButton);
