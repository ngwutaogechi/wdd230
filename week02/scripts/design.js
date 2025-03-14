const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    menuBtn.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
});
const darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
