import React from "react";
import { connect } from "react-redux";

// CSS
import styles from "./TopNavigation.module.css";

// Sub Components
import TopDropdown from "./components/TopDropdown/TopDropdown";

/**
 * When a button is pushed, open the drop down. If we scroll
 * to another drop down, keep the drops downs open.
 *
 * If we click off the drop down, close the drop down.
 */

const TopNavigation = ({ fileName }) => {
  return (
    <nav className={styles.nav}>
      <TopDropdown label="File" />
      <TopDropdown label="Edit" />
      <TopDropdown label="View" />
      <TopDropdown label="Document" />
      <TopDropdown label={fileName} disabled={true} />
    </nav>
  );
};

const mapStateToProps = (state) => {
  const { name } = state.topNavigation.file;
  return {
    fileName: name,
  };
};

export default connect(mapStateToProps)(TopNavigation);
