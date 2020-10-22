import React, { useState } from "react";
import { connect } from "react-redux";

// CSS
import styles from "./LeftTab.module.css";

// Actions
import actions from "../../../../actions/leftNavigation.js";

// SVGS
import right from "../../../../svgs/lnright.svg";

const LeftTab = ({ data, setTab, display, toggleExtension, active }) => {
  const [image, setImage] = useState(data.src);

  const onClick = () => {
    if (!display) {
      toggleExtension(true);
    }
    setTab(data.tab);
  };

  const onMouseEnter = () => {
    setImage(data.hover);
  };

  const onMouseLeave = () => {
    if (image !== data.src) {
      setImage(data.src);
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
          src={active ? data.hover : image}
          alt={data.alt}
          title={data.title}
        />
        {image === data.hover && !active && (
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
