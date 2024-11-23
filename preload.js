/**
 * The preload script runs before `index.html` is loaded
 * in the renderer. It has access to web APIs as well as
 * Electron's renderer process modules and some polyfilled
 * Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
// https://www.geeksforgeeks.org/difference-between-addeventlistener-and-onclick-in-javascript/
// https://qiita.com/KKKarin/items/ccb8ed361ab9acd1f9cf
window.addEventListener("DOMContentLoaded", () => {
  const dropZone = document.getElementById("dropZone");
  const preview = document.getElementById("preview");

  // Highlight drop zone on drag events
  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.classList.add("dragging");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragging");
  });

  // Handle dropped files
  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.classList.remove("dragging");

    const files = event.dataTransfer.files;
    if (files.length && files[0].type.startsWith("image/")) {
      const file = files[0];
      const reader = new FileReader();

      // Show a preview of the image
      reader.onload = (e) => {
        preview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please drop an image file.");
    }
  });
});
