const openMenu = document.getElementById("menu-icon");
const closeMenu = document.getElementById("close-menu");
const nav = document.getElementById("nav");
const menu = document.getElementById("nav-bar");

openMenu.addEventListener("click", () => {
  nav.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  nav.style.display = "none";
});
