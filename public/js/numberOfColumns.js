/*
 * Filename: \public\js\numberOfColumns.js
 * Created Date: Tuesday, July 21st 2020, 10:27:09 am
 * Author: Kenny Gosai
 */

/**
 * Changes number of cards in a row based on the screen width.
 */
function widthMatcher() {
  if (window.matchMedia("(max-width: 900px)").matches) {
    document.getElementById("movielistSearch").className =
      "row row-cols-1 row-cols-md-2";
    document.getElementById("tvlistSearch").className =
      "row row-cols-1 row-cols-md-2";
  } else if (window.matchMedia("(max-width: 1024px)").matches) {
    document.getElementById("movielistSearch").className =
      "row row-cols-1 row-cols-md-3";
    document.getElementById("tvlistSearch").className =
      "row row-cols-1 row-cols-md-3";
  } else if (window.matchMedia("(max-width: 1366px)").matches) {
    document.getElementById("movielistSearch").className =
      "row row-cols-1 row-cols-md-4";
    document.getElementById("tvlistSearch").className =
      "row row-cols-1 row-cols-md-4";
  } else {
    document.getElementById("movielistSearch").className =
      "row row-cols-1 row-cols-md-5";
    document.getElementById("tvlistSearch").className =
      "row row-cols-1 row-cols-md-5";
  }
}
widthMatcher(); // Call listener function at run time
window.addEventListener("resize", widthMatcher); // Attach listener function on state changes
