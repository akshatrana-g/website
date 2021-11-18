var changeToDark = document.querySelector("#nav-content nav ul .light");
var changeToLight = document.querySelector("#nav-content nav ul .dark");

let theme = localStorage.getItem("theme");
if (theme == null) {
  changeToLight.classList.add("hide");
  setTheme("light");
} else {
  setTheme(theme);
}

changeToDark.addEventListener("click", function () {
  changeToDark.classList.add("hide");
  changeToLight.classList.remove("hide");
  setTheme("dark");
});
changeToLight.addEventListener("click", function () {
  changeToLight.classList.add("hide");
  changeToDark.classList.remove("hide");
  setTheme("light");
});

function setTheme(mode) {
  if (mode == "light") {
    changeToLight.classList.add("hide");
    document.getElementById("theme-style").href = "css/style.css";
  }
  if (mode == "dark") {
    changeToDark.classList.add("hide");
    changeToLight.classList.remove("hide");
    document.getElementById("theme-style").href = "css/dark.css";
  }
  localStorage.setItem("theme", mode);
}

const hamburgerMenu = document.querySelector("#navigation .nav-icon");
const navContent = document.querySelector("#nav-content");
const closeNavButton = document.querySelector("#nav-content .close-btn");
const navLinks = document.querySelectorAll("#nav-content nav ul li a");

hamburgerMenu.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  navContent.classList.add("show");
});
closeNavButton.addEventListener("click", () => {
  document.body.style.overflow = "auto";
  navContent.classList.remove("show");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    navContent.classList.remove("show");
  });
});

const logo = document.querySelector("#about .card .img");
logo.addEventListener("mousemove", (e) => {
  console.log(e.pageX);
});
