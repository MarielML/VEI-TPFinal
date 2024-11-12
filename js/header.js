const hamburgerBtn = document.getElementById("hamburger-btn");
const navItems = document.getElementById("nav-items");

hamburgerBtn.addEventListener("click", () => {
  navItems.classList.toggle("active");
});
