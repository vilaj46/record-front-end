import React from "react";

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
