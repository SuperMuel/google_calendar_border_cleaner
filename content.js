// Function to remove the colored borders
function removeEventBorders() {
  document.querySelectorAll(".jSrjCf").forEach((element) => {
    element.style.display = "none";
  });
}

// Run the function on page load and when the DOM changes
removeEventBorders();
const observer = new MutationObserver(removeEventBorders);
observer.observe(document.body, { childList: true, subtree: true });
