import React from "react";
import { connect } from "react-redux";

import styles from "./MainSection.module.css";

const MainSection = ({ showMain, blob }) => {
  const display = showMain ? styles.show : styles.hide;

  return (
    <div className={`${styles.main} ${display}`}>
      {blob.length > 0 && (
        <div className={styles.pdfContainer}>
          <iframe
            id="pdf"
            className={styles.pdf}
            src={`${blob}#zoom=100`}
            title="File"
          ></iframe>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { showMain } = state.mainSection;
  const { blob } = state.file;
  return {
    showMain,
    blob,
  };
};

export default connect(mapStateToProps)(MainSection);
