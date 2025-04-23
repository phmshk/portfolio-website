import printMessages from "./printMessages.js";
import { delay } from "./printMessages.js";

const rows = document.querySelector(".console-rows");
const consoleSection = document.querySelector(".console-section");
const toggle = document.getElementById("themeToggle");
const html = document.documentElement;

const messages = [
  " Hello, visitor.",
  " Initializing portfolio...",
  " Loading projects...",
  " Done. Enjoy your stay!",
];

toggle.addEventListener("click", () => {
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  toggle.classList.toggle("dark", !isDark);
});

async function switchToPageView(ms) {
  await printMessages(messages, rows);
  await delay(ms);
  consoleSection.classList.add("fade-away");
}

async function startInitialAnimation() {
  document.body.style.overflow = "hidden";
  await switchToPageView(2000);
  document.body.style.overflow = "";
  setTimeout(() => (consoleSection.style.display = "none"), 800);
}

//startInitialAnimation();
consoleSection.hidden = true;
