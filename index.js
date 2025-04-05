const themeToggleBtn = document.querySelector(".header__theme-toggle-btn");
const themeIcon = document.querySelector(".header__theme-icon");
const body = document.body;

themeToggleBtn.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", newTheme);
  if (currentTheme == "light") {
    themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }
});
