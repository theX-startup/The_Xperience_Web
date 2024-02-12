// Icons
const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");

// Themes
const userTheme = localStorage.getItem("TheX_User_Theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon toggle
const iconToggle = () => {
  moonIcon.classList.toggle("display_none");
  sunIcon.classList.toggle("display_none");
};

// Initial theme check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display_none");
    return;
  }
  sunIcon.classList.add("display_none");
};

// Theme toggle

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("TheX_User_Theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("TheX_User_Theme", "dark");
  iconToggle();
};

// Event listeners

moonIcon.addEventListener("click", () => themeSwitch());
sunIcon.addEventListener("click", () => themeSwitch());

// Initial theme check
themeCheck();
