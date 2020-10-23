import React from "react";
import Draggable from "react-draggable";

import styles from "./Modals.module.css";

// Sub Components
import CloseButton from "./components/CloseButton/CloseButton";

const Modals = () => {
  return (
    <Draggable handle=".handle">
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <div className={`${styles.label} handle`}>
            <p>Modal Related Cover goes here...</p>
          </div>
          <CloseButton />
        </div>
        <div className={styles.modalContent}>Specific Modal Goes here...</div>
        <div className={`${styles.left} ${styles.handle} handle`} />
        <div className={`${styles.right} ${styles.handle} handle`} />
        <div className={`${styles.bottom} ${styles.handle} handle`} />
      </div>
    </Draggable>
  );
};

export default Modals;
