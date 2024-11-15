const profileImg = document.getElementById("profile-img");
const logoutBtn = document.getElementById("logout-btn");

profileImg.addEventListener("click", () => {
   if (logoutBtn.style.display === "none" || logoutBtn.style.display === "") {
     logoutBtn.style.display = "block";
   } else {
     logoutBtn.style.display = "none";
   }
});

logoutBtn.addEventListener("click", () => {
  window.location.href = "../index.html";
  logoutBtn.style.display = "none";
});
