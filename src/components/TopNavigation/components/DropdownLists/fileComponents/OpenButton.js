import React from "react";
import { connect } from "react-redux";

// CSS
import styles from "../DropdownList.module.css";

// Action
import topNavigation from "../../../../../actions/topNavigation.js";

const OpenButton = ({ uploadFile }) => {
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
  };
  return (
    <li className={styles.li}>
      <button
        type="submit"
        className={styles.button}
        onClick={(e) => e.stopPropagation()}
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

export default connect(null, { uploadFile: topNavigation.uploadFile })(
  OpenButton
);
