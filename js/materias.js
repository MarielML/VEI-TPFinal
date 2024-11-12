document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const contentId = button.getAttribute("aria-controls");
    const content = document.getElementById(contentId);
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", !isExpanded);

    content.style.display = isExpanded ? "none" : "block";
  });
});
