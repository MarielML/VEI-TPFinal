const hamburgerBtn = document.getElementById("hamburger-btn");
const navItems = document.getElementById("nav-items");
const foto = document.getElementById("profile-img");

hamburgerBtn.addEventListener("click", () => {
  navItems.classList.toggle("active");
  if (foto.style.display === "none") {
    foto.style.display = "block";
  } else {
    foto.style.display = "none";
  }
});
