"use strict";
const HOME_URL = "https://google.com";
const webviewElement = document.getElementById("myWebview");

function goHome() {
  webviewElement.src = HOME_URL;
}

function goBack() {
  webviewElement.goBack();
}

function goForward() {
  webviewElement.goForward();
}

function go() {
  webviewElement.src = document.getElementById("url").value;
}
