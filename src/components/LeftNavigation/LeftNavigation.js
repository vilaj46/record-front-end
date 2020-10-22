import React from "react";
import { connect } from "react-redux";

// CSS
import styles from "./LeftNavigation.module.css";

// SVGS
import bookmarkBefore from "../../svgs/bookmarkBefore.svg";
import bookmarkAfter from "../../svgs/bookmarkAfter.svg";
import pagesBefore from "../../svgs/pagesBefore.svg";
import pagesAfter from "../../svgs/pagesAfter.svg";

// Sub Components
import LeftTab from "./components/LeftTab/LeftTab";
import Extension from "./components/Extension/Extension";

const LeftNavigation = ({ openTab, blob }) => {
  return (
    blob.length > 0 && (
      <nav className={styles.leftNavigation}>
        <div className={styles.icons}>
          <LeftTab
            // src={pagesBefore}
            // hover={pagesAfter}
            // alt="Page"
            // title="Pages"
            // tab={0}
            data={tabData[0]} // See below.
            active={openTab === 0}
          />
          <LeftTab
            data={tabData[1]} // See below.
            // src={bookmarkBefore}
            // hover={bookmarkAfter}
            // alt="Bookmark"
            // title="Bookmarks"
            // tab={1}
            active={openTab === 1}
          />
        </div>
        {openTab !== -1 && <Extension />}
        <div className={styles.borderOne} />
        <div className={styles.borderTwo} />
      </nav>
    )
  );
};

const mapStateToProps = (state) => {
  const { openTab } = state.leftNavigation;
  const { url } = state.file;
  return {
    openTab,
    blob: url,
  };
};

const tabData = [
  {
    src: pagesBefore,
    hover: pagesAfter,
    alt: "Page",
    title: "Pages",
    tab: 0,
  },
  {
    src: bookmarkBefore,
    hover: bookmarkAfter,
    alt: "Bookmark",
    title: "Bookmarks",
    tab: 1,
  },
];

export default connect(mapStateToProps)(LeftNavigation);
