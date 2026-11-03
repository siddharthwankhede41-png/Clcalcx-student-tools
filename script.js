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
