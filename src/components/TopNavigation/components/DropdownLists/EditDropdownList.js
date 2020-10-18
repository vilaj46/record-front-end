import React from "react";

// CSS
import styles from "./DropdownList.module.css";

const EditDropdownList = () => {
  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <button className={styles.button}>Undo</button>
      </li>
    </ul>
  );
};

export default EditDropdownList;
