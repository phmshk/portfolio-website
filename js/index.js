import printMessages from "./printMessages.js";
import { delay } from "./printMessages.js";

const rows = document.querySelector(".console-rows");
const consoleSection = document.querySelector(".console-section");
const themeToggleBtn = document.querySelector(".theme-toggle-btn");
const burgerMenu = document.querySelector(".header__burger-menu");
const headerNav = document.querySelector(".header__nav");
const html = document.documentElement;
const body = document.body;
const navItems = document.querySelectorAll(".nav__item");
const toTopBtn = document.querySelector(".to-top");

const messages = [
  " Hello, visitor.",
  " Initializing portfolio...",
  " Loading projects...",
  " Done. Enjoy your stay!",
];

const animationPlayedOnce = localStorage.getItem("animationPlayed") || false;
console.log(animationPlayedOnce);
if (animationPlayedOnce) {
  consoleSection.hidden = true;
  document.querySelector("header").classList.remove("hidden");
} else {
  consoleSection.classList.remove("hidden");
  startInitialAnimation();
}

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

themeToggleBtn.addEventListener("click", () => {
  const currentTheme = html.dataset.theme;
  const newTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(newTheme);
  themeToggleBtn.classList.toggle("dark", !(currentTheme === "dark"));
  localStorage.setItem("theme", newTheme);
});

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("clicked");
  headerNav.classList.toggle("active");
  body.classList.toggle("no-scrolling");
});

navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = e.target.hash.slice(1);
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
    if (window.innerWidth < 760) {
      resetBurgerClassesForMobile();
    }
  });
});

window.onscroll = function () {
  scrollFunction();
};

toTopBtn.addEventListener("click", topFunction);

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function resetBurgerClassesForMobile() {
  body.classList.remove("no-scrolling");
  headerNav.classList.remove("active");
  burgerMenu.classList.remove("clicked");
}

function applyTheme(theme) {
  html.dataset.theme = theme;
}

async function switchToPageView(ms) {
  await printMessages(messages, rows);
  await delay(ms);
  consoleSection.classList.add("fade-away");
}

async function startInitialAnimation() {
  document.body.style.overflow = "hidden";
  await switchToPageView(2000);
  document.body.style.overflow = "";
  setTimeout(() => {
    consoleSection.style.display = "none";
    document.querySelector("header").classList.remove("hidden");
    localStorage.setItem("animationPlayed", true);
  }, 800);
}
