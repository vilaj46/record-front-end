import React from "react";

// CSS
import styles from "./CloseButton.module.css";

// SVGS
import close from "../../../../svgs/close.svg";

const CloseButton = () => {
  return (
    <div className={styles.close}>
      <button type="button" className={styles.button}>
        <img className={styles.img} src={close} alt="X" />
      </button>
    </div>
  );
};

export default CloseButton;
