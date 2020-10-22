import React, { useState } from "react";
import { connect } from "react-redux";

// CSS
import styles from "./LeftTab.module.css";

// Actions
import actions from "../../../../actions/leftNavigation.js";

// SVGS
import right from "../../../../svgs/lnright.svg";

const LeftTab = ({
  src,
  hover,
  tab,
  alt,
  title,
  setTab,
  display,
  toggleExtension,
  active,
}) => {
  const [image, setImage] = useState(src);

  const onClick = () => {
    if (!display) {
      toggleExtension(true);
    }
    setTab(tab);
  };

  const onMouseEnter = () => {
    setImage(hover);
  };

  const onMouseLeave = () => {
    if (image !== src) {
      setImage(src);
    }
  };

  const activeStyle = active ? styles.activeBorder : styles.iconContainer;
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
          src={active ? hover : image}
          alt={alt}
          title={title}
        />
        {image === hover && !active && (
          <img src={right} className={styles.arrow} alt="Right Arrow" />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { showExtension } = state.leftNavigation;
  return {
    display: showExtension,
  };
};

export default connect(mapStateToProps, {
  setTab: actions.setTab,
  toggleExtension: actions.toggleExtension,
})(LeftTab);
