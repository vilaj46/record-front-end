import React from "react";
import { connect } from "react-redux";

// CSS
import styles from "./LeftNavigation.module.css";

// Actions
import actions from "../../actions/leftNavigation.js";

// SVGS
// import bookmark from "../../svgs/bookmark.svg";
import bookmarkBefore from "../../svgs/bookmarkBefore.svg";
import bookmarkAfter from "../../svgs/bookmarkAfter.svg";
import pagesBefore from "../../svgs/pagesBefore.svg";
import pagesAfter from "../../svgs/pagesAfter.svg";

// Sub Components
import LeftTab from "./components/LeftTab/LeftTab";
import Extension from "./components/Extension/Extension";

const LeftNavigation = ({ width, setDimensions, openTab }) => {
  return (
    <nav className={styles.leftNavigation}>
      <div className={styles.icons}>
        <LeftTab
          src={pagesBefore}
          hover={pagesAfter}
          alt="Page"
          title="Pages"
          tab={0}
        />
        <LeftTab
          src={bookmarkBefore}
          hover={bookmarkAfter}
          alt="Bookmark"
          title="Bookmarks"
          tab={1}
        />
      </div>
      {openTab !== -1 && (
        <Extension
          width={width}
          setDimensions={setDimensions}
          openTab={openTab}
        />
      )}
    </nav>
  );
};

const mapStateToProps = (state) => {
  const { width, openTab } = state.leftNavigation;
  return {
    width,
    openTab,
  };
};
export default connect(mapStateToProps, {
  setDimensions: actions.setDimensions,
})(LeftNavigation);
