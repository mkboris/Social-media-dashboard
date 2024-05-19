"use strict";

const darkModeToggle = document.querySelector("#dark-mode-toggle");
const toogleName = document.querySelector(".toogle-name");

function getCurrentTheme() {
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  localStorage.getItem("dashboard")
    ? (theme = localStorage.getItem("dashboard"))
    : null;

  return theme;
}

function loadTheme(theme) {
  const root = document.querySelector(":root");
  root.setAttribute("color-scheme", `${theme}`);
}

darkModeToggle.addEventListener("click", () => {
  let theme = getCurrentTheme();
  if (theme === "dark") {
    theme = "light";
    toogleName.textContent = "Dark Mode";
  } else {
    theme = "dark";
    toogleName.textContent = "Light Mode";
  }
  localStorage.setItem("dashboard", `${theme}`);
  loadTheme(theme);
});

window.addEventListener("DOMContentLoaded", () => {
  loadTheme(getCurrentTheme());
  let theme = getCurrentTheme();
  if (theme === "dark") {
    theme = "light";
    toogleName.textContent = "Light Mode";
  } else {
    theme = "dark";
    toogleName.textContent = "Dark Mode";
  }
});
