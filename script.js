// CalcX - Student Smart Tools

document.addEventListener("DOMContentLoaded", () => {
  console.log("CalcX is ready!");

  const searchInput = document.querySelector("#searchInput");
  const toolCards = document.querySelectorAll(".tool-card");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const searchValue = searchInput.value.toLowerCase();

      toolCards.forEach(card => {
        const text = card.textContent.toLowerCase();

        card.style.display = text.includes(searchValue)
          ? "block"
          : "none";
      });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const themeButton = document.getElementById("themeToggle");

  if (themeButton) {
    themeButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      themeButton.textContent =
        document.body.classList.contains("dark-mode")
          ? "☀️ Light Mode"
          : "🌙 Dark Mode";
    });
  }
});
