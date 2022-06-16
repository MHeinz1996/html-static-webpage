let navbar = document.getElementById("main-nav");
let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
    scrollPos = window.scrollY;
});

let navLink = document.getElementById("nav-link");

window.addEventListener("scroll", e => {
  let viewportHeight = window.innerHeight;
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
    header.classList.add('navbarOffsetMargin');
  } else {
    navbar.classList.remove('sticky');
    header.classList.remove('navbarOffsetMargin');
  }
});