import React from "react";
import Draggable from "react-draggable";

import styles from "./Modals.module.css";

// Sub Components
import CloseButton from "./components/CloseButton/CloseButton";
import InsertModal from "./components/InsertModal/InsertModal";

const Modals = () => {
  return (
    <Draggable handle=".handle">
      <div className={styles.modalContainer}>
        <ModalHeader />
        <div className={styles.modalContent}>
          <div className={styles.modalWrapper}>
            <InsertModal />
          </div>
          <ModalFooter />
        </div>
        <BorderHandles />
      </div>
    </Draggable>
  );
};

// Helper Components
const ModalHeader = () => {
  return (
    <div className={styles.modalHeader}>
      <div className={`handle`}>
        <p className={styles.labelText}>Modal Related Cover goes here...</p>
      </div>
      <CloseButton />
    </div>
  );
};

const BorderHandles = () => {
  return (
    <React.Fragment>
      <div className={`${styles.left} ${styles.handle} handle`} />
      <div className={`${styles.right} ${styles.handle} handle`} />
      <div className={`${styles.bottom} ${styles.handle} handle`} />
    </React.Fragment>
  );
};

const ModalFooter = () => {
  return (
    <div className={styles.modalFooter}>
      <button type="button" className={styles.modalButton}>
        Ok
      </button>
      <button type="button" className={styles.modalButton}>
        Close
      </button>
    </div>
  );
};

export default Modals;
