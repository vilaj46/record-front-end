import React from "react";

// CSS
import styles from "./DropdownList.module.css";

// Sub Components
import OpenButton from "./fileComponents/OpenButton";
import ExitButton from "./fileComponents/ExitButton";

const FileDropdownList = () => {
  return (
    <ul className={styles.ul}>
      <OpenButton />
      <ExitButton />
    </ul>
  );
};

export default FileDropdownList;
