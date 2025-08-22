document.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch("header.html")
    .then(response => {
      if (!response.ok) throw new Error("Header not found");
      return response.text();
    })
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));

  // Load footer
  fetch("footer.html")
    .then(response => {
      if (!response.ok) throw new Error("Footer not found");
      return response.text();
    })
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;

      // Attach Back to Top after footer loads
      const backToTopBtn = document.querySelector(".backToTop");
      if (backToTopBtn) {
        backToTopBtn.addEventListener("click", (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
    })
    .catch(error => console.error("Error loading footer:", error));
});
