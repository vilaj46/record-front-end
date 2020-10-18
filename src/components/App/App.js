import React from "react";
import { connect } from "react-redux";

// CSS
import styles from "./App.module.css";

// Components
import TopNavigation from "../TopNavigation/TopNavigation";

// Actions
import topNavigation from "../../actions/topNavigation";

const App = ({ topDropDisplayed, displayTopDrop }) => {
  const onClick = () => {
    if (topDropDisplayed.length > 0) {
      displayTopDrop("");
    }
  };

  return (
    <div onClick={onClick} className={styles.app}>
      <TopNavigation />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { topDropDisplayed } = state.topNavigation;

  return {
    topDropDisplayed,
  };
};

export default connect(mapStateToProps, {
  displayTopDrop: topNavigation.displayTopDrop,
})(App);
