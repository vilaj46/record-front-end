import React from "react";
import { connect } from "react-redux";

// CSS
import styles from "../DropdownList.module.css";

// Actions
import topNavigation from "../../../../../actions/topNavigation.js";

const InsertButton = ({ displayTopDrop, selectDocumentsForInsertion }) => {
  // Was not firing so we use onInput.
  const onChange = () => {
    return;
  };
  const onInput = (e) => {
    const { files } = e.target;
    const objectURLS = [];

    // Files is not an array. Cannot use forEach.
    for (let i = 0; i < files.length; i++) {
      const objectURL = URL.createObjectURL(files[i]);
      objectURLS.push({
        blob: objectURL,
        name: files[i].name,
      });
    }

    // Display Modal
    // Give ability to move files around with the original.
    displayTopDrop("");
    selectDocumentsForInsertion(objectURLS);
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
          name="Insert"
          id="Insert"
          className={styles.fileInput}
          accept="application/pdf"
          value=""
          onChange={() => onChange}
          onInput={(e) => onInput(e)}
          multiple
        />
        <label htmlFor="Insert">Insert</label>
      </button>
    </li>
  );
};

export default connect(null, {
  displayTopDrop: topNavigation.displayTopDrop,
  selectDocumentsForInsertion: topNavigation.selectDocumentsForInsertion,
})(InsertButton);
