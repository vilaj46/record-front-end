import React from "react";
import { connect } from "react-redux";

import styles from "./MainSection.module.css";

const MainSection = ({ showMain, url }) => {
  const display = showMain ? styles.show : styles.hide;

  return (
    <div className={`${styles.main} ${display}`}>
      {url.length > 0 && (
        <div className={styles.pdfContainer}>
          <iframe
            id="pdf"
            className={styles.pdf}
            src={url}
            title="File"
          ></iframe>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { showMain } = state.mainSection;
  const { url } = state.file;
  return {
    showMain,
    url,
  };
};

export default connect(mapStateToProps)(MainSection);
