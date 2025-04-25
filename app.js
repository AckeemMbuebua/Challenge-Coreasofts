window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 2);
});

window.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  title.classList.remove("opacity-0", "translate-y-10");
});
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
toggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
