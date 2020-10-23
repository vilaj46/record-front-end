import React from "react";
import { connect } from "react-redux";
import { Resizable } from "re-resizable";

// CSS
import styles from "./Extension.module.css";

// Actions
import actions from "../../../../actions/leftNavigation.js";
import mainSection from "../../../../actions/mainSection.js";

// Sub Components
import Handle from "./components/Handle/Handle";
import CloseButton from "./components/CloseButton/CloseButton";

// Helper Functions
import { setCustomTitle, onResize, onResizeStop } from "./helperFuncs.js";

const Extension = ({
  leftNavProps,
  mainSectProps,
  setDimensions,
  toggleExtension,
  toggleMain,
  setTab,
  toggleTitles,
}) => {
  const { width, showExtension, shrinkTitles } = leftNavProps;
  const { showMain } = mainSectProps;

  // Minimum width before closing the extension.
  const MIN_WIDTH_BEFORE_CLOSING = 100;
  // Minimum width before we toggle the extension titles.
  const MIN_WIDTH_BEFORE_TITLES_CHANGE = 135;
  // Maximum width before closing the main section.
  const MAX_WIDTH_BEFORE_CLOSING_MAIN = 150;

  const WINDOW_WIDTH = window.innerWidth;

  const customTabTitle = setCustomTitle(
    leftNavProps,
    MIN_WIDTH_BEFORE_TITLES_CHANGE
  );

  // Hides extension if we make it too small.
  const style = {
    display: `${!showExtension ? "none" : ""}`,
  };

  return (
    <Resizable
      defaultSize={{
        width,
      }}
      style={style}
      size={{ width, minWidth: MIN_WIDTH_BEFORE_CLOSING }}
      enable={{
        right: true,
        bottom: false,
        left: false,
        top: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      onResize={(e, direction, ref, d) => {
        // Set the new width of the extension.
        const calcWidth = width + d.width;

        const specs = {
          calcWidth,
          MIN_WIDTH_BEFORE_CLOSING,
          MIN_WIDTH_BEFORE_TITLES_CHANGE,
        };

        const localProps = {
          shrinkTitles,
        };

        const localActions = {
          toggleTitles,
          toggleExtension,
          setTab,
        };

        onResize(specs, localProps, localActions);
      }}
      onResizeStop={(e, direction, ref, d) => {
        // Set the new width of the extension.
        const calcWidth = width + d.width;
        const difference = WINDOW_WIDTH - calcWidth;

        const specs = {
          calcWidth,
          difference,
          MAX_WIDTH_BEFORE_CLOSING_MAIN,
          WINDOW_WIDTH,
        };

        const localProps = {
          showMain,
        };

        const localActions = {
          setDimensions,
          toggleMain,
        };

        onResizeStop(specs, localProps, localActions);
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.titleText}>{customTabTitle}</h2>
          <CloseButton toggleExtension={toggleExtension} setTab={setTab} />
        </div>
        <div className={styles.extensionBodyWrapper}>
          <div className={styles.extensionBody}>Hey now</div>
        </div>
        <Handle />
      </div>
    </Resizable>
  );
};

const mapStateToProps = (state) => {
  return {
    leftNavProps: state.leftNavigation,
    mainSectProps: state.mainSection,
  };
};

export default connect(mapStateToProps, {
  toggleExtension: actions.toggleExtension,
  toggleMain: mainSection.toggleMain,
  setDimensions: actions.setDimensions,
  setTab: actions.setTab,
  toggleTitles: actions.toggleTitles,
})(Extension);
