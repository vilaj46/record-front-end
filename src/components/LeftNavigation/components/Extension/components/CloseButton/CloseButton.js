import React, { useState } from "react";
import { connect } from "react-redux";

// CSS
import styles from "./CloseButton.module.css";

// SVGS
import arrowBefore from "../../../../../../svgs/arrowBefore.svg";
import arrowAfter from "../../../../../../svgs/arrowAfter.svg";

// Actions
import { toggleMain } from "../../../../../../actions/mainSection.js";

const CloseButton = ({ toggleExtension, setTab, toggleMain, showMain }) => {
  const [image, setImage] = useState(arrowBefore);

  /**
   * Highlights arrow when hovering.
   */
  const onMouseEnter = () => {
    setImage(arrowAfter);
  };

  /**
   * Returns arrow back to normal, not highlighted.
   */
  const onMouseLeave = () => {
    setImage(arrowBefore);
  };

  /**
   * When we click the button, close the extension and reset.
   * If our extension was full, show the pdf again.
   */
  const onClick = () => {
    toggleExtension(false);
    setTab(-1);
    if (showMain === false) {
      toggleMain(true);
    }
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

const mapStateToProps = (state) => {
  const { showMain } = state.mainSection;
  return {
    showMain,
  };
};

export default connect(mapStateToProps, { toggleMain })(CloseButton);
