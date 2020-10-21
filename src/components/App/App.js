import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// CSS
import styles from "./App.module.css";

// Sub Components
import TopNavigation from "../TopNavigation/TopNavigation";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import MainSection from "../MainSection/MainSection";

// Actions
import topNavigation from "../../actions/topNavigation.js";
import leftNavigation from "../../actions/leftNavigation.js";

const App = ({ topDropDisplayed, blob, displayTopDrop, setLeftNav }) => {
  const [loaded, setLoaded] = useState(false);

  /**
   * Used to close a top dropdown menu if one is open
   * and we are clicking off it.
   */
  const onClick = () => {
    if (topDropDisplayed.length > 0) {
      displayTopDrop("");
    }
  };

  useEffect(() => {
    if (!loaded) {
      // Setup for Left Navigation Panel (width).
      const winWidth = window.innerWidth;
      const leftNavWidth = Math.floor(winWidth * 0.25);
      setLeftNav(leftNavWidth);
    }

    setLoaded(true);
  }, [loaded, setLeftNav]);

  return (
    <div onClick={onClick} className={styles.app}>
      <TopNavigation />
      {loaded && (
        <div className={styles.body}>
          <LeftNavigation />
          <MainSection />
        </div>
      )}
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
  setLeftNav: leftNavigation.setDimensions,
})(App);
