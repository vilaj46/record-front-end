import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// CSS
import styles from "./App.module.css";

// Sub Components
import TopNavigation from "../TopNavigation/TopNavigation";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import MainSection from "../MainSection/MainSection";
import Modals from "../Modals/Modals";

// Actions
import topNavigation from "../../actions/topNavigation.js";
import leftNavigation from "../../actions/leftNavigation.js";

const App = ({
  topDropDisplayed,
  modalDisplayed,
  displayTopDrop,
  setLeftNav,
}) => {
  const [loaded, setLoaded] = useState(false);

  /**
   * Used to close a top dropdown menu if one is open
   * and we are clicking off it. This does not apply to the PDF iframe.
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
      {/** MODALS */}
      <Modals />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { topDropDisplayed, modalDisplayed } = state.topNavigation;
  return {
    topDropDisplayed,
    modalDisplayed,
  };
};

export default connect(mapStateToProps, {
  displayTopDrop: topNavigation.displayTopDrop,
  setLeftNav: leftNavigation.setDimensions,
})(App);
