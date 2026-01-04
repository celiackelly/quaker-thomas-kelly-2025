//Doesn't works because of when this script executes vs. when the screen is painted.
// Might need to hard code it on each page, or add a click event listener
//https://css-tricks.com/snippets/jquery/highlight-all-links-to-current-page/

// const navLinks = document.querySelectorAll('.nav-link-container a')
// navLinks.forEach(link => {
//     if (link.getAttribute("href") == window.location.pathname) {
//         link.classList.add("current")
//     }
//     else {
//         link.classList.remove("current")
//     }
// })

//navbar code from here: https://codesandbox.io/p/sandbox/responsive-navbar-html-css-js-1t4um7?file=%2Fscript.js%3A1%2C1-9%2C1
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
