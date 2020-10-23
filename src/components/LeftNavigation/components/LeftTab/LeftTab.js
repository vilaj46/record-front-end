import React, { useState } from "react";
import { connect } from "react-redux";

// CSS
import styles from "./LeftTab.module.css";

// Actions
import { toggleExtension, setTab } from "../../../../actions/leftNavigation.js";

// SVGS
import arrowBefore from "../../../../svgs/arrowBefore.svg";

const LeftTab = ({ data, active, showExtension, toggleExtension, setTab }) => {
  const [image, setImage] = useState(data.src);

  /**
   * If we are not showing the extension, open the extension.
   * Then set the tab we clicked on.
   *
   * If its open just change the tab.
   */
  const onClick = () => {
    if (!showExtension) {
      toggleExtension(true);
    }
    setTab(data.tab);
  };

  // Just highlights the image.
  const onMouseEnter = () => {
    setImage(data.hover);
  };

  // Returns image back to normal after highlighting.
  const onMouseLeave = () => {
    if (image !== data.src) {
      setImage(data.src);
    }
  };

  // Adds border which appears to be connected to the extension.
  const activeStyle = active ? styles.activeBorder : styles.iconContainer;
  // Need slighly more with if its active to appear its all connect to the extension.
  const containerWidth = active ? styles.activeWidth : styles.regWidth;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${styles.iconContainer} ${containerWidth}`}
      onClick={onClick}
    >
      <div className={activeStyle}>
        <img
          className={styles.icon}
          src={active ? data.hover : image}
          alt={data.alt}
          title={data.title}
        />
        {image === data.hover && !active && (
          <img src={arrowBefore} className={styles.arrow} alt="Right Arrow" />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { showExtension } = state.leftNavigation;
  return {
    showExtension,
  };
};

export default connect(mapStateToProps, {
  toggleExtension,
  setTab,
})(LeftTab);
