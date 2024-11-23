"use strict";
const HOME_URL = "https://google.com";
const webviewElement = document.getElementById("myWebview");

document.getElementById("home").addEventListener("click", () => {
  webviewElement.src = HOME_URL;
});

document.getElementById("back").addEventListener("click", () => {
  webviewElement.goBack();
});

document.getElementById("forward").addEventListener("click", () => {
  webviewElement.goForward();
});

document.getElementById("go").addEventListener("click", () => {
  webviewElement.src = document.getElementById("url").value;
});
