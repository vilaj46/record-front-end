import React from "react";

// CSS
import styles from "./DropdownList.module.css";

const FileDropdownList = () => {
  const openFile = (e) => {
    // e.stopPropagation();
    console.log("Clicked");
    console.log(e.target);
  };

  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <button type="button" className={styles.button}>
          <input
            type="file"
            name="Open"
            className={styles.fileInput}
            accept=".pdf"
            onChange={(e) => openFile(e)}
          />
          <label htmlFor="Open">Open</label>
        </button>
      </li>
    </ul>
  );
};

export default FileDropdownList;
