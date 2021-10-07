const nav = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
window.addEventListener("scroll", fixedNav);

//sticly nav
function fixedNav() {
  // console.log(window.scrollY, nav.offsetHeight)
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("nav-active");
    logo.classList.add("logo-active");
  } else {
    nav.classList.remove("nav-active");
    logo.classList.remove("logo-active");
  }
}

//responsive nav
const toggle = document.querySelector(".toggle__button");
const navLinks = document.querySelector(".navbar__links");
const toggleIcon = document.querySelector(".toggle__icon");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggleIcon.classList.toggle("bx-menu");
  toggleIcon.classList.toggle("bx-x");
});
