import React from "react";
import { connect } from "react-redux";

import styles from "./MainSection.module.css";

const MainSection = ({ showMain }) => {
  const display = showMain ? styles.show : styles.hide;
  return (
    <div className={`${styles.main} ${display}`}>
      <h1>Bull shit div</h1>
      {/* <iframe src={blob} title="File" width="50%" height="50%"></iframe> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { showMain } = state.mainSection;
  return {
    showMain,
  };
};

export default connect(mapStateToProps)(MainSection);
