//Doesn't works because of when this script executes vs. when the screen is painted.
// Might need to hard code it on each page, or add a click event listener
//https://css-tricks.com/snippets/jquery/highlight-all-links-to-current-page/

// const navLinks = document.querySelectorAll(".nav-link-container a");
// const styleCurrentLink = () => {
//   navLinks.forEach((link) => {
//     if (link.getAttribute("href") == window.location.pathname) {
//       link.classList.add("current");
//     } else {
//       link.classList.remove("current");
//     }
//   });
// };

// document.addEventListener("DOMContentLoaded", (event) => styleCurrentLink());

// document.addEventListener("DOMContentLoaded", () => {
//   // Select all navigation links in both the top nav and mobile menu
//   const navLinks = document.querySelectorAll("nav ul a, .menubar a");

//   // Get current page filename, default to index.html if path is "/"
//   const currentPage = window.location.pathname.split("/").pop() || "index.html";

//   navLinks.forEach((link) => {
//     // Get href of the link
//     const linkPage = link.getAttribute("href");

//     if (linkPage === currentPage) {
//       link.classList.add("current"); // Highlight the current page link
//     } else {
//       link.classList.remove("current"); // Remove from others
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul a, .menubar a");

  // Get current page
  let currentPage = window.location.pathname.split("/").pop();

  // Handle root path "/"
  if (!currentPage) currentPage = "index";

  navLinks.forEach((link) => {
    // Normalize href: remove ".html" and any leading slash
    const linkPage = link
      .getAttribute("href")
      .replace(".html", "")
      .replace(/^\//, "");

    // Treat "index" as root path
    if (currentPage === "index" && linkPage === "") {
      link.classList.add("current");
    } else if (linkPage === currentPage) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

//navbar code from here: https://codesandbox.io/p/sandbox/responsive-navbar-html-css-js-1t4um7?file=%2Fscript.js%3A1%2C1-9%2C1
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

document.addEventListener("DOMContentLoaded", () => {
  // Close the menu if clicking outside of it
  document.addEventListener("click", (event) => {
    // Only if the menu is currently active
    if (navbar.classList.contains("active")) {
      // Check if the click target is NOT inside the menu or hamburger
      if (!navbar.contains(event.target) && !mobileNav.contains(event.target)) {
        navbar.classList.remove("active");
        mobileNav.classList.remove("hamburger-active");
      }
    }
  });
});
