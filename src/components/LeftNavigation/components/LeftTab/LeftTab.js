import React, { useState } from "react";
import { connect } from "react-redux";

// CSS
import styles from "./LeftTab.module.css";

// Actions
import actions from "../../../../actions/leftNavigation.js";

const LeftTab = ({
  src,
  hover,
  tab,
  alt,
  title,
  setTab,
  display,
  toggleExtension,
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

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={styles.iconContainer}
      onClick={onClick}
    >
      <img className={styles.icon} src={image} alt={alt} title={title} />
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
