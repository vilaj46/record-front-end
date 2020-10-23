import React from "react";

import styles from "./Handle.module.css";

const Handle = () => {
  return (
    <div className={styles.handle}>
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
    </div>
  );
};

export default Handle;
