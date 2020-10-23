import React from "react";

// CSS
import styles from "./DropdownList.module.css";

// Sub Components
import InsertButton from "./documentComponents/InsertButton";

const DocumentDropdownList = () => {
  return (
    <ul className={styles.ul}>
      <InsertButton />
    </ul>
  );
};

export default DocumentDropdownList;
