import React from "react";
import { connect } from "react-redux";
import { Resizable } from "re-resizable";

// CSS
import styles from "./Extension.module.css";

// Actions
import actions from "../../../../actions/leftNavigation.js";
import mainSection from "../../../../actions/mainSection.js";

const Extension = ({
  width,
  setDimensions,
  openTab,
  toggleExtension,
  display,
  toggleMain,
}) => {
  /**
   * Given the tab number set the title.
   */
  let tabTitle;
  if (openTab === 0) {
    tabTitle = "Pages";
  } else {
    tabTitle = "Bookmarks";
  }

  /**
   * Standard black border for now. Will remove and restyle.
   * The display value from our reducer. If we close the resizable component
   * all the way it sets to false. Toggle the className so we don't get memory leaks
   * when taking the component out of the DOM.
   */
  const style = {
    border: "2px solid black",
    display: `${!display ? "none" : ""}`,
  };
  return (
    <Resizable
      defaultSize={{
        width,
      }}
      style={style}
      size={{ width }}
      onResizeStop={(e, direction, ref, d) => {
        const winWidth = window.innerWidth;
        const calcWidth = width + d.width;
        const difference = winWidth - calcWidth;
        if (difference <= 150) {
          setDimensions(winWidth - 50);
          toggleMain(false);
          if (display === false) {
            toggleExtension(true);
          }
        } else if (calcWidth <= 50) {
          toggleExtension(false);
        } else {
          if (display === false) {
            toggleExtension(true);
          }
          setDimensions(calcWidth);
        }
      }}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{tabTitle}</h2>
      </div>
    </Resizable>
  );
};

const mapStateToProps = (state) => {
  const { showExtension, openTab } = state.leftNavigation;
  return {
    display: showExtension,
    openTab,
  };
};

export default connect(mapStateToProps, {
  toggleExtension: actions.toggleExtension,
  toggleMain: mainSection.toggleMain,
})(Extension);
