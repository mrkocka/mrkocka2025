document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".left-panel nav ul li a");
  const articleContent = document.querySelector(".right-panel");

  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const url = item.getAttribute("href");

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          articleContent.innerHTML = `<h1>${data.content}</h1>`;
        })
        .catch((err) =>
          console.error("Hiba a tartalom betöltése közben:", err)
        );
    });
  });
});
