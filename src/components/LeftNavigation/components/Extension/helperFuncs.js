/**
 * setCustomTitle
 *
 * @param {Object} leftNavProps
 * @return {String} New string with possible ellipses.
 *
 * Given our props for the extension, we set the display of our bookmarks
 * title for now.
 */
export function setCustomTitle(leftNavProps, minimumWidth) {
  const { tabTitle, openTab, shrinkTitles, width } = leftNavProps;
  if ((shrinkTitles && openTab === 1) || width <= minimumWidth) {
    if (openTab === 1) {
      return tabTitle.slice(0, 4) + "...";
    }
  }
  return tabTitle;
}

/**
 * onResize
 *
 * @param {Object} specs
 * @param {Object} localProps
 * @param {Object} localActions
 *
 * Triggers on every resize.
 */
export function onResize(specs, localProps, localActions) {
  // If our extension width is less than the designated lowest value before changing, we have to change our titles.
  if (specs.calcWidth <= specs.MIN_WIDTH_BEFORE_TITLES_CHANGE) {
    localActions.toggleTitles(true);
  } else if (
    // If we are shrinking the titles but doesn't make sense with our width,
    // don't shrink the titles.
    localProps.shrinkTitles === true &&
    specs.calcWidth > specs.MIN_WIDTH_BEFORE_TITLES_CHANGE
  ) {
    localActions.toggleTitles(false);
  }

  // When we make our extension too small, reset the tab, close the extension, and reset title formatting.
  if (specs.calcWidth <= specs.MIN_WIDTH_BEFORE_CLOSING) {
    localActions.setTab(-1);
    localActions.toggleExtension(false);
    localActions.toggleTitles(false);
  }
}

export function onResizeStop(specs, localProps, localActions) {
  // If our extension is so big and covers the main section,
  // hide the main section and set the extension to full screen and show the handle.
  if (
    specs.difference <= specs.MAX_WIDTH_BEFORE_CLOSING_MAIN &&
    localProps.showMain
  ) {
    localActions.setDimensions(specs.WINDOW_WIDTH - 75);
    localActions.toggleMain(false);
  } else if (
    // If our main section is closed and we are making the extension smaller,
    // show the main section.
    specs.difference > specs.MAX_WIDTH_BEFORE_CLOSING_MAIN &&
    localProps.showMain === false
  ) {
    localActions.toggleMain(true);
    localActions.setDimensions(specs.calcWidth);
  } else {
    // Regular set the demensions after the resize.
    localActions.setDimensions(specs.calcWidth);
  }
}
