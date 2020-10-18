import React from "react";

// CSS
import styles from "./DropdownList.module.css";

// Sub Components
import OpenButton from "./fileComponents/OpenButton";

const FileDropdownList = () => {
  return (
    <ul className={styles.ul}>
      <OpenButton />
    </ul>
  );
};

export default FileDropdownList;
