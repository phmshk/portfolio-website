const themeToggleBtn = document.querySelector(".theme-toggle-btn");
const themeIcon = themeToggleBtn.querySelector("i");
const burgerMenu = document.querySelector(".header__burger-menu");
const headerNav = document.querySelector(".header__nav");
const html = document.documentElement;
const body = document.body;
const navItems = document.querySelectorAll(".nav__item");
const toTopBtn = document.querySelector(".to-top");

// Theme applying on site loading
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

// Theme toggling
themeToggleBtn.addEventListener("click", () => {
  const currentTheme = html.dataset.theme;
  const newTheme = currentTheme === "light" ? "dark" : "light";

  applyTheme(newTheme);


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
    if (window.innerWidth < 870) {
      resetBurgerClassesForMobile();
    }
  });
});

window.onscroll = function () {
  scrollFunction();
};

toTopBtn.addEventListener("click", topFunction);

// Animate elements on loading

const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".skills-list "
  );
  animatedElements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    setTimeout(() => {
      observer.observe(el);
    }, 100 * index);
  });
});

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
  if (theme === "light") {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
  html.dataset.theme = theme;
}

async function switchToPageView(ms) {
  await printMessages(messages, rows);
  await delay(ms);
  consoleSection.classList.add("fade-away");
}
