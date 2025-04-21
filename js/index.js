import printMessages from "./printMessages.js";
import { delay } from "./printMessages.js";

const rows = document.querySelector(".console-rows");
const consoleSection = document.querySelector(".console-section");
const themeToggleBtn = document.querySelector(".header__theme-toggle-btn");
const themeIcon = document.querySelector(".header__theme-icon");

const messages = [
  " Hello, visitor.",
  " Initializing portfolio...",
  " Loading projects...",
  " Done. Enjoy your stay!",
];

async function switchToPageView(ms) {
  await printMessages(messages, rows);
  await delay(ms);
  consoleSection.classList.add("fade-away");
}

//switchToPageView(2000);
consoleSection.style.display = "none";

// themeToggleBtn.addEventListener("click", () => {
//   const currentTheme = document.documentElement.getAttribute("data-theme");
//   const newTheme = currentTheme === "dark" ? "light" : "dark";
//   document.documentElement.setAttribute("data-theme", newTheme);
//   if (currentTheme == "light") {
//     themeIcon.classList.replace("fa-moon", "fa-sun");
//   } else {
//     themeIcon.classList.replace("fa-sun", "fa-moon");
//   }
// });

const toggle = document.getElementById("themeToggle");
const html = document.documentElement;

toggle.addEventListener("click", () => {
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  toggle.classList.toggle("dark", !isDark);
});
