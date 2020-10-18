import React from "react";
import { connect } from "react-redux";

// CSS
import styles from "./App.module.css";

// Components
import TopNavigation from "../TopNavigation/TopNavigation";

// Actions
import topNavigation from "../../actions/topNavigation.js";

const App = ({ topDropDisplayed, blob, displayTopDrop }) => {
  const onClick = () => {
    if (topDropDisplayed.length > 0) {
      displayTopDrop("");
    }
  };

  return (
    <div onClick={onClick} className={styles.app}>
      <TopNavigation />
      <iframe src={blob} title="File" width="100%" height="100%"></iframe>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { topDropDisplayed, file } = state.topNavigation;

  return {
    topDropDisplayed,
    blob: file.url,
  };
};

export default connect(mapStateToProps, {
  displayTopDrop: topNavigation.displayTopDrop,
})(App);
