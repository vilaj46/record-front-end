import React from "react";
import { connect } from "react-redux";

// CSS
import styles from "./TopNavigation.module.css";

// Sub Components
import TopDropdown from "./components/TopDropdown/TopDropdown";

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
  const { name } = state.file;
  return {
    fileName: name,
  };
};

export default connect(mapStateToProps)(TopNavigation);
