import React, { useState } from "react";
import { connect } from "react-redux";
import { Resizable } from "re-resizable";

// CSS
import styles from "./Extension.module.css";

// Actions
import actions from "../../../../actions/leftNavigation.js";
import mainSection from "../../../../actions/mainSection.js";

// SVGS
import arrow from "../../../../svgs/lnright.svg";
import arrowHover from "../../../../svgs/lnRightHover.svg";

const Extension = ({
  width,
  setDimensions,
  openTab,
  toggleExtension,
  display,
  toggleMain,
  setTab,
  shrinkTitles,
  toggleTitles,
}) => {
  /**
   * Given the tab number set the title.
   */
  let tabTitle;
  if (openTab === 0) {
    tabTitle = "Pages";
  } else if (openTab === 1) {
    tabTitle = "Bookmarks";
  } else {
    tabTitle = "";
  }

  if ((shrinkTitles && openTab === 1) || width <= 135) {
    if (openTab === 1) {
      tabTitle = tabTitle.slice(0, 5) + "...";
    }
  }
  /**
   * Standard black border for now. Will remove and restyle.
   * The display value from our reducer. If we close the resizable component
   * all the way it sets to false. Toggle the className so we don't get memory leaks
   * when taking the component out of the DOM.
   */
  const style = {
    display: `${!display ? "none" : ""}`,
  };

  const MIN_WIDTH = 110;

  return (
    <Resizable
      defaultSize={{
        width,
      }}
      style={style}
      size={{ width, minWidth: MIN_WIDTH }}
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
        const calcWidth = width + d.width;
        if (calcWidth <= 135) {
          toggleTitles(true);
        } else if (shrinkTitles === true && calcWidth > 135) {
          toggleTitles(false);
        }

        if (calcWidth <= MIN_WIDTH) {
          setTab(-1);
          toggleExtension(false);
          toggleTitles(false);
        }
      }}
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
        } else if (calcWidth <= MIN_WIDTH) {
          toggleExtension(false);
          toggleTitles(false);
          // Was getting a memory leak warning.
          setTimeout(() => {
            setTab(-1);
          }, 50);
        } else {
          if (display === false) {
            toggleExtension(true);
          }
          setDimensions(calcWidth);
        }
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.titleText}>{tabTitle}</h2>
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

const CloseButton = ({ toggleExtension, setTab }) => {
  const [image, setImage] = useState(arrow);

  const onMouseEnter = () => {
    setImage(arrowHover);
  };

  const onMouseLeave = () => {
    setImage(arrow);
  };

  const onClick = () => {
    toggleExtension(false);
    setTab(-1);
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={styles.arrowContainer}
      onClick={onClick}
    >
      <img src={image} className={styles.arrow} alt="Left Arrow" />
    </div>
  );
};

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

const mapStateToProps = (state) => {
  const { showExtension, width, openTab, shrinkTitles } = state.leftNavigation;
  return {
    display: showExtension,
    openTab,
    width,
    shrinkTitles,
  };
};

export default connect(mapStateToProps, {
  toggleExtension: actions.toggleExtension,
  toggleMain: mainSection.toggleMain,
  setDimensions: actions.setDimensions,
  setTab: actions.setTab,
  toggleTitles: actions.toggleTitles,
})(Extension);
