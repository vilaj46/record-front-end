import React from "react";

// CSS
import styles from "./TopNavigation.module.css";

// Sub Components
import TopDropdown from "./components/TopDropdown/TopDropdown";

const TopNavigation = () => {
  return (
    <nav className={styles.nav}>
      <TopDropdown label="File" />
      <TopDropdown label="Edit" />
      <TopDropdown label="View" />
      <TopDropdown label="Document" />
    </nav>
  );
};

export default TopNavigation;
