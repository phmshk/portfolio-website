const themeToggleBtn = document.querySelector(".header__theme-toggle-btn");
const themeIcon = document.querySelector(".header__theme-icon");
const body = document.body;

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }
});
