import React, { useState } from "react";
import { connect } from "react-redux";

import styles from "./InsertModal.module.css";

const InsertModal = ({ documentsForInsertion }) => {
  // Dropdown Hooks and values.
  const [displayDrop, setDisplayDrop] = useState(false);
  const [dropValue, setDropValue] = useState("After");
  const locationProps = {
    displayDrop,
    setDisplayDrop,
    dropValue,
    setDropValue,
  };

  const [radioValue, setRadioValue] = useState("first");
  const [pointerEvents, setPointerEvents] = useState(false);
  const [pageNumValue, setPageNumValue] = useState("");

  const totalPageCount = 1;

  const onChange = (e) => {
    setPageNumValue(e.target.value);
  };

  const onRadioClick = (value) => {
    setRadioValue(value);
    if (value === "page") {
      setPointerEvents(true);
    } else if (pointerEvents) {
      setPointerEvents(false);
    }
  };

  // Filename display
  let insertFileName = "Untitled";
  if (documentsForInsertion.length === 1) {
    insertFileName = documentsForInsertion[0].name;
  } else if (documentsForInsertion.length > 1) {
    insertFileName = documentsForInsertion[0].name + "...";
  }

  return (
    <React.Fragment>
      <p className={styles.insertFile}>
        Insert File: Pages from {insertFileName}
      </p>
      <LocationDropdown locationProps={locationProps} />
      <ul className={styles.inputs}>
        <div
          className={styles.inputContainer}
          onClick={() => onRadioClick("first")}
        >
          <input
            type="radio"
            name="First"
            value="first"
            checked={radioValue === "first"}
            onChange={() => onRadioClick("first")}
          />
          <label htmlFor="First">First</label>
        </div>
        <div
          className={styles.inputContainer}
          onClick={() => onRadioClick("last")}
        >
          <input
            type="radio"
            name="Last"
            value="last"
            checked={radioValue === "last"}
            onChange={() => onRadioClick("last")}
          />
          <label htmlFor="Last">Last</label>
        </div>
        <div className={styles.inputContainer}>
          <div onClick={() => onRadioClick("page")}>
            <input
              type="radio"
              name="Page"
              value="page"
              checked={radioValue === "page"}
              onChange={() => onRadioClick("page")}
            />
            <label htmlFor="Page" className={styles.pageNumLabel}>
              Page:
            </label>
          </div>
          <input
            type="text"
            name="Number"
            value={pageNumValue}
            onChange={(e) => onChange(e)}
            className={`${styles.pageNumInput} ${
              !pointerEvents ? styles.disabled : ""
            }`}
          />
          <label
            htmlFor="Number"
            className={`${styles.pageCount} ${
              !pointerEvents ? styles.disabled : ""
            }`}
          >
            of {totalPageCount}
          </label>
        </div>
      </ul>
    </React.Fragment>
  );
};

const LocationDropdown = ({ locationProps }) => {
  const onClick = () => {
    locationProps.setDisplayDrop(!locationProps.displayDrop);
  };

  const onButtonClick = (value) => {
    locationProps.setDropValue(value);
    locationProps.setDisplayDrop(false);
  };

  return (
    <div className={styles.locationContainer}>
      Location:
      <div className={styles.dropContainer}>
        <button
          type="button"
          className={styles.dropdownButton}
          onClick={onClick}
        >
          {locationProps.dropValue}
        </button>
        {locationProps.displayDrop && (
          <ul className={styles.menu}>
            <li>
              <button
                type="button"
                className={styles.dropButton}
                onClick={() => onButtonClick("After")}
              >
                After
              </button>
            </li>
            <li>
              <button
                type="button"
                className={styles.dropButton}
                onClick={() => onButtonClick("Before")}
              >
                Before
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { insertDocuments } = state.topNavigation;
  return {
    documentsForInsertion: insertDocuments,
  };
};

export default connect(mapStateToProps)(InsertModal);
